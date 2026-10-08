# Comic web reader — Chiếc hộp của ngày mai

This directory contains the local, buildless comic reader from [comic-run-plan.md](../comic-run-plan.md). All audience-facing text is Vietnamese. The web app currently uses CSS placeholders; **no images were generated or downloaded**.

## Open it

Open dist/index.html in a current browser. The site has no package installation or build step. To save the print version, use the browser's **Print → Save as PDF**; the print stylesheet includes all nine pages, including pages hidden by on-screen navigation.

Files:

- dist/index.html: reader shell and the two dialogs.
- dist/story-data.js: nine pages, 20 panel records, three fact cards and source URLs.
- dist/app.js: page navigation, history hotspots, dialogs, source links, audio and print content.
- dist/styles.css: responsive layout, CSS art placeholders and A4 print layout.
- dist/assets/images/: add your panel illustrations here.
- dist/assets/audio/: add your own or rights-cleared narration here.

## Add panel images later

For each panel, change its image value from null in dist/story-data.js to a relative URL. For example:

~~~js
{ id: "P03B", image: "./assets/images/P03B.webp", ... }
~~~

Keep the panel ID and visual text. The visual text becomes the image's alternative text. Images fill their frames with object-fit: cover, so keep important characters and objects away from crop edges. The artHint is shown only while the image is missing or fails to load.

The three historical panels are P03B (Dong Ho), P05B (Ba Đình) and P07B (Văn Miếu). Each has a hotspot rectangle with x, y, w, h as percentages of its panel. After adding art, adjust those four numbers to align the interactive area with the object in the image. Hover or keyboard focus shows a short sourced preview; click or tap opens the full fact card. On touch devices, tapping the marked object opens the card directly.

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

This reader is a local implementation with image placeholders. It has not been published. Hosting, the contest's PDF specification and final asset permissions remain to be confirmed before submission.
