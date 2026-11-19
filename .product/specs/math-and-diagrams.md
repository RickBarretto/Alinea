---
type: feature
slug: math-and-diagrams
status: draft
version: 1.0
phase: 1
---

# Math and Diagrams

## User story

As an academic author, I want to include mathematical expressions and diagrams in my article, so that I can communicate technical ideas without managing page layout.

## Acceptance criteria

- [ ] The author can enter inline and block mathematical expressions in Markdown and inspect a readable preview during editing.
- [ ] Block equations can receive stable identifiers, automatic numbers and cross-references that update when equations are reordered.
- [ ] A representative equation appears correctly in the exported PDF, and malformed expressions produce a useful diagnostic instead of disappearing silently.
- [ ] The author can include a Mermaid code block and inspect a preview when supported by the evaluated rendering path.
- [ ] A representative diagram appears in the exported PDF with a caption and can participate in figure numbering and cross-references.
- [ ] The feasibility results identify unsupported math or diagram cases and any limits on offline rendering before they are presented as supported.
- [ ] Source notation remains readable and editable outside the application.

## Constraints

Math preview and PDF typesetting may use different mechanisms. The author should not need to learn the PDF backend. Advanced snippets and broader diagram support can follow the initial usable path.

## Dependencies

- [Rendering Feasibility](rendering-feasibility.md)
- [Figures And Tables](figures-and-tables.md)
