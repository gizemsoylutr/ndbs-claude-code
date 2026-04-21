---
name: plan-persistence
description: Save a final plan as a Markdown file in the current workspace. Use when the user explicitly asks to save, persist, export, or keep a generated plan for later reuse.
---

# Plan Persistence

Save the final plan to a local Markdown file only when the user explicitly invokes this skill or explicitly asks for the plan to be written to disk.

## Workflow

1. Start from the final plan that will be shown to the user.
2. Derive a short task name from the plan topic and convert it to lowercase kebab-case.
3. Use the default filename `plan-<task-name>.md`.
4. Save the file in the repository root of the active workspace unless the user specifies a different local path.
5. Write the full final plan content to the file without summarizing or reformatting it into a different structure.

## Rules

- Keep the saved Markdown content identical in substance to the final plan presented to the user.
- Do not save draft notes, exploration output, or partial plans.
- Treat this skill as explicit-only behavior. Do not save plans automatically unless the user asks or invokes `$plan-persistence`.
- If the user provides a filename or path, use it.
- If the target file already exists and the user did not say to overwrite it, preserve the existing file and save the new plan with a deterministic suffix such as `-v2`.
- Prefer a simple Markdown file with no extra wrapper text outside the plan itself.

## Output Expectations

- Default path: repository root of the active workspace
- Default filename: `plan-<task-name>.md`
- Default content: the complete final plan

## Example

If the plan is about creating an agent hub, save it as `plan-agent-hub.md` in the repository root of the active workspace unless the user asked for a different path or name.
