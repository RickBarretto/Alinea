---
type: feature
slug: rendering-feasibility
status: draft
version: 1.0
phase: 0
---

# Rendering Feasibility

## User story

As a product team, I want to compare academic publishing paths with representative documents, so that I can choose a renderer based on evidence before committing to it.

## Acceptance criteria

- [ ] An ABNT scientific article and an SBC conference paper are each rendered from representative Markdown to PDF, with their source and outputs available for inspection.
- [ ] Both outputs demonstrate citations and bibliography, cross-references, figures, captioned tables, equations and Mermaid diagrams; failures and unsupported cases are recorded.
- [ ] The actual rendered PDF page count is compared with the reported count for both documents.
- [ ] The evaluation compares Quarto, Pandoc and Typst with plausible alternatives, including offline distribution and compatibility with official venue templates.
- [ ] The team records a proposed interoperable Markdown subset, known gaps, and evidence for the renderer decision; generating a PDF alone is not treated as standards validation.

## Constraints

Keep the renderer undecided during the comparison. The author must not need to learn a typesetting language. Preserve the possibility of alternative adapters for venues with different source or template requirements.

## Dependencies

None.
