---
$id: https://github.com/RickBarretto/Alinea/blob/main/PRODUCT.md
$type: Product
$context: https://schema.org.ai
productmd: 1
register: product
---

# Alínea

A local-first academic writing application that separates manuscript content from submission formatting.

## Register

product

## Users

Students, researchers, and professors preparing articles, assignments, reports, theses, and dissertations. The initial audience works with Brazilian ABNT and SBC requirements; international venues follow later.

Authors should be able to write without learning Markdown syntax, YAML, LaTeX, or a typesetting language. Authors already using text editors, Git, bibliography tools, or external AI assistants must retain those workflows.

## Problem

Academic authors spend time maintaining page layout, citations, captions, numbering, and institutional formatting instead of developing their research. Familiar editors mix these responsibilities with writing; technical publishing tools can require learning a toolchain before producing a submission.

## Product Purpose

Let an author write a structured manuscript and produce a template-formatted academic PDF using ordinary local files. Versioned templates own formatting; the author owns content and submission decisions.

Initial success means an author unfamiliar with Markdown can write and export an academic article offline, using schema-driven metadata, local citations, captions, automatic cross-references, accurate rendered page counts, and individually switchable basic writing warnings. The project remains independently editable without an account or proprietary service.

Representative ABNT and SBC output must pass baseline template regression checks and be compared with applicable requirements. Successful PDF generation alone does not establish standards compliance.

## Platform

Native desktop targeting **Windows, macOS, and Linux** for the initial release, as confirmed by the user. Rust is the application direction; the native UI framework remains undecided. The intended architecture avoids a browser-based application shell.

## Positioning

Alínea combines approachable semantic editing with a reproducible academic publishing pipeline. Manuscripts remain Markdown with YAML frontmatter, references remain portable bibliography files, and formatting comes from the selected template rather than manual document styling.

## Operating Context

- **Write:** compose, navigate structure, insert academic content, and edit metadata without managing page layout.
- **Review:** inspect comments, writing suggestions, unresolved references, and template diagnostics in the manuscript context.
- **Export:** inspect the template, build status, actual page count, validation results, and generated PDF on demand.

Projects are ordinary directories with manuscripts, bibliography files, relative asset paths, and plain inline Markdown HTML comments and portable sidecars for preferences. Writing, review, rendering, and export work offline with locally available tools and template assets. Optional online lookups show retrieved metadata for confirmation.

## Capabilities and Constraints

- Semantic editing preserves valid Markdown through ordinary editing actions, configurable shortcuts, contextual controls, syntax reveal, focus mode, and an optional outline. Editor typography is independent of export typography.
- Template schemas generate metadata forms. Manual YAML edits remain synchronized; changing templates preserves compatible data and reports fields needing attention.
- The document model supports citations, cross-references, figures, tables, equations, diagrams, footnotes, appendices, and multilingual abstracts. Prefer interoperable Pandoc/Quarto-compatible syntax; the canonical dialect remains open.
- Every figure and table needs a caption. Missing bibliography entries, broken cross-references, and missing captions produce actionable diagnostics. Bibliographic information is never silently invented.
- Initial templates distinguish ABNT scientific articles, ABNT assignments/reports, ABNT theses/dissertations, and SBC conference papers. Institutional requirements must be representable. First prove an ABNT article and an SBC article before selecting the renderer.
- Pin template and renderer versions for repeatable builds. Template updates must not silently alter an existing submission.
- Exact page counts come from the PDF layout engine. Older counts and estimates must be labeled. PDF preview is available on demand.
- Writing rules are individually configurable suggestions. The 25-word sentence threshold is a configurable heuristic. No heuristic automatically rewrites prose. Initial analysis languages are Brazilian Portuguese and English with regional variants.
- Autosave, recovery, external-edit detection, and safe conflict handling protect local work. Author comments use plain `<!-- … -->` text in the manuscript, without reply threads or author/timestamp metadata. Writing suggestions are computed at runtime and are never written into Markdown.
- Prefer declarative template packages. Executable extensions need explicit capabilities and constrained access; sandbox technology is undecided.

## Brand Commitments

The product name is **Alínea**. Its guiding statement is “Write your research, not your formatting.” Product language should clarify actions and diagnostics without presenting stylistic suggestions as judgments about research quality.

[DESIGN.md](DESIGN.md) records the existing content-first interface direction. Its reusable device examples do not expand the confirmed desktop scope.

## Product Principles

1. **Content before formatting.** Templates own submission mechanics.
2. **Local ownership.** Plain text, portable assets, and offline workflows remain usable independently of Alínea.
3. **Approachable structure.** Ordinary editing actions create semantic content without requiring syntax expertise.
4. **Visible evidence.** Report stale builds, uncertain anchors, validation failures, and compatibility limits honestly.
5. **Optional assistance.** Authors control analysis, external tools, and AI use; no provider, account, or manuscript transmission is mandatory.

## Accessibility & Inclusion

Preserve Unicode, including accented Portuguese text, and keyboard access throughout writing, review, and export. Evaluate native text editing and assistive-technology support before choosing the UI framework. Apply the accessibility guidance in [DESIGN.md](DESIGN.md) to native desktop. Accessible PDF support depends on the backend and must be verified before being promised.

## Offer

Pricing, distribution channels, and the commercial model are undecided. No price or paid-service dependency is asserted.

## Boundaries

The initial product excludes unrestricted page-layout editing, a full Word replacement, a LaTeX IDE, spreadsheets, presentations, real-time collaboration, a social network, and cloud synchronization. AI-generated research, fabricated references, and proprietary manuscript storage are outside its purpose.

International templates, executable extensions, portable review bundles, optional Git integrations, DOCX, multi-file manuscripts, and optional AI integrations are later work. See the [roadmap](.product/ROADMAP.md) and [user stories](.product/SPECS.md).

## Open Decisions

Native UI framework; canonical Markdown dialect; publishing backend and fallback adapters; mapping inline comments to nearby manuscript context; AST transformation boundaries; evidence for venue compatibility; background compilation policy; distribution of fonts and offline dependencies; language-engine interfaces; and extension sandboxing.

Slint, Iced, Quarto, Pandoc, Typst, LaTeX, and WASI are investigation candidates rather than finalized choices. Numeric adoption, performance, and business targets are unset.

## Evidence on Hand

- [Issue #25](https://github.com/RickBarretto/ideas/issues/25), last updated November 16, 2026: requirements, roadmap, acceptance criteria, and open questions.
- [Issue screenshots](https://github.com/RickBarretto/ideas/issues/25#issuecomment-6905224825): linked visual references rather than evidence of implemented behavior.
- [README.md](README.md), [DESIGN.md](DESIGN.md), and [mise.toml](mise.toml): existing identity, interface guidance, and tool configuration. The repository has no application implementation or validated publishing output yet.
- [PRODUCT.md reference](https://product.md/): prose-first product record with canonical headings. This document records intended behavior, not shipped functionality.

## Stack

- [AGENTS.md](AGENTS.md): contributor workflow and dependency constraints.
- [.product/STRATEGY.md](.product/STRATEGY.md): strategic summary and success criteria.
- [.product/ROADMAP.md](.product/ROADMAP.md): delivery phases and gates.
- [.product/CONTEXT.md](.product/CONTEXT.md): technical constraints and open decisions.
- [.product/specs/](.product/SPECS.md): draft user stories and acceptance criteria.
- [DESIGN.md](DESIGN.md): existing design guidance, maintained separately.
