---
name: git-conventions
description: Standardize Git branch naming and commit messages. Use when the user asks Claude to create a branch, name a branch, write a commit message, or commit changes. Apply this skill automatically for branch creation and commit requests.
---

# Git Conventions

Use this skill when the user wants Claude to create a branch or commit changes.

## Branch Naming

Create branch names with this format:

`type/ticket-summary`

If no ticket exists, use:

`type/summary`

### Allowed Types

- `feature` for new functionality
- `fix` for bug fixes
- `chore` for maintenance, tooling, or dependency work
- `refactor` for code changes that do not intentionally change behavior
- `docs` for documentation-only work
- `test` for test-focused changes
- `hotfix` for urgent production fixes

### Branch Rules

- Use lowercase only.
- Use kebab-case for the summary.
- Keep the summary short and task-focused.
- Include the ticket when the user provides one or when it is obvious from context.
- Prefer what the change does, not vague implementation wording.
- Do not block if no ticket exists; use the fallback format.

### Good Branch Examples

- `feature/abc-123-add-login`
- `fix/abc-456-handle-empty-cart`
- `chore/update-eslint-config`
- `refactor/simplify-order-service`

### Bad Branch Examples

- `mybranch`
- `Feature_Add_Login`
- `bugfix123`
- `work-update`

## Commit Messages

Write commit messages with Conventional Commits.

Use this format:

`type: short imperative summary`

### Commit Type Mapping

- `feat` for `feature`
- `fix` for `fix` and `hotfix`
- `chore` for `chore`
- `refactor` for `refactor`
- `docs` for `docs`
- `test` for `test`

### Commit Rules

- Write a short imperative subject.
- Keep the subject specific and outcome-focused.
- Match the commit type to the actual change.
- Include a ticket reference only when the user asks for it or the workflow clearly requires it.
- Avoid filler words such as `stuff`, `updates`, or `changes`.

### Good Commit Examples

- `feat: add login form validation`
- `fix: handle empty cart state`
- `chore: update eslint configuration`
- `refactor: simplify order total calculation`
- `docs: document CAP destination setup`
- `test: add coverage for order service`

### Bad Commit Examples

- `updated code`
- `fixes`
- `changes`
- `misc cleanup`

## Execution Guidance

When the user says:

- "create a branch for this"
- "open a new branch for ABC-123"
- "commit this"
- "write the commit message and commit"

Infer the best branch type or commit type from the requested work and apply these conventions automatically.

If the user does not provide a ticket, continue with the fallback branch format instead of asking for one unless the repository workflow explicitly requires tickets.
