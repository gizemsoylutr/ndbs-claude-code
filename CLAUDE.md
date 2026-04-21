# SAP CAP + UI5 Claude Team Rules

## 1. MCP First
- For CAP tasks, use the CAP MCP server first.
- For UI5 tasks, use the UI5 MCP server first.
- If MCP is not enough, fall back to the next best official source or tool.

## 2. CDS First
Before writing TypeScript, check whether CDS can solve it with:
- projections
- views
- annotations
- enums, aspects, and common traits

Use TypeScript handlers only when CDS is not enough.

## 3. Model Cleanly
- Never expose DB entities directly in services.
- Use service projections.
- Prefer shared aspects over repeated fields.
- Put validation and security in CDS annotations first.

## 4. Name by Domain
- Names must reflect the business domain.
- If the domain is unclear, ask instead of inventing one.
- Avoid generic names like `DemoService`, `TestService`, and `SampleService`.

## 5. Keep Handlers and Services Thin
- Use `cds.ApplicationService`.
- Prefer `before`, then `on`, then `after`.
- Keep handlers and service implementations free of business logic.
- Do not implement business logic directly inside handler or service `.ts` files.
- Handlers and services should only orchestrate request flow.
- Add a short comment explaining why CDS was insufficient whenever custom code is introduced.

## 6. Use Official Tooling
- Add CAP features with `cds add` where supported.
- Do not edit `package.json` manually for CAP dependencies or config unless the toolchain requires it or the user explicitly asks for it.
- For UI5, use the official SAP UI5 SDK as the primary reference: https://ui5.sap.com/
- For CAP, use the official CAP documentation as the primary reference: https://cap.cloud.sap/docs/
- Default CAP project baseline: `nodejs`, `typescript`, `mta`, `xsuaa`, `destination`.

## 7. Scope Control
- Do not create new services, entities, or app features unless the user explicitly asks for them.

## 8. Best Practices First
- Always prefer the best-practice approach over the quickest patch.
- Favor less code and more framework.
- Use built-in CAP, CDS, and UI5 features before adding custom logic.
- Avoid custom abstractions unless they clearly reduce complexity.
- Use a modular structure with clear class responsibilities.
- Keep domain logic, integration logic, and orchestration separated.
- Prefer small, cohesive classes over large mixed-responsibility files.

## 9. HTTP Integration Standards
- For outbound HTTP calls, use an HTTP client abstraction instead of ad-hoc request code.
- In SAP environments, prefer Destinations for endpoint configuration and connectivity.
- Do not hardcode service URLs, credentials, or tenant-specific endpoints.

## 10. Skills for Repeated Work
- Use a skill when the same SAP task pattern repeats.
- Good candidates include CAP service design checks, CDS review, UI5 binding review, and Fiori annotation checks.
- Do not create a skill for one-off prompts.

## 11. Subagents for Parallel Work
- Use subagents only for isolated parallel tasks.
- Good candidates include splitting CAP backend review and UI5 consumption review.
- Keep ownership clear and avoid overlapping file responsibility.

## 12. GitHub Collaboration
- Use GitHub MCP for PR context, review comments, and follow-up tasks.
- Prefer PR comments over ad-hoc chat when the discussion must stay attached to code.
- Summon Codex from the PR comment flow for review or fix proposals.

## 13. Plan Output Persistence
- After producing a final plan, save it locally as a Markdown file.
- Name the file based on the task using lowercase kebab-case.
- Use the format `plan-<task-name>.md`.
- Example: `plan-agent-hub-initial.md`.
- Save the file automatically in the local workspace without asking again.
- The file must contain the full final plan so it can be reused later.

## 14. Fiori UI and Reporting Defaults
- Whenever a new UI is added, use the latest stable version of `@sap/generator-fiori` available in the current environment or from an explicitly verified official source.
- For generated UIs, prefer the `freestyle` option unless the user explicitly asks for another pattern.
- Default to OData V2 consumption for SAP UI scenarios and expose CAP services through `@cap-js-community/odata-v2-adapter` unless the user explicitly requires OData V4 only.
- In freestyle UI5 apps, prefer `sap.ui.comp` smart controls such as `SmartTable`, `SmartFilterBar`, and `SmartChart`, especially for reporting and filter-driven screens.
- Use annotations as much as possible to drive the UI and reduce custom frontend logic.
- If reports are required on the backend, model them with CDS views first.
- Keep custom code in the service layer to a minimum and prefer CDS modeling, views, and annotations over custom service logic.
