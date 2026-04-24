---
name: cronjob-ops
description: Thomas-specific rules for creating and maintaining cron jobs in Hermes.
source: /home/thomas/.hermes/skills/autonomous-ai-agents/cronjob-ops/SKILL.md
mirrored_from: Hermes skill store
last_mirrored: 2026-04-22
---

# Cron Job Ops

Use this skill whenever creating, updating, or reviewing cron jobs for Thomas.

## Default policy

For maintenance/automation jobs:
- Do **not** notify on successful runs.
- Do **not** notify on routine "no changes" runs.
- Prefer `deliver: local` so successful runs stay silent.

Exception:
- Reminder jobs are supposed to notify. For reminder jobs, normal delivery to chat is fine.

## Failure-handling policy

Before notifying Thomas about a warning or failure:
1. Reproduce the failure.
2. Perform a concise **5 Whys** root-cause analysis.
3. Fix every issue you can identify safely.
4. Re-run the job or underlying command.
5. Verify the fix actually worked.
6. Only then notify Thomas if:
   - the issue could not be fully fixed,
   - manual intervention is still needed,
   - or the incident is important enough that he should know what broke and what was already repaired.

## Preferred cron pattern

For recurring maintenance jobs:
- Set `deliver: local`.
- Put the self-healing policy into the cron prompt.
- In the prompt, instruct the cron run to:
  - run the task,
  - stay silent on success,
  - on failure, diagnose + fix + verify,
  - send a concise message only if unresolved issues remain or manual action is needed.

## Notification format when needed

Keep incident notifications short and practical:
- what failed
- root cause
- fixes applied
- verification result
- what still needs manual action (if anything)

## Reminders

For reminder jobs:
- deliver to chat normally
- keep the reminder concise
- include the specific decision or checklist items Thomas must review

## Checklist before finishing

- Is this a reminder or a maintenance job?
- If maintenance: is success silent?
- If failure handling is needed: does the prompt require 5 Whys + fix + retest before notifying?
- Is the message concise and only sent when actually useful?
