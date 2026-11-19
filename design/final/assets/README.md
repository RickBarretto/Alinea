# PDF sample provenance

`pdf-source.html` is the authored source for two six-page demonstration documents. Chromium’s existing print-to-PDF facility produced `abnt-example.pdf` and `sbc-example.pdf`; the installed Ghostscript rasterized every page at 120 dpi into the corresponding `*-page-N.png` files. The source uses fictional manuscript content, not a published article. Both profiles are visual examples rather than validated ABNT/SBC templates.

The PNGs in the scrollable viewer are complete renderings of these actual PDF pages. They are not screenshots of a truncated HTML approximation. Their small versions are also used as illustrative gallery thumbnails, including for the unvalidated online candidates; they are not official publisher previews.

`pdf-samples.js` contains the exact PDF bytes encoded for offline Blob downloads from file URLs. It avoids requiring a web server, local fetch permissions, external PDF libraries or an application backend. The standalone PDFs are retained so the artifacts can also be opened independently. Both representations were byte-checked during browser verification.

The example PDF documents were deliberately paginated to six pages, and every page was rendered and checked for content/footer clearance. No production renderer or standards compliance is implied by these samples.
