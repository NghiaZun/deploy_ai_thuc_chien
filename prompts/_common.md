# Shared Production Rules | Round 1

Load this file, one theme prompt from `themes/`, and the **Final idea** response produced using `idea.md` into the planning LLM. The announced brief/rubric and live gateway permissions override this preparation. This is a production reference, not a claim about official scoring. Use `[FROM USER]` for supplied contest facts, `[FROM ATTACHED DOCS]` for the supplied idea and this catalog, `[VERIFIED via search: source, date]` for checked external facts, and `[HYPOTHESIS]` for tactics or untested behavior. Never invent a price, tool entitlement, judge preference, asset license, URL, or submission rule. Unknowns remain `UNKNOWN` until checked. [FROM USER]

## Assumptions and unresolved inputs

- [FROM USER] Production is **120 minutes**, followed by a separate **10-minute submission window**. Export, upload test, and final artifact must already be ready by minute 120; confirm the official timing on contest day.
- [FROM USER] Three teammates share two laptops: Producer A and Producer B operate them; Coordinator owns clock, source checks, budget, Vietnamese QA and go/no-go calls. Both producers must have work during every wait. All final audience-facing material is Vietnamese; playbooks, planning output and model prompts are English.
- [FROM USER] Only organizer AI via its gateway is allowed, with the organizer-provided Suno web account explicitly permitted; Suno is outside the shared **USD 50 gateway budget** per team confirmation. Google search, manual editors and local tools are allowed. No personal AI accounts. Current hosting method is `UNKNOWN`; website, game and comic require a **working deployed/hosted result** per team instruction, not just a local file. Confirm official format, site access and upload procedure before starting.
- [FROM USER] Ten theme names are inferred from last year, not guaranteed this year. Last-year rubric and examples in `idea.md` are user-reported, not current official judge feedback. [HYPOTHESIS] Favor a working first-10-second demonstration and a specific user task until the announced rubric says otherwise.

## Tool registry

All model/tool facts and indicative prices in the next tables. Prices are USD estimates; live access, rates, latency and quality are untested. `VN text` is an **operational handling rule**, not a measured capability: `review` means human-check Vietnamese output, `overlay` means generate without text and add Vietnamese later, `n/a` means the tool does not produce final copy. [FROM USER] [HYPOTHESIS]

| Tool / route | Capability, best use | Known limit / weakness; VN text |
|---|---|---|
| Codex (Responses) | Bounded repo coding; pair with enabled text model | Agent token spend is variable; `gpt-6-*` tool use belongs on Responses, not Chat Completions. Review generated UI strings. |
| DeepSeek Harness (`dsh`, Responses) | Bounded coding with gateway text models | Developer preview; interface may change. Review UI strings. |
| OpenCode (Responses or Chat Completions) | Repo coding with separate modules | Use Responses for `gpt-6-*` tool calls; Chat Completions for Gemini/DeepSeek. Review UI strings. |
| Cursor / Cline / Hermes Agent (Chat Completions) | Repo coding through compatible Gemini/DeepSeek | Avoid `gpt-6-*` agent tool calls over this protocol. Review UI strings. |
| Gemini CLI / Antigravity CLI (Gemini API) | Repo coding with Gemini models | Gemini only; Antigravity model ID may differ from gateway alias. Review UI strings. |
| GitHub Copilot / Claude Code | Possible coding agent with AI Log hooks | Hook support does **not** establish gateway/model compatibility; verify before use. Price = chosen model tokens if approved, otherwise `UNKNOWN`. |
| Control Panel (Flask proxy) | Text/image/TTS/STT/video requests, query history and spend | Selector/allowlist covers only a subset; mock mode does not prove live quality or spend. Browser must not receive gateway key. Review text / overlay media. |
| Organizer Suno web | Music/song, manually operated | Confirm login and permitted use; not Control Panel/API, cost/credits `UNKNOWN` (outside $50 per user). Review Vietnamese lyrics and pronunciation. |
| Google search; Canva/CapCut/Figma/Photoshop; local ffmpeg/Python/Node | Research, manual layout/edit/export without AI | Only non-AI features and permitted sources; cost here = $0 gateway, other fees `UNKNOWN`; human checks final Vietnamese. [FROM USER] |

