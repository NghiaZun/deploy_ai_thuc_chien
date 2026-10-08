# AI News Bulletin | Planning Prompt

Use with the announced brief, the **Final idea** from `idea.md`, and `_common.md`. Output only the Run Plan specified there. This file covers news verification, spoken/video production and ethical labeling; common costs, retries, voice rules and language QA are not repeated. [FROM USER]

## Lock the editorial brief

- Pick the specific audience question and dated news event from the final idea. Require original source(s), publication/updated time and a second independent check for consequential claims when possible; clearly distinguish verified fact, interpretation and `UNKNOWN`. [HYPOTHESIS] If confirmation is unavailable, narrow the bulletin to an evergreen sourced explainer, not a fabricated breaking story.
- Confirm mandatory format, duration, orientation, caption file and submission route from the announced brief. Never assume published news footage may be reused; asset license and documentary-vs-illustration labeling must be resolved per shot. [HYPOTHESIS]
- No invented quotes, fake official announcements, counterfeit presenter identities, or generated footage passed off as actual event footage. [FROM USER] [HYPOTHESIS]

## News-only work packages

| Work package to time-box in Run Plan | Owner / deliverable | Gate, concurrent work, fallback |
|---|---|---|
| Fact desk | B: claim ledger `line | primary source | date | corroboration | status` | A creates blank graphic/lower-third timeline; Coordinator blocks unverified line. Fallback: remove speculative item and cover only verified event/context. |
| Script and pronunciation | B: concise approved Vietnamese script, displayed captions and speech-only pronunciation map | A plans timed storyboard and text-free stills; Coordinator reviews name/date/attribution and listens to short voice sample. Fallback: human narration. |
| Media production | A: build verified screenshots/diagrams with source captions and optional licensed/AI-illustrative b-roll | B reviews source trail and caption text while media renders; fallback: cited stills, motion typography and manual graphics. |
| Assemble and deliver | A: edit voice/captions/lower-thirds; B: check timestamped line-to-evidence alignment | Coordinator watches muted and with sound, checks first/last frames, factual labels and actual export; fallback: short complete captioned bulletin from stills. |

## Fill this newsroom script brief

```text
Draft a {CONFIRMED_DURATION} Vietnamese news-bulletin script for {TARGET_AUDIENCE} about {DATED_VERIFIED_EVENT}. Use only {CLAIM_LEDGER_WITH_SOURCE_IDS}. Output a shot ledger: time segment, narration, on-screen lower-third, evidence/source ID, visual type (documented footage vs clearly labeled illustration), and pronunciation cue. Never invent quotes, interviews, facts, footage or an official stance. Mark unverified claims REMOVE; keep analysis explicitly separate from reporting. Hook with the audience consequence established by the sources.
```

Vietnamese enters through the **fact-checked script and captions file** before B records or requests TTS; A adds lower-thirds and timed subtitles in editor/ffmpeg after text-free visuals. B compares export speech, subtitles, names, dates, `dd/mm/yyyy`, amounts and source badges to the claim ledger; Coordinator reopens and watches the final rendered file. [FROM USER] TTS costs and options come only from `_common.md`, with unknown rates kept `UNKNOWN`.

## Judge-lens and cuts

- [HYPOTHESIS] A credible source-backed reveal in the opening, with a precise effect on the audience, beats theatrical but vague breaking-news styling. Weak patterns: unverified headlines, unexplained AI visuals, illegible citations or incorrect Vietnamese pronunciation.
- [HYPOTHESIS] Cut extra stories -> elaborate transitions -> generated motion. Keep one verified news point, legible attribution and a complete ending.
- [HYPOTHESIS] Before contest: prepare source ledger, visual attribution lower-third, subtitle style and export preset; run a short human/TTS pronunciation sample with Vietnamese names.