#!/usr/bin/env python3
"""
Sync environment variables to Vercel via API.

Usage:
    python3 scripts/sync-env-to-vercel.py [--env production|preview|development]

What it does:
    1. Reads secrets from .env.local (BROWSERLESS_API_KEY, STRIPE_SECRET_KEY, etc.)
    2. Reads non-sensitive defaults from hardcoded NON_SENSITIVE_DEFAULTS
    3. Gets current env vars from Vercel API to find existing var IDs
    4. Updates existing vars via PATCH (using env var ID)
    5. Creates new vars via POST
    6. Triggers a production redeploy

Prerequisites:
    - VERCEL_TOKEN must be in ~/.env or environment variable
    - BROWSERLESS_API_KEY and other secrets must be in .env.local
    - Script reads .env.local for secret VALUES — var NAMES are hardcoded below
"""

import os, sys, json, urllib.request, urllib.error
from pathlib import Path
from typing import Optional

# ── Configuration ────────────────────────────────────────────────────────────

PROJECT_ROOT = Path(__file__).parent.parent
ENV_FILE = PROJECT_ROOT / ".env.local"
VERCEL_TOKEN = ""
VERCEL_ORG_ID = "team_8c716rcsFLmXenG1W16unQYb"
VERCEL_PROJECT_ID = "prj_g6B15u8NsNerHMQpYvfWNIiHPtE0"
VERCEL_API = "https://api.vercel.com"

# Env vars to sync — name → (sensitive, default_value_or_None)
# sensitive=True → read value from .env.local
# sensitive=False → use default_value
ENV_VARS = {
    # Secrets (read from .env.local)
    "BROWSERLESS_API_KEY":  {"sensitive": True,  "default": None},
    "STRIPE_SECRET_KEY":    {"sensitive": True,  "default": None},
    "STRIPE_WEBHOOK_SECRET":{"sensitive": True,  "default": None},
    "RESEND_API_KEY":       {"sensitive": True,  "default": None},
    "OPENAI_API_KEY":       {"sensitive": True,  "default": None},
    "MINIMAX_API_KEY":      {"sensitive": True,  "default": None},

    # Non-sensitive (use default, or set explicitly)
    "OPENAI_BASE_URL":       {"sensitive": False, "default": "https://api.minimax.io/v1"},
    "NEXT_PUBLIC_APP_URL":   {"sensitive": False, "default": "https://complyscan2.vercel.app"},
    "DATABASE_PATH":         {"sensitive": False, "default": "/tmp/complyscan.db"},
    "STRIPE_PRICE_SINGLE_SCAN": {"sensitive": False, "default": None},  # read from .env.local
    "STRIPE_PRICE_MONTHLY":  {"sensitive": False, "default": None},     # read from .env.local
}


# ── Helpers ──────────────────────────────────────────────────────────────────

def read_env_local(path: Path) -> dict:
    """Parse .env.local into a dict."""
    env = {}
    if not path.exists():
        print(f"WARNING: {path} not found — skipping sensitive var lookup")
        return env
    for line in path.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        if "=" not in line:
            continue
        key, _, value = line.partition("=")
        env[key.strip()] = value.strip()
    return env


def vercel_api(method: str, path: str, data: dict | None = None) -> tuple[dict, int]:
    """Make an authenticated request to the Vercel API. Returns (body_dict, status_code)."""
    if not VERCEL_TOKEN:
        die("VERCEL_TOKEN not set. Get one at: https://vercel.com/tokens")

    url = f"{VERCEL_API}{path}"
    headers = {
        "Authorization": f"Bearer {VERCEL_TOKEN}",
        "Content-Type": "application/json",
    }
    body = json.dumps(data).encode() if data else None
    req = urllib.request.Request(url, method=method, data=body, headers=headers)

    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read()), resp.status
    except urllib.error.HTTPError as e:
        body_text = e.read().decode()
        try:
            body_json = json.loads(body_text)
        except Exception:
            body_json = {"raw": body_text}
        return body_json, e.code


def die(msg: str):
    print(f"FATAL: {msg}")
    sys.exit(1)


def get_env_vars() -> dict[str, dict]:
    """Get all environment variables from Vercel. Returns dict: key → {id, type, target, value}."""
    result, status = vercel_api(
        "GET",
        f"/v13/projects/{VERCEL_PROJECT_ID}/env?teamId={VERCEL_ORG_ID}&decrypt=true"
    )
    if status != 200:
        die(f"Failed to get env vars: {result}")
    envs = {}
    for v in result.get("envs", []):
        envs[v["key"]] = {
            "id": v["id"],
            "type": v.get("type", "encrypted"),
            "target": v.get("target", []),
            "value": v.get("value", ""),
        }
    return envs


