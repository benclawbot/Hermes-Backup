---
name: 5-whys-analysis
description: Drill down to root causes using the 5 Whys technique, then fix every identified issue autonomously. Load when Thomas says "figure out why", "root cause", "5 why", or any task that needs true cause diagnosis before fixing.
category: systematic-debugging
trigger: "figure out why | root cause | 5 why | why is this broken | diagnose | what caused this"
---

# 5 Whys Analysis + Fix

## Concept

The 5 Whys technique: repeatedly ask "why" to drill past symptoms to the root cause. After the analysis, automatically fix every issue identified — no fix left for later.

The skill has two phases:
1. **Diagnose** — 5 Whys iteration until root cause is reached
2. **Fix** — apply targeted fixes for each identified cause, in dependency order

---

## Phase 1: Diagnose (5 Whys Iteration)

For each "why", write:
- The question
- The answer (observable fact, not speculation)
- The next "why" triggered

Stop when the answer is:
- A concrete root cause (no further "why" applies)
- Something outside your control to fix

**Common stopping points for software/data issues:**
- User action / misconfiguration → stop (user must correct)
- Missing dependency → fixable
- Bug in external service → document, work around if possible
- Design flaw → fixable if code, escalate if not

---

## Phase 2: Fix

For each cause identified:

| Cause type | Fix approach |
|---|---|
| Code bug | Patch the file directly |
| Missing file | Create it with correct content |
| Wrong config | Patch the config |
| Permission/ownership | `sudo chown` or `chmod` via terminal |
| Missing dependency | Install or document installation |
| Data corruption | Overwrite with corrected data |
| Environment issue | Export env var or patch shell config |
| External service bug | Document + suggest workaround |

**Critical rule:** Fix causes in dependency order. If cause B exists because cause A exists, fix A first.

**After all fixes:** Verify each fix by re-running the relevant check, test, or observation that originally surfaced the symptom.

---

## Output Format

```
## 5 Whys Analysis

### Why 1
**Q:** Why [symptom]?
**A:** [Observable fact]

### Why 2
**Q:** Why [answer from Why 1]?
**A:** [Observable fact]

...

### Root Cause
[Final root cause]

## Fixes Applied

| # | Cause | Fix | Verified |
|---|---|---|---|
| 1 | [cause] | [what was done] | ✅/❌ |

## Residual Issues
[Any causes outside scope to flag to Thomas]
```

---

## Pitfalls

- **Speculation instead of facts** — each "why" answer must be based on observable evidence (file content, command output, error message, network response)
- **Stopping too early** — if the answer is "because the code is wrong", ask why the code is wrong (wrong logic, wrong assumption, missing edge case?)
- **Fixing symptoms not causes** — deleting error messages is not fixing the bug; patching the bug is
- **Missing dependency order** — fixing B before A when A causes B wastes time
- **No verification** — a fix without confirmation is just a guess

## Verification

After all fixes:
1. Re-run the original failing command or trigger
2. Confirm the symptom no longer occurs
3. Confirm no new symptoms introduced
4. Report what was fixed and what still needs manual attention
