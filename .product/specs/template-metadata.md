---
type: feature
slug: template-metadata
status: draft
version: 1.0
phase: 1
---

# Template Metadata

## User story

As an academic author, I want to edit required document metadata in a form, so that I can prepare a submission without hand-editing YAML.

## Acceptance criteria

- [ ] The selected template determines which metadata fields are required, optional or unsupported, and presents the applicable fields in a usable form.
- [ ] The author can enter the metadata required for the supported article templates, including title, authors, affiliations, abstract and keywords where applicable.
- [ ] Saving the form produces valid YAML frontmatter in the manuscript; opening a manually edited manuscript reflects its metadata in the form.
- [ ] Missing or invalid required fields are identified with enough context for the author to correct them before export.
- [ ] When changing templates, compatible values are preserved and fields needing attention are explicitly reported rather than silently discarded.
- [ ] Unicode metadata survives saving, reopening and export.

## Constraints

The manuscript remains editable in an external text editor. Template rules determine metadata requirements; the form must not invent missing author or institutional information. Full institutional override management is later work.

## Dependencies

- [Template Selection](template-selection.md)
- [Semantic Writing](semantic-writing.md)
