---
type: feature
slug: executable-extensions
status: draft
version: 1.0
phase: 3
---

# Executable extensions

## User story

As a template maintainer with a requirement beyond declarative configuration, I want a constrained extension mechanism so that a specialized transformation can run without granting broad access to the author’s computer or manuscript.

## Acceptance criteria

- [ ] An extension proposal identifies the publishing requirement that declarative packages and standard transformations cannot express.
- [ ] An extension that runs declares the capabilities it needs. Attempts to use undeclared capabilities, read or write beyond authorized paths, access unrestricted networks, or launch arbitrary processes are blocked.
- [ ] The author can inspect requested capabilities before enabling an extension. A denied capability or extension failure produces an actionable result and leaves the project source intact.
- [ ] Compatibility and the extension version used for a build are identifiable alongside the template and renderer versions.
- [ ] The feasibility evaluation compares WebAssembly/WASI with other viable options against isolation, offline use, and supported desktop platforms. It records gaps and leaves adoption open until the required constraints are demonstrated.

## Constraints

Possible extension points include document transformations, citation rendering, validation, asset conversion, language rules, and export adapters. Evaluate each extension point against its need and available permissions.

## Dependencies

- [Template packages](template-packages.md)
- [Rendering feasibility](rendering-feasibility.md)
