---
type: feature
slug: external-tools-and-ai
status: draft
version: 1.0
phase: 4
---

# External tools and AI

## User story

As an academic author who uses other text editors or AI assistants, I want to exchange manuscript context and inspect proposed revisions so that I can work with my chosen tools while controlling what I share and accept.

## Acceptance criteria

- [ ] Phase 1 prerequisite. When a file changes in another tool, Alínea detects the change. If I also have unsaved changes, both versions remain available while I resolve the conflict.
- [ ] If context export is offered in phase 4, I can copy a selection with surrounding context or export a context bundle. I can inspect the text, structured outline, and any project-specific instructions it includes.
- [ ] If revision review is offered, I can inspect changes from an external tool and choose which to accept.
- [ ] If a configurable provider integration is offered, I can see what content will be transmitted and explicitly authorize the transfer. Manuscript work remains available offline without enabling a provider.

## Constraints

The phase 1 prerequisite belongs to portable projects. Provider integration, context exports, and revision review are optional phase 4 work. Project sources stay usable with ordinary text tools.

## Dependencies

- [Portable projects](portable-projects.md)
- [Local review](local-review.md)
