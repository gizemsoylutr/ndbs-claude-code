---
name: claude-code-review
description: Review pull requests, diffs, patches, and code snippets for this repository with a findings-first bug-risk mindset. Use when reviewing SAP CAP, CDS, UI5, TypeScript, handlers, services, or integration changes and when repo-specific rules such as CDS-first design, thin handlers, and the ban on TypeScript any must be enforced.
---

# Claude Code Review

Use this skill to supplement the existing Claude PR review flow with repository-specific review rules.

## Review Goal

Prioritize:

- correctness
- regression risk
- security and configuration mistakes
- missing tests
- architectural violations against local CAP and UI5 rules

Keep style comments secondary. If there are no meaningful findings, say so explicitly.

## Review Order

1. Look for behavioral bugs and regression risks first.
2. Check whether CDS, annotations, projections, or framework features should have been used instead of custom TypeScript.
3. Check whether handlers and services stay thin and orchestration-only.
4. Check typing quality, especially newly introduced `any`.
5. Check whether tests are missing for risky or custom behavior.

## Repository Rules To Enforce

- Treat newly introduced TypeScript `any` as a finding by default.
- Suggest a concrete alternative to `any` when possible:
  `interface`, generated CAP type, generic, union, or `unknown` with narrowing.
- Flag business logic inside handler or service `.ts` files.
- Flag direct exposure of DB entities in services.
- Flag custom TypeScript that should likely be CDS, view, projection, annotation, enum, or aspect driven.
- Flag hardcoded service URLs, credentials, or tenant-specific endpoints.
- Prefer built-in CAP, CDS, and UI5 features over custom abstractions.

## Output Contract

Respond in this order:

1. Findings
2. Open questions or assumptions
3. Short summary

For each finding, include:

- severity
- file or area
- issue
- why it matters
- concise fix direction

## Missing Context

If the patch is incomplete or lines are missing:

- do not invent certainty
- state the assumption clearly
- keep findings limited to what the diff supports

## Example

Input:

```diff
+ async function mapBook(data: any) {
+   return { title: data.name }
+ }
```

Expected review style:

- High - `mapBook`: New `any` usage removes type safety and can hide contract regressions. Replace it with a concrete input type or `unknown` plus narrowing.

