---
type: feature
slug: international-templates
status: draft
version: 1.0
phase: 3
---

# International templates

## User story

As a researcher submitting to an international venue, I want to choose a template for the specific publisher, institution, or submission variant so that the exported manuscript follows the requirements that apply to my submission.

## Acceptance criteria

- [ ] The template catalog identifies each profile’s intended use, version, and supported submission variants. Citation conventions are distinguishable from publisher layouts and institutional submission requirements.
- [ ] A profile can express the applicable metadata, structure, citation style, layout, and limits. Where provided, anonymous and camera-ready variants apply their own requirements.
- [ ] Representative manuscripts can be built using a pinned profile and renderer. Validation tooling records which requirements were checked and which remain unverified.
- [ ] Template documentation identifies the requirements and editions used for validation. Claims of official publisher compatibility appear only when relevant evidence supports them.
- [ ] A profile that requires a different backend or venue-specific source output identifies that requirement before export.

## Constraints

Candidate profiles include APA 7, IEEE, ACM, MLA, Chicago, Springer Nature LNCS and journal formats, Harvard, MHRA, OSCOLA, ISO 690, Vancouver, Elsevier, arXiv, and university-specific thesis and dissertation formats. The launch catalog, release order, and evidence required for specific compatibility claims remain open.

## Dependencies

- [Template packages](template-packages.md)
- [Submission validation](submission-validation.md)
- [Rendering feasibility](rendering-feasibility.md)
