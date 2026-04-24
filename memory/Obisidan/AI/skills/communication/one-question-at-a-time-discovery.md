---
name: one-question-at-a-time-discovery
description: Elicit requirements and architecture decisions one question at a time when the user wants a slower, less overwhelming planning flow.
version: 1.0.0
---

# One Question at a Time Discovery

Use this skill when:
- the user is planning a system, workflow, or architecture
- the user signals that too much information or too many questions were given at once
- the goal is to converge on a concrete plan without overwhelming the user

## Core principle

Ask exactly one decision-making question at a time.

Do not send large questionnaires.
Do not bundle multiple decisions into a single message.
After each answer:
1. capture the decision
2. save any durable preference or constraint to memory if appropriate
3. ask the next highest-leverage question only

## When to switch into this mode

Switch immediately if the user says things like:
- one question at a time
- too much info
- too many questions
- slow down
- keep it simple

## Recommended flow

### 1. Start with structural decisions

Ask the biggest architecture choice first, such as:
- existing system vs new system
- automatic vs approval-based workflow
- simple retrieval vs semantic retrieval
- integrate now vs defer optional components

### 2. Prefer binary or narrow questions

Good:
- existing vault or separate vault?
- full transcripts or summaries?
- automatic updates or approval first?

Avoid broad prompts like:
- describe your whole preferred setup
- answer these 12 questions

### 3. Save stable answers immediately

Use memory for durable facts such as:
- storage location
- security rules
- automation preferences
- organizational preferences
- communication preferences

Do not wait until the end to save them.

### 4. Sequence questions by dependency

Ask questions in this order:
1. scope/location
2. security constraints
3. automation level
4. organization structure
5. retrieval strategy
6. optional integrations
7. implementation details

Each next question should depend on prior answers when possible.

### 5. Keep responses brief

Acknowledge the answer briefly, then ask the next single question.
Do not restate the whole design every turn unless asked.

Example pattern:
- "Got it."
- "Next question: ..."

## Good example

User: "That’s too much info at once."

Assistant:
1. acknowledge
2. save preference if durable
3. ask exactly one narrow follow-up

Example:
- "Understood — I’ve saved that preference."
- "First question: should this live in your existing vault or a separate one?"

## Pitfalls

- dumping a full architecture summary before the user is ready
- asking many questions in a numbered list
- failing to save durable answers as they are provided
- asking low-value questions before high-leverage structural ones
- revisiting decisions already made unless there is a real conflict

## Outcome

This mode is successful when:
- the user never has to answer more than one design question per turn
- durable decisions are captured as they are made
- a final plan can be assembled cleanly from the sequence of answers
