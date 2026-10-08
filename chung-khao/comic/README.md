# Comic web reader — Chiếc hộp của ngày mai

This directory contains the local, buildless comic reader from [comic-run-plan.md](../comic-run-plan.md). All 20 story panels now have local illustrations, and Vietnamese dialogue is layered as editable text for screen readers and print.

## Open it

Open dist/index.html in a current browser. The site has no package installation or build step. To save the print version, use the browser's **Print → Save as PDF**; the print stylesheet includes all nine pages, including pages hidden by on-screen navigation.

Files:

- dist/index.html: reader shell and the two dialogs.
- dist/story-data.js: nine pages, 20 illustrated panel records, three fact cards and source URLs.
- dist/app.js: page navigation, history hotspots, dialogs, source links, audio and print content.
- dist/styles.css: responsive layout, CSS art placeholders and A4 print layout.
- dist/assets/images/: panel illustrations in WebP, plus the original vector illustration for P07B.
- dist/assets/audio/: add your own or rights-cleared narration here.

## Panel art and dialogue

The P01A–P09C image values point to local files under dist/assets/images/. Dialogue remains in dist/story-data.js and is positioned over each image with captionBox percentages measured from the top-left of the 16:9 artwork. This keeps Vietnamese text crisp and selectable. The P02A and P06B overlays replace stray English lettering with Vietnamese. The P07B vector artwork is an original, text-free diagram linking the three clue objects.

Keep panel IDs and the visual description when replacing an illustration. The visual description becomes its alternative text. Images fill their frames with object-fit: cover, so keep important characters and objects away from crop edges. The artHint appears only while an image is missing or fails to load.

History cards open from both the setting panels and the object panels: P03A/P03B (Đông Hồ), P05A/P05B (Ba Đình) and P07A/P07B (Văn Miếu). The setting panels have a full-image hotspot with a visible **Xem tư liệu** badge. The object panels have hotspot rectangles with x, y, w, h as percentages of the panel. After adding art, adjust the object hotspot coordinates to align with the print, timeline or stele. Hover or keyboard focus shows a short sourced preview; click or tap opens the full fact card. The same card is printed only once per page in the PDF layout.

Each card separates a fictional connection to Hoa and Trung's story from historical facts and links to the official sources. The Ba Đình card keeps the 1945 Declaration at the Square separate from the Mausoleum's 1975 inauguration.

## Add audio later

Each card in dist/story-data.js has audioSrc: null. To use a recording made by the team or a file with documented reuse rights, set a relative URL such as:

~~~js
audioSrc: "./assets/audio/BD01.mp3"
~~~

If no audio file is set, **Nghe kể** uses the browser's Vietnamese speech synthesis when available. Speech starts only after a click or tap. The complete story and source text remain visible without audio. Hover does not automatically play sound because browsers commonly restrict unsolicited playback and readers need control over audio.

## Historical source and rights boundary

The facts in DH01, BD01 and VM01 follow the linked official source pages in dist/story-data.js. If you edit a historical claim, check it against its source before releasing the site. Source links establish the facts; they do **not** grant permission to copy a photograph, print or recording from those sites.

The Hồ Chí Minh photo proposed in the idea is represented by a blank photo/card placeholder. Insert a specific photograph only after its item-level reuse rights are confirmed. The story also works with an original Ba Đình information card in that position. Future scenes are labeled as fiction, and the web card distinguishes them from historical facts.

## Local state

This reader is a local implementation with its illustrations and dialogue in place. It has not been published. Hosting, the contest's PDF specification and final asset permissions remain to be confirmed before submission.
