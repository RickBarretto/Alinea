# Alínea desktop concepts

Open `index.html` to compare six concepts and all 30 screenshots. Each concept folder contains five HTML screens and a matching `screenshots/` folder. Each screenshot in the gallery links to its HTML source. Shared styles live in `screens.css`. The mockups use HTML and CSS, require no dependencies or server, and contain no application behavior. SVG files have been removed.

Each concept includes writing, local review, template gallery, export preparation, and PDF preview. Screenshots are Chromium captures at 1440 × 960, at device scale 1.

| Concept | Spatial direction | Typography / light |
| --- | --- | --- |
| Margem | Corner session and mode islands; broad central text | Literary serif, warm daylight |
| Compasso | Compact vertical action island, separate from the text | Precise sans serif, cool daylight |
| Vigília | Centered upper mode island; quiet contextual trays | Serif, low glare evening palette |
| Fólio | Wide editorial measure; fine, square tool islands | Larger serif, neutral white |
| Órbita | Centered session above the work; mode island below | Sans serif, cool studio palette |
| Clareira | Quiet writing field, contextual review tray, tools on demand | Serif, warm green palette |

DESIGN.md governs the shared structure: edge-to-edge content field, tools on demand, optional floating outline, selection toolbar above the highlighted passage, and contextual review trays. Editing never places prose on a simulated printed page. Paper only appears in template samples and output preview. No application framework is selected by these HTML studies.

Content is synthetic. Authors, references, word counts, page counts, timestamps, validation results and template versions are illustrative, not evidence of working features or standards compliance. All relevant product specs remain draft. The preview depicts a formatted output rather than a validated ABNT/SBC PDF.

Product coverage: semantic-writing, local-citations, cross-references, figures-and-tables, local-review, baseline-diagnostics, template-selection, template-metadata, pdf-export and document-metrics. Review depicts local comments, an uncertain anchor and individually configurable writing rules. Templates distinguish the two article paths from planned report/thesis types. Export labels the earlier build and its page count as stale; preview depicts the updated state.

Edit the HTML screens directly; the redundant generation script has been removed. `index.html` is the comparison gallery. Existing PRODUCT.md, DESIGN.md, and product specs were preserved.

Hook triage: concept annotations were increased to 12px. File-scoped detector exceptions preserve the intentionally scaled text inside template/export miniatures, the system-oriented Arial UI specified by the desktop direction, and Margem's intentionally warm palette. No project-wide rules or files were disabled. The final detector scan reported no remaining findings after these exceptions.

## Clareira

`clareira/` adapts the four images in [the issue comment](https://github.com/RickBarretto/ideas/issues/25#issuecomment-6905224825): warm canvas, green accents, serif manuscript, floating vertical tool rail, upper app/file controls, rounded settings and review islands, framed template gallery, and PDF export beside a page preview. The selection toolbar stays above the text per the current brief. Rail labels replace ambiguous icons; template availability follows the draft roadmap. No reference images or SVGs are shipped. `clareira/concept.css` contains the concept-specific styling.

Clareira refinement: the document inspector starts collapsed; the always-visible insertion rail is replaced by a compact Insert entry; local feedback is consolidated into one contextual tray with unresolved navigation and safe anchor recovery. The template gallery separates the two available article formats from planned document types and names the extra SBC abstract requirement. Export shows source checks, destination, pinned model and stale page count before opening a distinct updated-preview state. Links connect the static boards for inspection; they do not compile a PDF or implement the application. Native window chrome is left to the host instead of simulated traffic lights.
