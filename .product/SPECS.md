# Alínea § User Stories

These stories translate [issue #25](https://github.com/RickBarretto/ideas/issues/25) into proposed behavior. The user's additional requirement is initial support for Windows, macOS, and Linux. Read [PRODUCT.md](../PRODUCT.md), [architecture context](CONTEXT.md), and the [roadmap](ROADMAP.md) before implementation.

Every story has `status: draft`. Checkboxes describe acceptance criteria, not completed work. Phases preserve the source's delivery sequence; they are not dates or approval to implement the entire backlog. Deliver small milestones and update spec status deliberately.

| Phase | User stories |
| --- | --- |
| 0 § Feasibility | [Rendering](specs/rendering-feasibility.md), [native editing](specs/native-editor-feasibility.md) |
| 1 § Minimum editor | [Portable projects](specs/portable-projects.md), [semantic writing](specs/semantic-writing.md), [metadata](specs/template-metadata.md), [local citations](specs/local-citations.md), [cross-references](specs/cross-references.md), [figures and tables](specs/figures-and-tables.md), [math and diagrams](specs/math-and-diagrams.md), [template selection](specs/template-selection.md), [PDF export](specs/pdf-export.md), [document metrics](specs/document-metrics.md), [baseline diagnostics](specs/baseline-diagnostics.md) |
| 2 § Assistance | [Local review](specs/local-review.md), [writing assistance](specs/writing-assistance.md), [reference imports](specs/reference-imports.md), [submission validation](specs/submission-validation.md) |
| 3 § Templates | [Template packages](specs/template-packages.md), [international templates](specs/international-templates.md), [executable extensions](specs/executable-extensions.md) |
| 4 § Advanced | [Portable review](specs/portable-review.md), [publishing formats](specs/publishing-formats.md), [long manuscripts](specs/long-manuscripts.md), [external tools and AI](specs/external-tools-and-ai.md) |

## Reading the Stories

- **User story:** the person, task, and reason for the capability.
- **Acceptance criteria:** observable results for review and later verification.
- **Constraints:** boundaries and unresolved technical choices.
- **Dependencies:** related stories needed for the workflow.
- **Source:** the issue sections motivating the story. Detailed edge cases are proposed elaborations of those requirements, not additional confirmed user decisions.

## Shared Requirements

Local writing, review, rendering, and export work offline without an account. Manuscripts stay readable outside Alínea. No story authorizes hidden manuscript transmission, fabricated bibliography data, silent overwriting of external edits, or unverified compliance claims.

Basic caption/reference checks and individually switchable writing warnings belong to initial usability. Later analysis expands that baseline. Initial version pinning and support for institutional rules are distinct from later public package management.
