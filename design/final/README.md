# Final concept · Clareira / Vigília

Open `edit.html` for light mode, `edit.html?theme=dark` for dark mode, or `edit.html?theme=dark&focus=1` with review hidden and insertion collapsed. `index.html` compares the rendered states.

This is a dependency-free HTML/CSS/JavaScript interaction study for a native desktop application. It demonstrates the proposed edit workflow, not a working document editor. Manuscript text, save status, references and counts are illustrative. Formatting and insertion commands show a prototype notice; no real document editing or compilation is implemented. The export study can save its complete sample PDF. Model/export links now lead to the matching final workspaces and preserve theme and the selected local model.

The merged direction preserves Clareira’s warm light field and Vigília’s charcoal dark palette with amber accents. Serif manuscript text stays independent of publication formatting. Rounded floating islands use a shared spacing and corner system.

- Selection: a compact icon toolbar sits above the highlighted passage. Icons have accessible names, keyboard focus, and pointer/focus tooltips. Selecting another manuscript passage repositions the same toolbar without shifting the text.
- Review: a hideable right-hand island links the comment to its passage with a subtle connector. The top Review control restores it. Document comments are plain inline `<!-- … -->` text without author, timestamp, reply thread or persistent resolution metadata. Alínea separately computes long-sentence suggestions at runtime; toggling that rule changes only session UI and never writes a Markdown comment. Escape closes the review first. Review starts near the top and is height-bounded above the bottom status zone.
- Structure: dashes represent each section. Section names have no automatic numbering. The current name replaces its dash; hover or keyboard focus reveals the whole outline. Links scroll to the corresponding heading; scrolling updates the active section.
- Figures: actual image content has left and right resize borders. Drag either grip, or focus it and use Left/Right arrows (Shift for a larger step), Home or End. Width is bounded by the manuscript measure and never changes the text width.
- Insertion: a bottom icon dock can be hidden and restored from its Insert launcher. It expands on pointer hover or keyboard focus and collapses when the pointer/focus leaves; there is no close button. It stays separate from the manuscript status.
- Status: language, word count and local state occupy the bottom-right corner in both themes.

The prototype keeps the writing column fixed when review is hidden. It supports desktop widths of 1280 and 1440 in this iteration; this is not a mobile design. Reduced-motion preferences disable smooth CSS scrolling. A native implementation still needs platform editing, accessibility, persistence and rendering feasibility work.

Existing PRODUCT.md, DESIGN.md, feature specs and earlier concepts are preserved. No packages were installed. Icons and figure geometry are authored inline; there are no SVG files or external asset requests.


## Templates and merged export/preview

- `templates.html` is a separate gallery with categories, text search, a local-only filter, selectable previews and a right-hand requirements inspector. The ten examples cover six article candidates, two institutional types, and thesis/dissertation types. Only the two local article samples can be applied in the concept. Online downloads show a clearly marked simulation without network requests or package installation; downloaded candidates still require compatibility evaluation. Planned institutional types cannot be applied.
- `export.html` combines continuous PDF viewing and export settings in both themes. Every page of the selected six-page example is present in a scrollable region, including the references page. Previous/Next, a thumbnail index, direct page input and three zoom settings operate on that region; manual scrolling updates the page indicator.
- The preview uses rasterizations of the actual included PDF, not an abbreviated document mockup. The original sample PDF can be opened for selectable text and native PDF viewing. The custom raster preview is an interaction study, not a replacement for an accessible PDF viewer.
- Saving the complete PDF works offline when the HTML is opened from disk, using the exact original PDF bytes through a Blob URL. File naming is editable. Full-document saving was verified by comparing the downloaded bytes with the source PDF. Other format options are visibly planned; page-range controls validate the proposed range but partial saving remains explicitly unavailable in this prototype. The preview always retains the entire PDF.
- `publishing.css` and `workspace.js` reuse the editor’s palette and control language. `templates.js` handles the illustrative catalog; `export.js` handles PDF navigation and the local sample download. No packages were installed.

Both publication workspaces were exercised at 1440 × 960 and inspected at 1280 × 960. The sample PDFs were authored for this prototype; their names and layouts do not establish ABNT, SBC, publisher or institutional compliance. The product’s native framework and publishing backend remain undecided.
