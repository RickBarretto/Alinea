---
type: feature
slug: baseline-diagnostics
status: draft
version: 1.0
phase: 1
---

# Baseline Diagnostics

## User story

As an academic author, I want to see actionable document problems and control basic writing suggestions, so that I can correct submission issues without interruptions or automatic rewriting.

## Acceptance criteria

- [ ] Before export, missing figure and table captions, unresolved citations and broken cross-references are identified with locations or enough context to find them.
- [ ] Missing required template metadata is reported separately from writing-quality suggestions, with a clear severity such as error, warning or information.
- [ ] The editor offers basic writing warnings, including a configurable long-sentence heuristic and repeated nearby words, without changing the manuscript automatically.
- [ ] Each available writing-quality rule has its own control and can be disabled independently without disabling structural or template validation.
- [ ] An author can review the active diagnostics and return to the relevant text; fixed issues disappear on the next check.
- [ ] The long-sentence threshold is configurable and described as a readability suggestion rather than a grammatical rule.

## Constraints

Warnings are non-intrusive and do not judge research quality. Full language analysis, additional rules and advanced compliance checks are later work; the initial usable product still requires these basic warnings and missing-reference and caption checks.

## Dependencies

- [Local Citations](local-citations.md)
- [Cross References](cross-references.md)
- [Figures And Tables](figures-and-tables.md)
- [Template Metadata](template-metadata.md)
