# Website | Planning Prompt

Use with the announced brief, the **Final idea** from `idea.md`, and `_common.md`. You are the production planner: output the Run Plan defined in `_common.md`, not another idea. This file adds **website-only decisions**; shared time, budget, tool, evidence, licensing, and language rules live in `_common.md`. Treat design preferences as `[HYPOTHESIS]`; the actual brief wins. [FROM USER]

## Lock the web contract

- Name the user's one action, its input -> result -> next step, and the first interaction a judge can try. [HYPOTHESIS] Do not substitute a landing page for a task-oriented site. Map the final idea's MVP/Target/Stretch to routes or components; MVP must work without an AI request at runtime unless a live dependency is explicitly required by the brief.
- Specify exact deliverable URL and deployment method from official instructions; if hosting is `UNKNOWN`, Coordinator must establish an approved route before coding. Web output must be **deployed and accessible**. [FROM USER] Set a first publish-and-open checkpoint before visual upgrades; keep a runnable local build as backup, but never claim local-only output satisfies URL submission.
- Decide source model: verified static dataset or user-provided input for MVP; for any claim or recommendation, record provenance, date, assumptions, and what happens when data is missing. No generated photograph masquerading as a real location/product. [HYPOTHESIS]

## Theme-specific production sequence

| Work package to time-box in Run Plan | Owner / deliverable | Gate, parallel task, fallback |
|---|---|---|
| Publish skeleton | A: start prepared responsive scaffold, set one route and publish a basic live URL | B: collect sources and draft approved Vietnamese copy in a separate data/copy file; Coordinator checks URL in clean browser. If deployment fails, diagnose approved route immediately; do not build an unshippable site. |
| Core task | A: build deterministic input -> output interaction; optionally give an approved coding agent one bounded module | B: build source-backed dataset, edge cases and manual explanation; while agent runs A hand-builds the simplest control and result view. Fallback: local hand-coded function and static but truthful dataset. |
| Distinctive evidence | B: add one verifiable comparison/explanation linked to the user's action, then hand off read-only data/assets | A integrates without editing B's files simultaneously; Coordinator checks the feature actually changes a decision. Drop decorative media before cutting the task. |
| Delivery test | A: redeploy from last working state; B: test narrow and wide screens, broken/empty input, links and legibility | Coordinator opens submitted URL in a fresh browser, verifies the hero action and claims; fallback is last deployed working MVP, not an untested new build. |

## Fill this bounded agent brief

Use `_common.md`'s coding-agent template; make the theme-specific task concrete:

```text
Implement the single website interaction {USER_INPUT} -> {VERIFIABLE_RESULT} -> {NEXT_ACTION} inside {OWNED_COMPONENT_FILES}. Read display text from {APPROVED_VIETNAMESE_COPY_FILE}; data from {VERIFIED_DATA_FILE}. Do not implement a generic chatbot or add a new AI dependency at runtime. Required states: empty, valid, invalid/missing data. Acceptance: {ONE_EXACT_TEST_CASE}, {SECOND_EDGE_CASE}, keyboard/touch interaction, and working navigation at {TWO_TEST_VIEWPORTS}. Keep deployment configuration owned by Producer A unchanged unless explicitly assigned.
```

Place Vietnamese text in the separate approved UTF-8 copy/data file **before** UI integration; A renders real text with the checked font; B and Coordinator compare final hosted copy, dates, `1.000.000 ₫`/`dd/mm/yyyy` examples and line wrapping against that file. Generated images are text-free and illustrative only. [FROM USER] Use an approved model/harness and cost formula from `_common.md`; unknown hosting cost or agent latency stays `UNKNOWN` pending dry run.

## Judge-lens and cut rules

- [HYPOTHESIS] First 10 seconds: a judge can perform the action and understand why the result is useful without narration. Test with someone who did not build the site.
- [HYPOTHESIS] Failure signatures: dummy CTA, fabricated data, all functionality hidden below the fold, desktop-only layout, dead deployed link. Fix the primary task and reachable URL before animations or extra pages.
- [HYPOTHESIS] Pre-contest: rehearse the approved deploy route from a clean machine; keep a responsive scaffold, Vietnamese-capable local font, one data fixture and one ready-to-edit task flow. Search references by task and audience, not by generic "beautiful landing page".