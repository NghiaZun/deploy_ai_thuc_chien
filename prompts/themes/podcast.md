# Podcast | Planning Prompt

Use with the announced brief, the **Final idea** from `idea.md`, and `_common.md`. Return the shared Run Plan only. Supply podcast-specific speech, sound and export decisions below; refer to `_common.md` for tool prices, shared pronunciation rules and budget. [FROM USER]

## Lock the listening experience

- Identify one listener question from the final idea, the answer supported by verified sources, a first-line hook and a natural spoken ending. [HYPOTHESIS] Choose one consistent host voice unless a second real character is essential and truthfully presented; no invented eyewitness testimony.
- Confirm official episode length, audio codec/container, artwork/transcript requirements and submission method; leave missing specs `UNKNOWN` with early check. [HYPOTHESIS] A complete shorter episode is better than a longer unfinished interview.
- Determine if the idea actually needs music or effects; only pre-cleared sounds with recorded licenses, or silence. Never use an imitation of a real presenter's voice. [FROM USER] [HYPOTHESIS]

## Podcast-only work packages

| Work package to time-box in Run Plan | Owner / deliverable | Gate, concurrent work, fallback |
|---|---|---|
| Research/script | B: source ledger, spoken-Vietnamese script, pronunciation cues and transcript master | A makes blank session with intro/outro markers and cover layout; Coordinator checks each factual sentence and naturalness aloud. Fallback: tighter sourced monologue. |
| Voice sample | B: test approved gateway TTS if voice works, otherwise record human voice | A edits pacing, silence and manual sound bed independently; Coordinator listens for names, numbers, region consistency. Fallback: human recording, not repeated uncertain TTS calls. |
| Cover and mix | A: assemble narration, optional permitted sound, gentle transitions; add approved title to text-free cover | B compares rough cut against transcript and checks claims; fallback: clean voice-only episode with a typeset cover. |
| Deliver | A: export official format and reopen; B: verify transcript, cover credits, start/end and intelligibility on phone | Coordinator listens to first 15 s, random middle and final 15 s, then signs off complete audio. |

## Fill this spoken-script brief

```text
Write a {CONFIRMED_LENGTH} spoken Vietnamese podcast script for {LISTENER_AND_QUESTION} using ONLY {VERIFIED_SOURCE_NOTES_WITH_IDS}. Return time segments: opening sound/question, one concrete situation, sourced answer, useful takeaway, closing. Mark every factual sentence with a source ID in separate production notes; the listener-facing narration must sound like natural speech, not an essay. No invented interview, quotation or witness. List pronunciation-sensitive names, units, dates and loanwords separately for {PRONUNCIATION_MAP}.
```

Vietnamese enters when B approves the **spoken script + transcript master**; either B records it or supplies the exact approved text to the `_common.md` TTS template, never asking TTS to invent copy. A places Vietnamese cover title afterward using a checked font and transcribes/aligns captions only if required. Coordinator compares heard speech, transcript, cover, numbers/dates and diacritics in the exported audio/package; keep canonical written numbers separate from speech spellings. [FROM USER]

## Judge-lens and cuts

- [HYPOTHESIS] The opening should sound like a relevant problem, and the answer should survive a listener's fact check. Weak patterns: sterile dual-TTS conversation, endless theme music, rushed speed, unexplained English terms.
- [HYPOTHESIS] Cut second voice -> elaborate SFX -> music bed before shortening verified answer or skipping final audio QA. Measure peak/clipping and speech audibility with local editor; do not invent a platform-specific loudness target.
- [HYPOTHESIS] Before contest: prepare a working recorder/microphone setup, blank mix session, transcript layout and short Vietnamese pronunciation test; verify every non-AI audio asset's license.