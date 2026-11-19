---
type: feature
slug: cross-references
status: draft
version: 1.0
phase: 1
---

# Cross-references

## User story

As an academic author, I want to refer to sections, figures and tables by stable identity, so that I can let the document update labels and numbers when content moves.

## Acceptance criteria

- [ ] The author can create or choose a target for a section, figure or table and insert a reference without manually typing its displayed number.
- [ ] Target identifiers can be generated or explicitly supplied and remain part of the portable manuscript.
- [ ] An explicit identifier remains unchanged when its heading or caption is edited.
- [ ] After targets are reordered, a new export updates their numbers and the references that point to them.
- [ ] An unresolved reference is reported before export with enough source context to locate and repair it.
- [ ] Export uses labels appropriate to the selected template and produces working links where the PDF backend supports them.

## Constraints

Prefer interoperable Pandoc or Quarto syntax where feasible. Automatic numbering must not depend on manually maintained prose. Equation and diagram references may build on the same semantic model.

## Dependencies

- [Semantic Writing](semantic-writing.md)
