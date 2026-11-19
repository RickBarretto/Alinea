---
type: feature
slug: submission-validation
status: draft
version: 1.0
phase: 2
---

# Submission validation

## User story

As an author preparing a manuscript for submission, I want to see which requirements of the selected template my draft misses so that I can resolve them before exporting.

## Acceptance criteria

- [ ] The review and export workflows show template findings with an error, warning, or informational severity and identify the affected source location or metadata field when available.
- [ ] A template can flag missing required metadata, abstract, keywords, or institutional information, and can reject unsupported document structures.
- [ ] A template can flag an abstract above its word limit and a PDF above its page limit. The page-limit result identifies when it is based on an older render.
- [ ] Anonymous review checks flag metadata that violates the selected submission variant’s rules.
- [ ] If an image meets the conditions for a quality check, the finding identifies the image and the configurable threshold it falls below.
- [ ] I can opt into an unresolved-comment warning before submission.

## Constraints

Compliance diagnostics are distinguishable from writing suggestions and run offline. Caption and broken-reference checks come from phase 1 baseline diagnostics. Compliance claims require evidence covering the applicable requirements.

## Dependencies

- [Baseline diagnostics](baseline-diagnostics.md)
- [Document metrics](document-metrics.md)
- [Template metadata](template-metadata.md)
- [Local review](local-review.md)
