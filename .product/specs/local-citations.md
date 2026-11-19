---
type: feature
slug: local-citations
status: draft
version: 1.0
phase: 1
---

# Local Citations

## User story

As an academic author, I want to find and cite entries from a local bibliography, so that I can produce references without manually formatting or inventing them.

## Acceptance criteria

- [ ] The author can attach or import a local BibTeX bibliography and search entries by useful details such as author, title and year while offline.
- [ ] Typing a citation trigger or using an editing action lets the author select an entry and insert a portable citation into the manuscript.
- [ ] The author can cite multiple works together and add a locator such as a page when needed.
- [ ] Export resolves cited keys against the local bibliography and generates citations and a bibliography according to the selected template.
- [ ] A citation whose key cannot be resolved is identified before export with a location the author can find and correct.
- [ ] Missing bibliographic information is not silently invented, and changes to source files remain readable outside the application.

## Constraints

No account, network lookup or provider is required for existing references. Online metadata lookup and broader import formats are later work. Citation formatting belongs to the selected template.

## Dependencies

- [Semantic Writing](semantic-writing.md)
- [Template Selection](template-selection.md)
