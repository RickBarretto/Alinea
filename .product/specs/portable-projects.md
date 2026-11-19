---
type: feature
slug: portable-projects
status: draft
version: 1.0
phase: 1
---

# Portable Projects

## User story

As an academic author, I want to create, open and save a local project made of ordinary files, so that I can retain control of my manuscript and move it between computers and editors.

## Acceptance criteria

- [ ] An author can create a project, open an existing Markdown project and save changes locally without an account or network connection.
- [ ] The manuscript remains human-readable Markdown with YAML frontmatter and can be edited in another text editor.
- [ ] Bibliography and assets remain in the project directory and are addressed through relative paths so a moved project can be reopened.
- [ ] The application detects external file changes and offers a safe way to reconcile them without silently overwriting either version.
- [ ] After an interruption, the author can recover locally saved or autosaved work, and can distinguish recovered content from the last saved version.
- [ ] Project metadata can be migrated from an older supported version without losing the manuscript; transient caches do not need to be committed.

## Constraints

No database, cloud workspace or proprietary format is required to open the manuscript. Keep preferences separate from manuscript content and use a Git-friendly directory. The final project metadata directory name remains open.

## Dependencies

- [Native Editor Feasibility](native-editor-feasibility.md)
