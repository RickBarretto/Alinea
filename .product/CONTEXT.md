# Architecture Context

## Current State

The repository contains documentation and tool configuration, with no application implementation. Rust and Bun are configured through [mise.toml](../mise.toml). Bun does not imply a web UI. Feature specs start as `draft`; none represents shipped or tested behavior.

## Confirmed Constraints

- Native Rust desktop targeting Windows, macOS, and Linux; avoid a browser-based application shell.
- Offline writing, review, rendering, and PDF export. Online metadata lookup and AI integrations remain optional.
- Ordinary Markdown with YAML frontmatter, portable bibliography and assets, relative paths, human-readable sidecars, and no database required to access the manuscript.
- Autosave and recovery must account for external edits without silently losing work.
- Templates own metadata, numbering, citation formatting, layout, and submission rules.
- Repeatable export requires pinned template and renderer versions plus local assets and licensed fonts.
- Exact page counts come from the renderer; compilation alone does not establish standards compliance.
- Keep dependencies lean, following [AGENTS.md](../AGENTS.md).

## Investigation Candidates

The source proposes Slint or Iced for native UI evaluation, Quarto/Pandoc for document processing, Typst as a preferred backend to investigate, CSL for references, Mermaid for diagrams, and MathJax-compatible editor math previews. These are candidates, not selected dependencies. Alternative adapters, including LaTeX when necessary, remain possible.

The conceptual pipeline is manuscript and metadata → document model → validation/reference/asset processing → template adapter → publishing engine → PDF and diagnostics. APIs, the canonical Markdown dialect, sidecar directory name, and file schemas remain undecided.

## Decision Gates

1. Demonstrate representative ABNT and SBC articles with citations, figures, tables, equations, Mermaid, and actual page counts.
2. Evaluate editing ergonomics, Unicode, keyboard behavior, and accessibility across all three OSes before selecting a native UI framework.
3. Record the dialect, renderer, version policy, and compatibility limits based on that evidence.

Other open decisions are listed in [PRODUCT.md](../PRODUCT.md#open-decisions). No final framework or renderer decision is recorded. `.product/decisions/` is available for later evidence-backed decisions.

## Source and Authority

[Issue #25](https://github.com/RickBarretto/ideas/issues/25) supplies product intent. [PRODUCT.md](../PRODUCT.md) records it and the user's OS clarification. [DESIGN.md](../DESIGN.md) supplies interface guidance; its generic mobile examples are not platform commitments. Read each spec's status before implementation.
