---
type: feature
slug: document-metrics
status: draft
version: 1.0
phase: 1
---

# Document Metrics

## User story

As an academic author, I want to see my word count and actual rendered page count, so that I can judge article length against the selected template.

## Acceptance criteria

- [ ] The writing view displays a word count derived from manuscript prose and offers per-section counts.
- [ ] The displayed exact page count comes from a successful PDF render and identifies the template page limit when one applies.
- [ ] After manuscript or template changes, the previous count is marked stale until a new successful render; an estimate is clearly labeled as such.
- [ ] The author is warned when approaching or exceeding an applicable page limit, according to the template rules.
- [ ] The author can request a PDF preview when the count needs inspection without keeping it permanently beside the editor.
- [ ] Frontmatter, bibliography data and code blocks are excluded from the default prose count, and the counting scope is understandable to the author.

## Constraints

Do not present an approximation as an exact count. The renderer is the authority for page layout; counts may differ across templates or renderer versions.

## Dependencies

- [Pdf Export](pdf-export.md)
