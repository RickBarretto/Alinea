---
type: feature
slug: native-editor-feasibility
status: draft
version: 1.0
phase: 0
---

# Native Editor Feasibility

## User story

As a product team, I want to evaluate native Rust editing approaches, so that I can choose a desktop foundation that supports accessible academic writing.

## Acceptance criteria

- [ ] Slint and Iced are evaluated against the same representative editing tasks, including Unicode text, selection, keyboard navigation, Markdown presentation and a contextual action.
- [ ] The evaluation records accessibility and text-editing limitations, evidence from running each candidate, and unresolved risks on Windows, macOS and Linux.
- [ ] An author can inspect how source syntax and readable structural presentation relate during an editing task.
- [ ] The evaluation identifies whether a native editor can preserve normal text editing while supporting the planned writing experience.
- [ ] A decision or explicitly documented remaining investigation follows the comparison; framework preference alone does not count as a successful evaluation.

## Constraints

Use Rust and investigate a native desktop application without a browser shell. Do not select a UI framework before the evaluation. This work is feasibility evidence, not a complete editor.

## Dependencies

None.
