---
type: feature
slug: local-review
status: draft
version: 1.1
phase: 2
---

# Local review

## User story

As an academic author receiving feedback from an advisor or co-author, I want to see comments and compare local revisions alongside my manuscript so that I can work through feedback without adding review material to my submission.

## Acceptance criteria

- [ ] I can inspect, add, edit, and remove plain inline `<!-- … -->` comments in manuscript context. Comments have no reply thread, author, timestamp, or persistent resolved state.
- [ ] I can navigate between manuscript comments and identify their nearby text context without inventing persistent range or thread metadata.
- [ ] Private writing notes can be saved and reopened alongside the project.
- [ ] External edits preserve ordinary inline comment text as part of the manuscript. The UI does not assume a durable selected-text anchor beyond the comment’s location.
- [ ] I can record a local revision snapshot and compare the text of two saved revisions.
- [ ] If suggestion mode is offered, I can inspect each proposed change and accept or reject it individually.

## Constraints

Review works offline. Author comments are plain inline Markdown HTML comments, not sidecar threads; nested comment syntax and reply metadata are not supported. The publishing pipeline must omit those comments from output. Private notes and revision snapshots remain separate features. Alínea’s writing suggestions are generated at runtime, can be switched off by rule, and must never be serialized into the manuscript.

The November 19, 2026 user clarification replaces the earlier threaded-comment and sidecar-comment proposal. The spec remains draft; the HTML concept demonstrates presentation rather than a working native editing or export pipeline.

## Dependencies

- [Portable projects](portable-projects.md)
- [Semantic writing](semantic-writing.md)
