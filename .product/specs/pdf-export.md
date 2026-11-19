---
type: feature
slug: pdf-export
status: draft
version: 1.0
phase: 1
---

# PDF Export

## User story

As an academic author, I want to preview and export my article as a PDF, so that I can share a document laid out by the selected academic template.

## Acceptance criteria

- [ ] The author can build a PDF locally from a saved project using an available ABNT article or SBC paper template without an account or network connection.
- [ ] The export includes manuscript text, required metadata, resolved citations and bibliography, figures, tables and supported equations in the chosen template.
- [ ] The author can open a generated PDF preview on demand and save the output to a chosen location.
- [ ] Errors and relevant validation warnings are presented before or during export with source context when available; a failed build is not shown as a successful new PDF.
- [ ] The project records compatible template and renderer versions for repeatable export, and changes to either are not silently applied to an existing submission.
- [ ] The PDF preserves selectable text, hyperlinks, metadata and international characters where supported; known backend limitations are visible.

## Constraints

PDF generation alone does not establish standards compliance. Baseline template regression evidence is required for the supported article paths. DOCX and public template management are later work.

## Dependencies

- [Rendering Feasibility](rendering-feasibility.md)
- [Template Selection](template-selection.md)
- [Baseline Diagnostics](baseline-diagnostics.md)
- [Math And Diagrams](math-and-diagrams.md)
