---
type: feature
slug: long-manuscripts
status: draft
version: 1.0
phase: 4
---

# Long manuscripts

## User story

As a thesis or book author, I want to organize the manuscript into multiple files and publish them together so that I can work on individual chapters while producing one coherent document.

## Acceptance criteria

- [ ] I can open a project containing several Markdown chapters, see their reading order, and navigate to an individual chapter from the project outline.
- [ ] I can change chapter order and see the new order reflected in the build and generated contents where the template supports them.
- [ ] Chapter sources remain individually editable in an external text editor. After moving the whole project, its relative assets and bibliography still resolve.
- [ ] A citation or cross-reference in one chapter can resolve to a shared bibliography entry or a target in another chapter. Reordering updates the resulting numbering and preserves stable identifiers.
- [ ] A missing chapter, asset, or target is reported with the relevant source information. The rendered page count comes from the assembled PDF.

## Constraints

Single-file projects remain supported. Chapter ordering and project configuration must stay portable and human-readable. Manuscript-wide publishing works offline.

## Dependencies

- [Portable projects](portable-projects.md)
- [Semantic writing](semantic-writing.md)
- [Cross-references](cross-references.md)
- [Document metrics](document-metrics.md)
