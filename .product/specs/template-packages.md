---
type: feature
slug: template-packages
status: draft
version: 1.0
phase: 3
---

# Template packages

## User story

As a researcher adopting a venue or university template, I want to install a versioned package and pin it to my project so that I can reproduce a submission after templates change.

## Acceptance criteria

- [ ] A public specification describes the manifest, capabilities, metadata schema, validation rules, renderer compatibility, and required resources. The interface version and package release version are independently identifiable.
- [ ] A package can declare required sections and metadata, citations and bibliography, typography and layout, figure and table presentation, numbering, and submission limits.
- [ ] I can install a local package and see its version and compatibility in the installed-template list. An invalid or unsupported package produces an actionable diagnostic.
- [ ] Where a repository or registry is supported, I can check for an update, compare versions, and choose whether to install it.
- [ ] A project pinned to an older compatible version continues to build with that version after an update. I can uninstall versions unused by my projects.
- [ ] I can select a distinct institution-specific variant with declared overrides.

## Constraints

Prefer declarative packages and standard schemas. Separate package-defined behavior from executable extensions. Font and rendering dependency distribution requires evaluation.

## Dependencies

- [Template selection](template-selection.md)
- [Template metadata](template-metadata.md)
- [PDF export](pdf-export.md)
