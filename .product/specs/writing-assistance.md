---
type: feature
slug: writing-assistance
status: draft
version: 1.0
phase: 2
---

# Writing assistance

## User story

As an author writing in Brazilian Portuguese or English, I want optional feedback on clarity and terminology so that I can revise my academic prose while retaining control over the text.

## Acceptance criteria

- [ ] I can toggle each writing rule independently without leaving the editor, including sentence length, nearby repetition, and undefined or inconsistent acronyms.
- [ ] Available rules also cover connectors, passive voice, paragraph length, subordinate clauses, vague or filler wording, repeated openings, nominalizations, attributed claims missing citations, and inconsistent terminology.
- [ ] I can change the default 25-word sentence threshold. Crossing it produces a readability warning and leaves the prose untouched.
- [ ] I can analyze Brazilian Portuguese and select a regional variant for English. The diagnostics reflect the selected language.
- [ ] Foreign-term suggestions account for citations, proper names, established loanwords, template conventions, and configurable exceptions.
- [ ] Ambiguous terms remain suggestions. Accepted semantic or export-time italics respect author overrides.
- [ ] I can see character, paragraph, and sentence counts, average and median sentence lengths, average paragraph length, and estimated reading time. By default, prose statistics exclude frontmatter, bibliography data, and code blocks. I can change those counting rules.
- [ ] The document overview also counts citations, unique cited works, figures, tables, footnotes, and unresolved comments from local review.

## Constraints

Analysis runs locally. Writing feedback is advisory, and rules leave prose changes to the author. Language analyzers can support more languages over time.

## Dependencies

- [Semantic writing](semantic-writing.md)
- [Document metrics](document-metrics.md)
- [Local review](local-review.md)
- [Template selection](template-selection.md)