| Gateway text model ID | Input / cached input / output per 1M tokens (USD) | Operational note; VN text |
|---|---:|---|
| `deepseek-flash` | 0.30 / 0.006 / 1.20 | Cheap bounded edits via compatible Chat Completions; review. |
| `deepseek-v4-pro` | 1.32 / 0.044 / 3.96 | Higher-cost DeepSeek; review. |
| `gpt-6-luna` | 0.10 / 0.01 / 0.50 | Cheap text tasks; Responses for agent tools; review. |
| `gpt-6-sol` | 2.00 / 0.20 / 10.00 | Expensive difficult tasks; Responses for agent tools; review. |
| `gpt-6.1-sol` | 2.00 / 0.10 / 10.00 | Confirm entitlement; review. |
| `gpt-5.6-luna` / `gpt-5.6-terra` / `gpt-5.6-sol` | 0.20 / 0.02 / 1.20; 2.00 / 0.20 / 12.00; 4.00 / 0.40 / 20.00 | Verify selected ID/harness; review. |
| `gpt-6-astra` | 10.00 / 1.00 / 50.00 | Very expensive; explicit Coordinator approval; review. |
| `o4-mini` / `o3` | 1.10 / 0.275 / 4.40; 2.00 / 0.50 / 8.00 | Reasoning may add unseen output tokens; review. |
| `gemini-2.5-pro` | 1.25 / 0.125 / 10.00 | Over 200K input can cost more; review. |
| `gemini-3.1-flash-lite` / `gemini-3.1-pro-preview` | 0.25 / 0.025 / 1.50; 2.00 / 0.20 / 12.00 | Pro preview may support grounding; verify access; review. |
| `gemini-3.5-flash` / `gemini-3.5-flash-lite` | 1.50 / 0.15 / 9.00; 0.30 / 0.03 / 2.50 | Confirm entitlement; review. |
| `gemini-3.6-flash` / `gemini-3.7-flash` / `gemini-3.8-flash` | Each 0.75 / 0.075 / 3.75 | Confirm harness compatibility; review. |

| Gateway media/search model or task | Listed price / unit | Limits, best use, weakness; VN text |
|---|---|---|
| `nano-banana-2-lite` / `nano-banana` / `nano-banana-2` / `nano-banana-pro` | 0.0336 / 0.039 / 0.0672 / 0.134 per default 1K output image | Text-free illustration, pick quality after tests; size/quality changes need live check; `overlay`. |
| `gpt-image-2.5-flare` / `gpt-image-2.5-sunburst` | `UNKNOWN` per image (image-token/size/quality based) | Do not schedule until price measured; `overlay`. |
| `gpt-4o-mini-tts` | ~0.015 / output audio minute | Voice sample before long script; pronunciation not guaranteed; review/listen. |
| `gemini-2.5-flash-preview-tts` / `gemini-2.5-pro-preview-tts` / `gemini-3.1-flash-tts-preview` | `UNKNOWN` here | Verify rate/voice and route; review/listen. |
| `gpt-4o-mini-transcribe` / `gpt-4o-transcribe` / `gpt-transcribe` / `whisper-1` / `gemini-3.5-transcribe-preview` | `UNKNOWN` here | Verify rate/route; transcriptions need diacritic check. |
| `veo-3.1-lite-generate-001` / `veo-3.1-fast-generate-001` / `veo-3.1-generate-001` | 0.40 / 0.80 / 3.20 per 8 s / 720p **per project brief** | Async submit/poll/download; latency and other sizes `UNKNOWN`; no crucial text in frame, overlay later. |
| `lyria-3-clip-preview` / `lyria-3-pro-preview` | ~0.04 / ~30 s clip; ~0.08 / ~3 min track | Gateway API, **not** in current Control Panel; route/access and vocal quality require dry run; review/listen. |
| Gemini 3.x Search grounding / Gemini 2.5 Search / Responses `web_search` | ~0.014 / query; ~0.035 / request; ~0.01 / call **plus tokens** | Verify grounded source; do not confuse search response with independent verification. |

