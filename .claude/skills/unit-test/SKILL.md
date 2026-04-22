---
name: unit-test
description: Design and draft SAP CAP backend tests for services, handlers, validation rules, authorization-relevant behavior, and CDS-driven reporting using behavior-focused `cds.test` patterns. Use when backend CAP code changes need new tests, missing negative-path coverage, regression coverage, or a test matrix before writing assertions.
---

# SAP CAP Backend Unit Test

Use this skill to standardize how Claude prepares backend CAP tests for this repository.

## Workflow

1. Read the relevant CDS service definition, handler code, and any existing backend tests before proposing new tests.
2. Extract the externally visible behavior that changed.
3. Produce a short test matrix before writing code.
4. Default to `cds.test`.
5. Prefer testing behavior through CAP service APIs and requests instead of calling internal functions directly.
6. Include positive flow, negative flow, validation behavior, authorization-relevant behavior, and regression risk coverage when applicable.
7. If the code change is mostly CDS-driven, keep the tests focused on service behavior rather than implementation structure.

## Repository Rules To Enforce

- Use `cds.test` by default.
- Prefer behavior-focused service tests over implementation-detail tests.
- Add coverage for custom handlers, authorization-relevant changes, and CDS-based reporting behavior when introduced.
- Do not introduce a custom test harness if `cds.test` is sufficient.
- Treat over-mocking as a risk. Mock only when an external boundary cannot be exercised reasonably through CAP test flows.
- Do not assert internal helper calls, temporary variable shapes, or private implementation details when the same behavior can be verified through the service contract.

## Required Input

Ask for or infer these inputs before drafting tests:

- changed backend files or relevant paths
- the behavior to verify
- expected outcome or regression risk
- any existing test file or local test convention

If some context is missing, state the assumption explicitly and keep the draft limited to what the provided code supports.

## Output Contract

Respond in this order:

1. Scope
2. Test Matrix
3. Assumptions / Missing Context
4. Proposed Tests
5. Quick Self-Review

Keep the test matrix compact and behavior-oriented.

## Quick Self-Review

Before finishing, check:

- Are the tests centered on service behavior rather than internal implementation?
- Is `cds.test` used unless there is a clear reason not to?
- Are risky negative-path and authorization cases covered where relevant?
- Are assertions specific enough to catch regressions without overfitting to the implementation?
- Is unnecessary mocking avoided?

## Example Invocations

- Use `unit-test` to create a CAP backend test matrix and `cds.test` draft for this service change.
- Use `unit-test` to add missing negative and authorization-related tests for this handler change.
- Use `unit-test` to review whether this backend PR is missing service-level regression tests.
