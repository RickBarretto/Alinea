---
type: feature
slug: portable-review
status: draft
version: 1.0
phase: 4
---

# Portable review

## User story

As an academic author working with an advisor or co-author, I want to exchange review material as files so that we can give and receive feedback asynchronously while keeping the project local.

## Acceptance criteria

- [ ] I can select review material for a portable bundle and see what the bundle contains before sharing it, including whether any manuscript text is included.
- [ ] A reviewer can open the bundle offline, identify the revision under review, and read the included comments alongside the passages they address.
- [ ] When I bring feedback back into a project, unambiguous anchors resolve to the intended passages. If the document has changed and a passage cannot be identified reliably, I can find the comment and inspect its unresolved anchor.
- [ ] I can inspect incoming review material before adding it to my project. Existing manuscript content and feedback are preserved during import.
- [ ] If Git or GitHub pull request integration is offered, I can keep using local review and portable bundles without an account or connection.

## Constraints

Review exchange is asynchronous and file-based. Private notes are excluded from review bundles by default. Remote integrations are optional.

## Dependencies

- [Local review](local-review.md)
- [Portable projects](portable-projects.md)