Check Control Panel's actual selectors before choosing: text/chat lists `gpt-6-luna`, `deepseek-flash`, `gemini-3.1-flash-lite`, `gpt-6-sol`, `gemini-2.5-pro`, `o4-mini`, `o3`, `gemini-3.1-pro-preview`; image lists the four `nano-banana` aliases and two GPT image IDs; TTS lists `gpt-4o-mini-tts` and `gemini-2.5-flash-preview-tts`; STT route uses `gpt-4o-mini-transcribe`; video lists three Veo IDs. Prompt enhancer consumes an extra `gpt-6-luna` request. [FROM ATTACHED DOCS]

## Budget ledger and release rules

- [FROM USER] **$50 total gateway spend**, coding agent tool tokens included. Suno is permitted and reportedly outside this gateway budget; check credits separately. [HYPOTHESIS] Never plan to spend the full allocation. At minute 0, Coordinator records the **live** key balance/cap and reduces all ceilings if less than $50 remains.
- [HYPOTHESIS] Default planning envelopes: coding/text **$14**, images **$9**, TTS/STT/gateway music **$4**, video **$13** = **$40 max committed before minute 100**; **$10 (20%) contingency locked until minute 100**. A theme may reallocate envelopes on paper with Coordinator approval, but never dip into locked reserve early. Retry cost lives inside each envelope, not outside it. Unknown price or availability => $0 committed until measured/confirmed; use fallback meanwhile.
- [FROM ATTACHED DOCS] Estimate `text = (input_tokens x input_rate + cached_tokens x cached_rate + output_tokens x output_rate) / 1,000,000`; do not count cached tokens twice. `image = output_images x listed_per_image_rate` at listed defaults. `video = eight_second_720p_clips x listed_clip_rate`; `TTS = output_minutes x ~0.015` for `gpt-4o-mini-tts`; `music = listed_clip_count x listed_rate`; add grounding fees and measured overhead. Example *estimates*, not entitlements: `6 x 0.0672 = $0.4032` for default `nano-banana-2` images; `2 x 0.40 = $0.80` for two 8 s/720p Veo lite clips. Text and agent session actual token volume is `UNKNOWN` until observed. [HYPOTHESIS] Budget estimates must include one initial try plus up to **two** approved retries in an asset cap (`3 x unit estimate` at most), with the actual cap limited further by the remaining envelope.
- [HYPOTHESIS] Ledger fields: `minute | owner | tool/model | output ID | estimated tokens/units | planned ceiling | observed response cost | live gateway spend | approved next action`. After **every billable call or batch**: Producer reports asset ID/status, Coordinator logs in Control Panel and compares to the authoritative live gateway spend (`/key/info` exposes `spend` and `max_budget`; response cost header can help reconcile). Mock outputs never count as cost/quality evidence. Log queued calls as pending; do not treat timeouts as free until spend reconciles. No secrets in logs, prompts or screenshots.
- [HYPOTHESIS] Spend **warnings**, not spending goals: $12.50 (25%) check runway; $25 (50%) cut speculative media; $37.50 (75%) allow only critical MVP/approved retries; $45 (90%) stop new paid calls. More important: before minute 100 never authorize if projected total would exceed $40, even if an alarm has not fired. If spend update is stale/uncertain, pause calls and reconcile. At minute 100 release only the amount needed for a verified blocking fix; at minute 105 no new AI generation at all. Coordinator may tighten thresholds, never violate the $10 reserve rule before minute 100.

## Owners and checkpoint language

### Run Plan output contract (planning LLM)

Given the announced brief, the **Final idea** output from `idea.md`, this file and ONE theme prompt, produce one executable **Run Plan** in English. Do not ideate again, paste the rejected candidates, or restate the catalog. Resolve conflicts in favor of the announced rules and show `UNKNOWN` wherever the team must check an input. [FROM USER] [HYPOTHESIS]

