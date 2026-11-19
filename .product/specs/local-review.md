---
type: feature
slug: local-review
status: draft
version: 1.0
phase: 2
---

# Local review

## User story

As an academic author receiving feedback from an advisor or co-author, I want to see comments and compare local revisions alongside my manuscript so that I can work through feedback without adding review material to my submission.

## Acceptance criteria

- [ ] I can select a passage, leave a comment, reply in its thread, and mark the thread resolved.
- [ ] I can filter for unresolved threads, navigate between them, and see their passages highlighted.
- [ ] Private writing notes can be saved and reopened alongside the project.
- [ ] After an ordinary edit, feedback stays with the intended passage when the anchor is clear. When the passage is missing or ambiguous, the comment remains accessible and its anchor is flagged.
- [ ] I can record a local revision snapshot and compare the text of two saved revisions.
- [ ] If suggestion mode is offered, I can inspect each proposed change and accept or reject it individually.

## Constraints

Review works offline. Comments and notes live in portable sidecar files and stay out of manuscript exports. The anchor representation is open pending validation against ordinary editing and external changes.

## Dependencies

- [Portable projects](portable-projects.md)
- [Semantic writing](semantic-writing.md)
