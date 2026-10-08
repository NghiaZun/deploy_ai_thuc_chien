# Financial Report | Planning Prompt

Use with the announced brief, the **Final idea** from `idea.md`, and `_common.md`. Produce only the shared Run Plan; this prompt supplies financial reporting steps and validation, not generic budget/tool instructions. No number from an LLM is a trusted source or calculator. [FROM USER] [HYPOTHESIS]

## Lock scope and evidence

- Extract the report's reader, decision, period, geography, units, denominator and primary sources from the final idea. Do not blend dates, currencies or populations. [HYPOTHESIS] If the source cannot be reached and independently checked, narrow to a smaller supported question, not an invented dataset.
- Confirm official delivery format and whether source spreadsheet/methodology must accompany PDF/HTML/XLSX. `UNKNOWN` until announced; do not assume charts alone count as a financial report. [HYPOTHESIS]
- Require a traceable dataset: `source URL or citation | retrieval date | original field/units | cleaned value | formula | display cell/chart`. Record assumptions and a clear informational disclaimer appropriate to the content, without presenting the analysis as personalized advice. [HYPOTHESIS]

## Financial-report-only work packages

| Work package to time-box in Run Plan | Owner / deliverable | Gate, parallel work, fallback |
|---|---|---|
| Source acquisition | B: capture a small time-consistent primary dataset with provenance | A builds empty report table/plot template while B gathers; Coordinator spot-checks source and period. Fallback: shorter range with verified rows, or a qualitative report clearly labeled. |
| Deterministic calculations | A: compute totals, ratios or change using spreadsheet/Python; save formulas and units | B writes source notes and checks one worked example by hand; Coordinator checks that displayed figures reconcile. Never let an LLM calculate final totals. |
| Argument and visualization | B: draft Vietnamese headline/conclusion and disclosure from computed cells; A binds charts to calculated dataset | Coordinator tries to disprove the central claim with one counterexample/alternate denominator. Fallback: readable table and one checked chart. |
| Export and audit | A: reopen final report and source table; B: check citations, chart legends/axes, page breaks and numbers | Coordinator traces a chosen headline figure back to a specific input/formula and verifies intended decision. |

## Fill this audit brief

```text
You are editing the narrative of a financial report for {AUDIENCE_AND_DECISION}. Input ONLY {VERIFIED_DATA_TABLE_WITH_IDS}, {FORMULA_SHEET}, {PERIOD_UNITS_AND_SCOPE}. Suggest a concise report structure: decision summary, one central comparison, chart with units, caveats and source notes. Reference cells/row IDs for every numeric assertion. Do not perform or invent calculations, sources, forecasts or financial advice. Draft Vietnamese prose for human approval in {NARRATIVE_FILE}; label unsupported claims as NEEDS SOURCE.
```

Vietnamese enters in B's **approved narrative and chart-label file** after A freezes validated numbers. A formats numbers and dates from structured values in code/spreadsheet rather than hand-typing; B and Coordinator check `1.000.000 ₫`, `dd/mm/yyyy`, units, accents, source footnotes and printed/exported chart axes against formula sheet. [FROM USER] Any optional gateway narrative edit is estimated from `_common.md`; local math costs `$0 gateway`.

## Judge-lens and cuts

- [HYPOTHESIS] Demonstrate the data pipeline and one decision-changing comparison. Likely weak: a beautiful but unverifiable number, mixed units, or a claim that the graph cannot support.
- [HYPOTHESIS] Cut projections and secondary charts first; keep provenance, the computed core table, one useful comparison and disclaimer.
- [HYPOTHESIS] Before contest: prepare a spreadsheet with unit checks, a reproducible chart template, source ledger and PDF print test; collect no unsourced sample figures that might accidentally ship.