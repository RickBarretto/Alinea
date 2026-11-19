---
type: feature
slug: reference-imports
status: draft
version: 1.0
phase: 2
---

# Reference imports

## User story

As an author assembling a bibliography from several sources, I want to import existing reference files and look up published works so that I can cite them without re-entering their details.

## Acceptance criteria

- [ ] I can import entries from BibLaTeX, CSL JSON, RIS, and supported Zotero export files into my project bibliography.
- [ ] I can enter a DOI, ISBN, or URL and review the retrieved metadata before adding the entry.
- [ ] The confirmation view shows the extracted fields and lets me correct them or cancel the import. Missing fields stay visibly missing until supplied.
- [ ] When an import matches an existing work, I see the possible duplicate before a second entry is added.
- [ ] I can identify possible duplicates, entries with missing fields, and bibliography entries that the manuscript never cites.
- [ ] Renaming a citation key updates the bibliography and all references to that key in the project. A key already in use or an interrupted rename leaves the original citations and bibliography intact.
- [ ] Imported entries appear in the local citation picker and resolve in a later PDF build with the network unavailable.
- [ ] When an online lookup fails or internet access is unavailable, I can continue by importing a local file or entering the reference manually.

## Constraints

Online lookup is optional and uses the identifier or URL the author supplies. Live Zotero integration is an optional phase 4 workflow. Bibliography formatting follows the selected template.

## Dependencies

- [Local citations](local-citations.md)
- [Portable projects](portable-projects.md)