1. **Lock:** chosen MVP/Target/Stretch from the final idea; theme-specific deliverable, demo, official submission/hosting path (or `UNKNOWN` with an owner and check deadline); cut order.
2. **Minute grid:** contiguous 00-120 production plus 120-130 submission; each row has `minute box | output/check | owner | input and approved tool | estimated USD and formula or UNKNOWN | parallel work for the other producer | manual intervention | trigger and fallback`. Give Coordinator checkpoints and a saved working state. Local/manual work costs `$0 gateway`; list any other charges as `UNKNOWN`.
3. **Ready-to-send prompts:** expand the relevant templates from this file and the theme prompt with the final idea's actual details; put exact approved Vietnamese copy/lyrics in quoted placeholders only after a human checks them. Name the owning file(s), asset IDs, hard acceptance checks, timeout and cap. Do not transmit secrets.
4. **Spend sheet:** planned, retry allowance, pending and measured spend by gateway tool/model using only the registry above; hold the reserve until released under the rules below; Suno credit use tracked separately.
5. **Handoffs and verification:** A/B file/asset ownership and wait tasks, Coordinator go/no-go decisions, manual steps, source/license trail, Vietnamese final-artifact QA, clean-device/link test, and submitted artifact/receipt check. If any critical dependency is unverified, supply the manual route rather than pretending it exists.

| Role | Owns | Communication |
|---|---|---|
| Producer A (laptop 1) | Primary deliverable, integration and final build | Posts status `DONE / BLOCKED / WAITING`, file/asset ID, next manual task, estimated cost of next call. |
| Producer B (laptop 2) | Independent content/visual/audio module; manual alternative if slow | Hands off a named asset/module by an agreed minute; no editing A's files without explicit ownership transfer. |
| Coordinator (no dedicated laptop) | Timer, budget ledger, sources, Vietnamese QA, freeze and submission decisions | At each checkpoint reads ledger and tests a visible artifact on either laptop without disrupting both producers. May take a manual edit/QA task during waits. |

Coordinator script at **15 / 45 / 75 / 100 / 105 / 120 minutes** [HYPOTHESIS]: "What exact playable/viewable artifact exists? Who owns the blocking task, when is its cutoff, and what is the gateway-free alternative? What is spent, pending and projected against the $40/$50 ceilings? Are sources and Vietnamese checked? GO Target only if MVP works; otherwise STOP upgrades and name the fallback. Is hosting/export/submit test green?" At 15 lock MVP and fire bounded long jobs; at 45 switch stalled modules; at 75 integrate without optional assets; at 100 spend reserve only on a blocking fix; at 105 freeze generation and finalize; at 120 submit already validated output. Say the decision aloud and write it in ledger. [HYPOTHESIS]

## Master clock: 120 production + 10 submission

Each row is an **actionable default step**; theme playbooks replace rows with theme-specific timed steps, owners, prices and fallback. `Cost` = estimated gateway spend; local human/tool work has **$0 gateway** (other fees `UNKNOWN`). Parallel producers work on separate files/assets. [FROM USER] [HYPOTHESIS]

