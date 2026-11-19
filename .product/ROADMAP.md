# Product Roadmap

These phases follow [issue #25](https://github.com/RickBarretto/ideas/issues/25); they are dependency order, not calendar commitments. All linked stories are drafts. See [PRODUCT.md](../PRODUCT.md) for durable scope and the [story index](SPECS.md) for the full backlog.

## Now — Phase 0: Feasibility

- [ ] Prove an offline Markdown-to-PDF pipeline through representative ABNT and SBC articles: [rendering feasibility](specs/rendering-feasibility.md).
- [ ] Evaluate editing and accessibility on Windows, macOS, and Linux: [native editor feasibility](specs/native-editor-feasibility.md).

**Gate:** compare candidates and document limitations before choosing the renderer, Markdown dialect, or UI framework.

## Next — Phase 1: Minimum Viable Editor

- [ ] Create, save, recover, and externally edit [portable projects](specs/portable-projects.md).
- [ ] Write through [semantic editing](specs/semantic-writing.md), schema-driven [metadata](specs/template-metadata.md), [citations](specs/local-citations.md), and automatic [cross-references](specs/cross-references.md).
- [ ] Insert [figures and tables](specs/figures-and-tables.md), [equations and diagrams](specs/math-and-diagrams.md).
- [ ] Select [ABNT/SBC templates](specs/template-selection.md), [build PDFs](specs/pdf-export.md), and inspect [document metrics](specs/document-metrics.md).
- [ ] Provide [baseline validation and switchable writing warnings](specs/baseline-diagnostics.md).

**Gate:** an author unfamiliar with Markdown can write and export a complete article offline without manual formatting or LaTeX. Initial template types distinguish ABNT article, assignment/report, thesis/dissertation, and SBC paper. The first inspectable slice proves the two article formats.

The source's usability criteria include caption/reference validation and individually switchable basic quality rules. Keep that baseline here; broader analysis and compliance tooling follow in phase 2. Initial institutional rules and version pinning must work before public package management.

## Later — Phase 2: Academic Assistance

- [ ] [Local comments and revisions](specs/local-review.md).
- [ ] [Portuguese and English writing assistance](specs/writing-assistance.md) and advanced statistics.
- [ ] [Additional bibliography formats and lookups](specs/reference-imports.md).
- [ ] [Extended submission validation](specs/submission-validation.md).

## Later — Phase 3: Template Ecosystem

- [ ] [Template packages](specs/template-packages.md), public interfaces, institutional variants, installation, and explicit updates.
- [ ] [International templates](specs/international-templates.md) with evidence for compatibility claims.
- [ ] Investigate [constrained executable extensions](specs/executable-extensions.md).

## Later — Phase 4: Advanced Workflows

- [ ] [Portable review bundles and optional Git workflows](specs/portable-review.md).
- [ ] [Additional publishing formats](specs/publishing-formats.md), including optional DOCX and venue-specific sources.
- [ ] [Long and multi-file manuscripts](specs/long-manuscripts.md).
- [ ] [Optional external-tool and AI workflows](specs/external-tools-and-ai.md).

Accessible PDF support is assessed with the backend initially; broader output accessibility validation follows in publishing work. Safe external-file editing remains an initial requirement independent of optional AI integrations.
