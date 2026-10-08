# Game | Planning Prompt

Use with the announced brief, the **Final idea** from `idea.md`, and `_common.md`. Produce only the shared Run Plan, adding the game-specific loop, inputs, deployment and test cases below. The submitted game must be hosted and playable per team instruction; approved hosting method is `UNKNOWN` until verified. [FROM USER]

## Lock the playable loop

- State the control, objective, immediate feedback, one escalating change, win/lose condition and restart in one sentence each. [HYPOTHESIS] A complete tiny loop beats an ambitious menu with no game. Adapt the final idea's signature moment so it occurs during real play in the first 30 seconds, not in a trailer.
- Choose an already prepared small browser scaffold or an installed proven engine if the brief requires established game rules/physics. [HYPOTHESIS] No new engine setup should consume the critical path. Ask for required desktop/mobile input and test both.
- Check the official hosted URL route before game logic; keep a known-good deployed build after every integration. [FROM USER] Never make the gateway a runtime dependency unless required by the brief and independently approved.

## Game-only work packages

| Work package to time-box in Run Plan | Owner / deliverable | Gate, parallel task, fallback |
|---|---|---|
| Publish starter | A: deploy playable blank loop with start/restart and placeholder shapes | B: define exact rules, win/lose test cases and short approved Vietnamese UI strings; Coordinator opens URL fresh. If hosting unavailable, resolve official route before art. |
| Implement core | A: bounded approved agent task for isolated game logic or hand-edit; run local play loop concurrently | B: create sample levels/objects in separate data file, plus manual CSS/SVG sprites. Fallback: one level and manual rules with shapes. |
| Feedback and identity | B: hand off licensed/optional generated text-free assets and two sounds only if permitted | A integrates movement/score/feedback without relying on late assets; Coordinator checks core still works with sound muted and missing media. |
| Playtest and deploy | A: publish working build; B: test keyboard/touch on both screen sizes, restart and impossible states | Coordinator watches a novice play without explanation, tests hosted URL and confirms a full loop; fall back to last hosted working state. |

## Fill this agent task

```text
Implement ONLY {CORE_MECHANIC} in {OWNED_GAME_FILES} using {PREPARED_SCAFFOLD}. Inputs: {CONTROL_MAP}; deterministic rule: {RULE_AND_CONSEQUENCE}; state transitions: {START_PLAY_WIN_LOSE_RESTART}. Use approved Vietnamese UI strings from {COPY_FILE}, and render game objects with local shapes when assets are absent. Do not add runtime AI calls or external services. Acceptance tests: {FIRST_30_SECOND_PLAY}, {WIN_CASE}, {LOSE_CASE}, {RESTART_CASE}, {TOUCH_AND_KEYBOARD_CASE}. Preserve the currently deployable build.
```

Vietnamese enters via B's reviewed UTF-8 **UI/rules file** before A wires menus, feedback and game-over states; B and Coordinator inspect the hosted game on two view sizes for lost accents, clipping, key labels, numbers and phrasing after play. Image assets contain no baked-in text. [FROM USER] Choose coding model and measured agent cap from `_common.md`; `UNKNOWN` session cost/latency blocks reliance on the agent for the only playable build.

## Judge-lens and cuts

- [HYPOTHESIS] Judge test: begin, make one meaningful choice, see consequence, win/lose, restart without a developer explaining the rules. Weak patterns: art-first splash screen, unpredictable controls or dead restart.
- [HYPOTHESIS] Cut order: new levels -> animation -> generated sprites/audio. Keep input, visible feedback and full state loop.
- [HYPOTHESIS] Before contest: deploy a one-screen starter, record approved hosting workflow, test offline shapes/sounds and mobile touch, prepare input/score/restart test script. Search `open game asset pack license {STYLE}` only for assets with checkable item rights.