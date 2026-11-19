---
type: feature
slug: figures-and-tables
status: draft
version: 1.0
phase: 1
---

# Figures and Tables

## User story

As an academic author, I want to insert and edit captioned figures and tables, so that I can include evidence in an article without manually managing their layout.

## Acceptance criteria

- [ ] The author can insert a local image, see a usable preview, edit its caption and optional description, and retain a relative project asset path.
- [ ] The author can create and edit a basic table, including its headers, rows, columns, alignment and caption, while retaining portable Markdown. The author can paste spreadsheet data and reorder columns.
- [ ] Figures and tables can have stable identifiers and be referenced from the manuscript without manually maintained numbers.
- [ ] Before export, each figure or table without a caption is identified at its source location so the author can supply one.
- [ ] A PDF export includes the image and table with numbering and caption placement determined by the chosen template.
- [ ] A table too wide for the selected paper format is identified so the author can adjust it before submission.
- [ ] An unsupported image or table representation is reported clearly rather than silently omitted from the export.

## Constraints

The initial scope is basic images and tables. Complex table representations and advanced placement should not force authors to write LaTeX. Asset handling must preserve portability and offline use.

## Dependencies

- [Semantic Writing](semantic-writing.md)
- [Cross References](cross-references.md)
