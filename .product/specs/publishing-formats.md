---
type: feature
slug: publishing-formats
status: draft
version: 1.0
phase: 4
---

# Publishing formats

## User story

As an author whose journal or institution requests particular submission files, I want to see and export the formats supported by my selected profile so that I can prepare the required delivery package.

## Acceptance criteria

- [ ] When a profile supports DOCX, I can export a document that preserves the profile’s supported manuscript structure, citations, and captions. The app identifies requirements the DOCX backend cannot meet.
- [ ] I can export a portable project archive containing readable manuscript sources, referenced bibliography and assets, and the information needed to identify the pinned template and renderer.
- [ ] The archive can be unpacked to a different directory and opened with relative paths resolving. I can see whether it includes optional review material before exporting.
- [ ] A venue profile identifies any required official Word or LaTeX template, source delivery files, and associated backend. Where supported, I can export the required source files.
- [ ] Export reports identify accessibility checks and limitations for the selected format or backend. A successful build leaves unverified venue requirements visible.

## Constraints

The canonical project remains human-readable Markdown. Alternative formats are available according to profile and backend capabilities. Exports preserve asset and font licensing constraints.

## Dependencies

- [PDF export](pdf-export.md)
- [Portable projects](portable-projects.md)
- [International templates](international-templates.md)
- [Submission validation](submission-validation.md)
