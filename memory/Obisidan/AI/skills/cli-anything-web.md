---
name: cli-anything-web
source: https://github.com/ItamarZand88/CLI-Anything-WEB
type: skill
last_updated: 2026-04-22
---

# cli-anything-web

Use the CLI-Anything-WEB project to generate or use agent-native CLIs for websites.

## Summary

- Prefer an existing generated `cli-web-*` tool from the repo if the site is already covered.
- Otherwise use the Claude Code plugin to generate a new CLI from live website traffic.
- Best for quick CLI access to websites with agent-friendly `--json` output.

## Repo paths

- Repo clone: `/tmp/cli-anything-web`
- Plugin dir: `/tmp/cli-anything-web/cli-anything-web-plugin`
- Hermes skill: `software-development/cli-anything-web`
- Dropbox portable copy: `/home/thomas/Dropbox/skills/cli-anything-web/SKILL.md`

## Basic workflow

1. Check whether the repo already contains a generated CLI for the target site.
2. If yes, install from `<site>/agent-harness/` and use `cli-web-<site> ... --json`.
3. If not, run Claude Code with the plugin loaded:

```bash
cd /tmp/cli-anything-web
claude --plugin-dir /tmp/cli-anything-web/cli-anything-web-plugin
```

Then inside Claude:

```bash
/cli-anything-web https://target-site.example.com
```

## Good starter examples

```bash
cd /tmp/cli-anything-web/gh-trending/agent-harness && python3 -m pip install -e .
cli-web-gh-trending repos list --language python --since weekly --json

cd /tmp/cli-anything-web/unsplash/agent-harness && python3 -m pip install -e .
cli-web-unsplash photos search "mountains" --json
```

## Notes

- Requires Claude Code, Node.js, Python 3, and Playwright CLI.
- Some sites need browser login during capture.
- `--mitmproxy` is available for harder captures.
- Generated CLIs use undocumented web APIs and can break when websites change.