def upsert_env_var(
    key: str,
    value: str,
    target: str = "production",
    sensitive: bool = False,
    existing_vars: dict | None = None,
) -> dict:
    """
    Create or update a single env var on Vercel.
    - If key exists: PATCH using env var ID (preserve original type)
    - If key doesn't exist: POST to create
    """
    var_type = "encrypted" if sensitive else "plain"
    display_type = "[sensitive]" if sensitive else "[plain]"

    if existing_vars and key in existing_vars:
        # Update existing — preserve the ORIGINAL type (existing sensitive vars use type "sensitive")
        existing_type = existing_vars[key].get("type", var_type)
        var_id = existing_vars[key]["id"]
        body = {
            "value": value,
            "target": [target],
            "type": existing_type,  # preserve original type
        }
        result, status = vercel_api(
            "PATCH",
            f"/v13/projects/{VERCEL_PROJECT_ID}/env/{var_id}?teamId={VERCEL_ORG_ID}",
            body,
        )
        if status in (200, 201):
            print(f"  ✓ Updated {key} {display_type} (type={existing_type}, ID: {var_id})")
            return result
        else:
            print(f"  ✗ PATCH failed for {key}: {result.get('error', {}).get('message', result)}")
            return result
    else:
        # Create new
        body = {
            "key": key,
            "value": value,
            "target": [target],
            "type": var_type,
        }
        result, status = vercel_api(
            "POST",
            f"/v13/projects/{VERCEL_PROJECT_ID}/env?teamId={VERCEL_ORG_ID}",
            body,
        )
        if status in (200, 201):
            new_id = result.get("id", "?")
            print(f"  + Created {key} {display_type} (ID: {new_id})")
            return result
        else:
            print(f"  ✗ POST failed for {key}: {result.get('error', {}).get('message', result)}")
            return result


def trigger_redeploy() -> dict:
    """Trigger a production redeploy via Vercel CLI (more reliable than API for GitHub repos)."""
    import subprocess
    print("\nTriggering production redeploy via Vercel CLI...")
    try:
        result = subprocess.run(
            ["vercel", "deploy", "--force", "--prod", "--token", VERCEL_TOKEN],
            capture_output=True, text=True, timeout=120,
            cwd=PROJECT_ROOT,
        )
        if result.returncode == 0:
            output = result.stdout + result.stderr
            print(f"  ✓ Redeploy triggered")
            # Find deployment URL
            for line in output.splitlines():
                if "vercel.com" in line or "deployment" in line:
                    print(f"    {line.strip()}")
            return {"success": True, "output": output}
        else:
            print(f"  ✗ Redeploy CLI failed: {result.stderr}")
            return {"success": False, "error": result.stderr}
    except FileNotFoundError:
        print("  ✗ Vercel CLI not installed. Skipping redeploy.")
        print("    Install with: npm install -g vercel")
        return {"success": False, "error": "vercel CLI not found"}
    except Exception as e:
        print(f"  ✗ Redeploy error: {e}")
        return {"success": False, "error": str(e)}


# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    global VERCEL_TOKEN

    target_env = sys.argv[1] if len(sys.argv) > 1 else "production"

    print(f"Syncing env vars to Vercel [{target_env}]")
    print(f"Project: {VERCEL_PROJECT_ID}  Org: {VERCEL_ORG_ID}\n")

    # Find VERCEL_TOKEN
    VERCEL_TOKEN = os.environ.get("VERCEL_TOKEN", "")
    if not VERCEL_TOKEN:
        token_file = Path("~/.env").expanduser()
        if token_file.exists():
            for line in token_file.read_text().splitlines():
                if line.startswith("VERCEL_TOKEN="):
                    VERCEL_TOKEN = line.split("=", 1)[1].strip()
    if not VERCEL_TOKEN:
        die("VERCEL_TOKEN not found. Set in ~/.env or environment variable.")

    # Load .env.local for secret values
    env_local = read_env_local(ENV_FILE)
    print(f"Loaded {len(env_local)} vars from {ENV_FILE}\n")

    # Get existing Vercel env vars (to find their IDs)
    print("Fetching existing Vercel env vars...")
    existing = get_env_vars()
    print(f"Found {len(existing)} existing vars\n")

    # Sync each env var
    print(f"Syncing {len(ENV_VARS)} env vars:")
    for key, cfg in ENV_VARS.items():
        sensitive = cfg["sensitive"]
        default = cfg["default"]

        # Get value
        if sensitive:
            value = env_local.get(key, "")
        else:
            value = default if default else env_local.get(key, "")

        if not value:
            print(f"  - Skipping {key} (no value in .env.local and no default)")
            continue

        upsert_env_var(key, value, target=target_env, sensitive=sensitive, existing_vars=existing)

    # Redeploy
    if target_env == "production":
        trigger_redeploy()

    print("\nDone!")


if __name__ == "__main__":
    main()