| Minute / box | Goal, owner, tool/input and check | Cost ceiling / fallback |
|---|---|---|
| 00-08 (8m) | Coordinator parses announced brief, rubric, format/hosting and current budget with Producer A/B; compare final idea's MVP/Target/Stretch to brief; name 10-second demo. | $0 / default to the smallest compliant MVP; mark unknown format for immediate organizer check. |
| 08-15 (7m) | A sets deliverable skeleton; B collects sources/assets; Coordinator fills owner/file map and ledger, checks deployed-submission route, locks idea and agent spec. | $0 / use offline scaffold, verified local materials. |
| 15-25 (10m) | A submits **one** bounded coding job if needed; B submits independent media batch if approved; Coordinator authorizes cap, logs pending costs; both producers start manual counterpart work. | Within $40 pre-100 ceiling / no gateway: A edits scaffold, B builds text-free/manual asset. |
| 25-60 (35m) | A builds working MVP loop; B prepares copy/sources/asset variants on separate files; Coordinator checks source trail, spend and Vietnamese; 45m go/no-go. | Within per-theme envelope / use local files and manual layout if jobs stall. |
| 60-80 (20m) | A integrates only assets in hand and tests primary task; B adds Vietnamese text/voice overlay and prepares hosted/exportable output; Coordinator tests once as user; 75m cutoff. | $0 new calls unless approved within ceiling / replace missing media with licensed or manual placeholders. |
| 80-100 (20m) | A fixes top functional issues; B renders/exports and tests alternate device/view; Coordinator audits facts, credits, typography and hosting test. | Up to $40 pre-100 total / drop Target/Stretch and keep demonstrable MVP. |
| 100-105 (5m) | Coordinator may release part of $10 reserve for one **blocking** fix with measured cost; A/B confirm last working version and final package. | $0 preferred; max $50 total / use saved fallback rather than uncertain retry. |
| 105-120 (15m) | **Freeze: no new AI generation.** A re-tests delivered artifact/hosted URL, B finalizes files and credits, Coordinator proofreads, checks format and signs off. | $0 / roll back only our own broken changes to last saved working version; do not disturb unrelated files. |
| 120-130 (10m extra) | Coordinator submits official link/file and confirmation; A checks URL from a clean browser, B holds local export and records receipt. | $0 gateway / follow official backup submission route if announced; otherwise escalate to organizers promptly. |

## Slow-gateway decision tree

1. **Before call:** Producer writes one bounded, complete request, owning files/inputs and acceptance check. Coordinator confirms approved model/protocol, live allowance, per-asset cap, time-box, independent work for A/B and last saved good version. Avoid long context or simultaneous edits to one file. [FROM ATTACHED DOCS] [HYPOTHESIS]
2. **Launch early, batch coherent work:** one well-specified independent coding module or a small consistent media batch. Each producer saves a hand-editable local substitute immediately. Record queue start and output ID. While waiting: A implements/repairs structure and data; B prepares Vietnamese copy, references and manual asset variant; Coordinator verifies sources, credits, spend and demo script. [FROM USER] [HYPOTHESIS]
3. **Timeout:** set the asset's time-box in the Run Plan. At **150% of its box** (e.g., 10m task still missing at 15m), switch MVP to its ready fallback. A late asset may replace a fallback **only after** integration/QA and before minute 105; otherwise ignore it. [FROM USER] [HYPOTHESIS]
4. **Retry:** at most **two** retries per asset, both after inspecting failure and revising one constraint; no blind identical reruns. The combined initial+retry projected bill must stay inside the asset cap, category envelope and locked-reserve rule. If `429`, stop parallel requests, check spend/status and work manually; if permission/model/protocol failure, use an enabled compatible option from the tool registry above only after approval; if no approved route, do not retry. No invented backoff interval. [FROM USER] [FROM ATTACHED DOCS] [HYPOTHESIS]
5. **Fallback ladder:** A = approved gateway result; B = earlier completed or prepared licensed asset + local edit; C = local template, manually authored Vietnamese copy, vector shapes/charts, human recording, offline export. For coding: prepared working scaffold -> manual narrowed single flow. If all gateway calls fail, ship a functional C that still matches the theme and has a truthful source trail. [FROM USER] [HYPOTHESIS]
6. **Version states:** at 15/45/75/100/105 save a known working state (small commits in the contest repo *only if official rules allow*, otherwise named local copies). Never overwrite the only good export; preserve prior versions and don't alter AI logs. Coordinator records which version is deployable. [FROM USER] [FROM ATTACHED DOCS] [HYPOTHESIS]

## Vietnamese production and proofreading

