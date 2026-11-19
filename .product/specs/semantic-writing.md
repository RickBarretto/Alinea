---
type: feature
slug: semantic-writing
status: draft
version: 1.0
phase: 1
---

# Semantic Writing

## User story

As a author unfamiliar with Markdown, I want to write and structure an article through ordinary editing interactions, so that I can focus on meaning while retaining portable Markdown.

## Acceptance criteria

- [ ] The author can type and edit Unicode prose, including accented Portuguese, and create headings, lists, quotations, emphasis and links without needing to remember Markdown syntax.
- [ ] Typed Markdown shortcuts produce the corresponding readable structure, and the author can reveal or hide syntax without losing valid Markdown in the source.
- [ ] Selecting text exposes contextual formatting actions; keyboard navigation and common formatting shortcuts remain usable without a permanent ribbon.
- [ ] The writing surface presents structure rather than page boundaries, margins or final publisher typography.
- [ ] The author can use an optional outline, focus mode, light or dark theme and adjustable editor typography without changing exported document formatting.
- [ ] Changes are autosaved locally, and the author can tell when work has been saved.

## Constraints

This is a native desktop experience for Windows, macOS and Linux, not a page-layout editor. Keep editor typography independent of template-controlled output. The canonical interoperable Markdown subset follows feasibility work.

## Dependencies

- [Portable Projects](portable-projects.md)
