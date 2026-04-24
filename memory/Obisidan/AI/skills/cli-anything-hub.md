---
name: cli-anything-hub
source: https://github.com/HKUDS/CLI-Anything
type: skill
last_updated: 2026-04-22
---

# cli-anything-hub

Use `cli-hub` to discover and install ready-made `cli-anything-*` harnesses from HKUDS/CLI-Anything.

## Installed locally

- `cli-hub` installed via `uv tool install cli-anything-hub`

## What it does

- search supported applications
- inspect requirements for a harness
- install a harness
- launch or update installed harnesses

## Core commands

```bash
cli-hub list
cli-hub list --json
cli-hub search "obsidian" --json
cli-hub info obsidian
cli-hub install obsidian
cli-hub update obsidian
cli-hub uninstall obsidian
cli-hub launch obsidian -- --help
```

## Typical workflow

1. Search:
```bash
cli-hub search "<keyword>" --json
```
2. Inspect:
```bash
cli-hub info <name>
```
3. Install:
```bash
cli-hub install <name>
```
4. Use:
```bash
cli-anything-<name> --help
cli-anything-<name> --json <command>
```

## Example: Obsidian

```bash
cli-hub info obsidian
cli-hub install obsidian
cli-anything-obsidian --help
cli-anything-obsidian --json server status
cli-anything-obsidian --json search simple "meeting notes"
```

## Notes

- `cli-hub` is only the package manager; each app installs a separate `cli-anything-<name>` executable.
- Check `cli-hub info <name>` before installing because many harnesses require the target app to be installed locally.
- Prefer `--json` for agent use.