- [FROM USER] Instructions to LLMs and prompts to image/video/music/TTS are English; final UI, titles, charts, subtitles, dialogue, lyrics, narration and labels are natural Vietnamese. **Text entry point:** approve Vietnamese script/copy in a UTF-8 source file, *then* place it via HTML/CSS/SVG/Pillow/ffmpeg/manual editor or feed the reviewed script to TTS/Suno. For generated image/video, request **no letters, signage, logos, labels, subtitles, watermarks or readable glyphs**; add Vietnamese text in post. If unavoidable, quote a few exact Vietnamese words and manually inspect each rendered frame. [HYPOTHESIS] Do not depend on negative prompt support; inspect output.
- [VERIFIED via search: Google Fonts official [Be Vietnam Pro metadata](https://github.com/google/fonts/blob/main/ofl/bevietnampro/METADATA.pb) and [Noto Sans metadata](https://github.com/google/fonts/blob/main/ofl/notosans/METADATA.pb), accessed 07/10/2026] Both list `subsets: "vietnamese"` and `license: "OFL"`. [VERIFIED via search: [Google Fonts FAQ](https://fonts.google.com/faq), accessed 07/10/2026] Fonts may be used in commercial products/print/web/apps subject to their individual licenses. **Shortlist:** Be Vietnam Pro (display/body) and Noto Sans (neutral body/labels); for more expressive display type, choose another font only after checking its Vietnamese glyphs/license. Package licensed font files locally for offline export, include license where distribution requires, and check actual embedding/shape at final export. [HYPOTHESIS] A listed subset does not guarantee a chosen editor/export path renders every glyph.
- [HYPOTHESIS] TTS: have a human choose a region-appropriate voice and keep it consistent; explicitly spell out numbers, units, dates, initials and English loanwords as they should be spoken in Vietnamese (retain the canonical written form separately). Make a short pronunciation test with names, loanwords and currency before a long render; listen for unnatural tones/breaths, re-record locally if needed. Never fake a real person's voice/testimony. [FROM USER] Vietnamese-sensitive real people and dialect need review.
- [FROM USER] Authenticity check: named target user and specific contemporary context; no default costume/lantern/scooter collage; no invented regional speech. Independently verify flag/symbol, territorial maps, political/historical/religious references and identifiable people; if no reliable source, omit/abstract. Label illustrative AI visuals so nobody mistakes them for documentary evidence. For factual claims record source title, access date, exact datum and transformation; formulas run in code/spreadsheet and are manually spot-checked. [HYPOTHESIS] Do not convert an unverified sketch into an apparent fact.
- [HYPOTHESIS] Proofreading pass by Coordinator plus one producer: (1) read every visible line aloud against approved UTF-8 master copy; (2) search for lost accents/replacement characters, wrong tone, abbreviations, names and region-specific vocabulary; (3) verify figures, units, `1.000.000 ₫` and `dd/mm/yyyy` against sources; (4) view at mobile and presentation size, check wrapped/overlapping text, subtitle timing and contrast; (5) export/reopen final PDF, PPTX, image, audio/video, or hosted page and recheck glyphs. Sign `VN PASS` in ledger only when the delivered artifact matches the master.

## Copy-paste prompt discipline

All templates are **English instructions** with replaceable `{PLACEHOLDERS}`. The theme playbook fills the idea-specific parameters; do not send secrets or credentials. Each call has one owner, deadline and cost cap in the Run Plan. [FROM USER] [HYPOTHESIS]

**Image:**
```text
Create {COUNT} images for {THEME_AND_AUDIENCE}. Subject/action: {SCENE_AND_PURPOSE}. Keep {CHARACTER_OR_OBJECT_REFERENCE}, {PALETTE}, {CAMERA_OR_LAYOUT}, {ASPECT_RATIO} consistent across images. Leave clear negative space at {OVERLAY_POSITION} for a separate Vietnamese text overlay. No readable text, letters, numbers, signage, subtitles, logos, watermarks, maps or flags. No documentary claim: this is an illustration. Output {ASSET_NAMES}. Avoid {SCENE_SPECIFIC_FAILURES}. Success check: {VISUAL_ACCEPTANCE_CHECK}.
```

**Video:**
```text
Generate a text-free {DURATION} segment for {SHOT_ID} in a {SEQUENCE_LENGTH}-shot story. Subject reference: {REFERENCE_DESCRIPTION}; location and action: {SCENE}; palette/light/lens/movement: {STYLE_LOCK}; opening/closing composition: {EDIT_HANDOFF}. No readable text, letters, numbers, signage, subtitles, logos, watermarks, maps or flags. Reserve {OVERLAY_POSITION} for human-added Vietnamese captions. Avoid {ARTIFACTS}. Acceptance: {FRAME_AND_MOTION_CHECK}.
```

**Music (organizer Suno or approved gateway music route; human operates Suno):**
```text
Create {LENGTH_AND_STRUCTURE} music for {USER_AND_STORY}. Mood arc: {OPENING_TO_END}; tempo/groove/instruments: {SPECIFIC_SOUND}; vocal character/region if supported: {VOICE_DIRECTION}. Use these approved Vietnamese lyrics exactly: "{APPROVED_VIETNAMESE_LYRICS}". Keep meaning and tone natural. Do not add new factual claims, artist imitation, brands, or spoken narration. If the route cannot reliably follow lyrics, produce a text-free instrumental and overlay/record the reviewed Vietnamese vocal separately. Acceptance: {HOOK_AND_PRONUNCIATION_CHECK}.
```

**TTS:**
```text
Read this approved Vietnamese script exactly: "{APPROVED_VIETNAMESE_SCRIPT}". Use {CHOSEN_REGION_AND_PACING}. For speech only, pronounce {PRONUNCIATION_MAP} as written; preserve the written script for captions. Do not invent text, identify a real person, or switch accent. Produce a short sample of "{TEST_SENTENCE}" first. Acceptance: {HUMAN_LISTENING_CHECK}.
```

**Coding agent (only via verified gateway-compatible harness):**
```text
Goal: implement {SINGLE_USER_TASK} for {TARGET_USER} in {OWNED_FILES}. Other producer owns {OTHER_FILES}; do not edit those files. Input: {FINAL_IDEA_MVP}, {DATA_OR_ASSET_PATHS}, {EXISTING_SCAFFOLD}, {RUN_COMMAND}. Constraints: {OFFICIAL_RULES}, no secrets, no unapproved AI/network services, Vietnamese UI copy from {APPROVED_COPY_FILE}, preserve working state. Acceptance: {EXACT_INTERACTION_AND_TEST}, {MOBILE_OR_EXPORT_CHECK}, {ERROR_CASE}; run {CHECK_COMMAND} if available. Budget/time ceiling: {USD_CAP}, {MINUTES}. Return changed files, test result, and blockers; if blocked, stop and describe a hand-editable fallback, do not keep retrying or delete prior work.
```

Prompt review before sending: one purpose, exact audience/shot or owned files, shared style lock/reference, negative constraints, expected output format, checkable acceptance, estimated token/asset count and fallback. [HYPOTHESIS] Ask for no readable text, but assume the generator may still add stray glyphs; inspect every asset.

## Resource library and rights check

Only the **Google Fonts metadata/FAQ links above** are verified external links in this file; other categories below deliberately provide search queries, **not unverified URLs**. Google search is permitted; downloading a resource does not grant reuse rights. For every asset keep `creator | source page | item-specific license | allowed uses/derivatives | attribution text | download date | local filename`; retain a screenshot/copy of terms. Do not assume a site-wide license applies to every item. [FROM USER] [HYPOTHESIS]

| Category | Search query / ready use | License and content gate |
|---|---|---|
| Fonts | `Google Fonts Be Vietnam Pro Noto Sans Vietnamese OFL`, then metadata links above | Confirm exact file/OFL, embed/render and package license where required. [VERIFIED via search: Google Fonts metadata/FAQ, 07/10/2026] |
| Palettes / contrast | `accessible color palette contrast checker` | Use manual color values; verify text contrast and export; do not reuse branded identities without rights. [HYPOTHESIS] |
| Stock photos / video | `Vietnam {SPECIFIC_SUBJECT} reusable photo license original creator` | Confirm item license, permission for editing/promotional use, location/date and whether depiction is truthful; don't present synthetic work as real. [HYPOTHESIS] |
| Sound effects / music beds | `free sound effect {SCENE} commercial use attribution license` | Verify sampling/derivative/credit requirements and no voice/recording rights problem; keep a silent fallback. [HYPOTHESIS] |
| Game assets / UI kits | `open game asset pack license {STYLE}` / `open source UI kit license {FRAMEWORK}` | Check pack and component licenses, redistribution requirements and Vietnamese glyph space; test offline. [HYPOTHESIS] |
| Prompt references | `image shot list prompt examples {GENRE}` / `film storyboard shot types reference` | Use for technique, not copied protected art/artist imitation; rewrite from the brief and approved idea. [HYPOTHESIS] |

## Universal QA and submission gate

At minute 75 and again after freeze, Coordinator checks each item and records PASS/FAIL + owner + deadline. [HYPOTHESIS]

- [ ] **Truth/theme:** correct assigned format and intended user task; no unsourced claims, unlicensed assets or unlabeled synthetic documentary imagery; source -> validation -> output trace exists where facts/data matter.
- [ ] **Experience:** user can complete one task or watch/listen to a complete sequence; signature payoff visible within first 10 seconds; primary control/QR/link works; loading/error/empty states or media beginning/end work.
- [ ] **Vietnamese:** approved copy, no lost accents or corrupt overlays, proper terminology/names, numbers/dates/currency, caption timing, deliberate voice and sensitivity review; mark `VN PASS` only on final export.
- [ ] **Technical:** run/open real artifact, test two view sizes where relevant, no missing fonts/media, audible speech/no clipping, readable contrast, correct order/reading direction and charts/units; no placeholder data mistaken as factual.
- [ ] **Budget/log:** spend reconciled with gateway, pending charges checked, no exposed credentials, AI Log kept truthful and intact if required by organizers. [FROM ATTACHED DOCS]
- [ ] **Submit:** confirm exact announced format/size/naming and official route; for web/game/comic test hosted URL in clean browser (and mobile if relevant); for other themes reopen final PDF/PPTX/media file; package attribution/source notes and local backup; record URL/file, timestamp and submission receipt. [FROM USER] [HYPOTHESIS]

## Rehearse before contest day

One **120-minute dry run** for a sample theme, with 10 extra minutes to simulate submission; rehearsal is not permission to use unapproved AI during the contest. [FROM USER] [HYPOTHESIS]

| When / owner | Rehearsal action | Measurement and correction |
|---|---|---|
| Before clock / Coordinator, 20m prep | Confirm permitted test credits, organizer Suno access, gateway key entitlement, endpoint/protocol, deploy permissions and submission simulation; preload offline starter/assets/licenses. | Record `UNKNOWN` prices/rights/access; if not testable, route them out of MVP. Cost $0 gateway unless approved probes; fallback manual-only test. |
| 00-15 / A+B+Coordinator | Choose sample idea, lock format/MVP, budget and exact agent/media prompts. | Record real time to first working scaffold; cost $0 gateway; fallback offline scaffold. |
| 15-75 / A+B, Coordinator measures | Fire one bounded agent task and one media request on **permitted test funds**; produce manual fallback concurrently; sample TTS accents and font glyphs. | Record prompt tokens, request IDs, latency/429s, real per-call spend, retries, image/video dimensions and pronunciation; cost `UNKNOWN` until measured then use logged actual; fallback manual assets. |
| 75-120 / A+B, Coordinator audits | Integrate, test source/format/Vietnamese, produce and open final artifact, test hosting from clean browser. | Record export failures, QA time, actual total spend incl. agent tokens, and minutes consumed; fallback prebuilt export. |
| 120-130 / Coordinator, A+B support | Simulate official handoff/receipt; verify clean URL or package. | Measure upload time, rights documentation and whether 10m is enough; fallback organizer-approved alternate route if known. |

After rehearsal, Coordinator updates the **theme playbook's** measured time/cost assumptions and this file's `UNKNOWN` entries only when a documented source or real bill supports it. Report median/worst observed latency, spend per output including failed attempts, and whether the $10 reserve/105m freeze held. If no legal dry run is possible, label those numbers `UNKNOWN`, keep a local-only MVP and ask organizers for a sanctioned test. [HYPOTHESIS]