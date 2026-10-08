# Slide Deck | Planning Prompt

Use with the announced brief, the **Final idea** from `idea.md`, and `_common.md`. Return the shared Run Plan only; add the slide-specific story, generation and export choices below. Shared tool prices, roles and QA stay in `_common.md`. [FROM USER]

## Lock the presentation contract

- Extract intended audience, the decision they face, the claim/evidence/consequence arc and the one slide that delivers the final idea's signature reveal. [HYPOTHESIS] One main claim per slide; if a fact lacks a source, remove it or mark it as a scenario/assumption.
- Confirm official slide count, aspect ratio, file format (PPTX/PDF or both), whether speaker notes count, and submission method. If unspecified use `UNKNOWN` and an early Coordinator decision; do not guess mandatory dimensions. [HYPOTHESIS]
- Use a prebuilt deck master or prepared HTML-based renderer; pick one primary editable format and reopen its final export. Do not make a single flat image if editability is required. [HYPOTHESIS]

## Slide-only work packages

| Work package to time-box in Run Plan | Owner / deliverable | Gate, parallel work, fallback |
|---|---|---|
| Storyboard | B: slide ledger `index | claim | supporting evidence | visual | speaker note | source` | A applies prepared theme/grid with placeholder frames; Coordinator checks the arc answers the audience's question. Fallback: fewer complete slides, not an unfinished deck. |
| Verified visuals | B: prepare source-backed charts, screenshots or optional text-free illustration | A builds layouts/text styles while media renders; fallback to manual charts, diagrams and licensed assets. |
| Assembly | A: populate editable slides from approved copy/table; B: review pacing and exact source cues | Coordinator sees the signature reveal in slideshow mode; fix overcrowded slide by splitting only if format/time allows, otherwise prune claims. |
| Export and rehearsal | A: export required PPTX/PDF and reopen on a different viewer; B: check notes, fonts, crop and source page | Coordinator rehearses opening and ending without narration support; fallback last complete exported deck. |

## Fill this storyboard brief

```text
Create a slide ledger for {AUDIENCE_AND_DECISION} using {FINAL_IDEA_ARC} and only {VERIFIED_SOURCES_WITH_IDS}. For each of {CONFIRMED_SLIDE_COUNT_OR_MAX}, specify ONE claim, row/source ID, evidence graphic, Vietnamese on-screen line placeholder from {APPROVED_COPY_FILE}, and optional speaker note. Open with {JUDGE_QUESTION}; end with {CONCRETE_NEXT_ACTION}. Do not invent statistics, citations, projected benefits or speaker testimony; mark evidence gaps NEEDS SOURCE.
```

Vietnamese enters through B's **approved slide-copy/notes file** and is inserted by A into editable text boxes, not baked into AI illustrations. After export, B checks accents, jargon, dates, `1.000.000 ₫` and line fitting in presentation mode; Coordinator confirms source labels still match the chart. [FROM USER] Optional media/text spend is calculated from `_common.md`; local chart or slide generation is `$0 gateway`.

## Judge-lens and cuts

- [HYPOTHESIS] A memorable narrative and one supported surprise beat exhaustive bullet lists. Weak patterns: tiny citations, data-free stock art, unsupported promises and font substitution in exported slides.
- [HYPOTHESIS] Cut decorative slides and animation; keep opening question, source-backed evidence, decisive comparison and closing action.
- [HYPOTHESIS] Before contest: preload a Vietnamese-safe deck master with chart styles, notes, credits, and PPTX/PDF export tested on another laptop.