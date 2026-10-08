# Flyer | Planning Prompt

Use with the announced brief, the **Final idea** from `idea.md`, and `_common.md`; output only the Run Plan specified in `_common.md`. This file adds flyer-specific production gates; do not duplicate the shared pricing, roles, or language policy. [FROM USER]

## Lock the offer and physical format

- Extract from the final idea: one audience, one offer/event, one CTA, and a real contact/destination the team can verify. If fictional, make that explicit and check whether the brief permits it. [HYPOTHESIS] One action should be readable from arm's length or a phone-sized thumbnail.
- Ask for official print dimensions, orientation, bleed, safe margin, export format, and social variant if required. Keep these `UNKNOWN` until confirmed; do not make up a print-shop standard. [HYPOTHESIS] Keep a layered editable master and one test export early.
- If QR is part of the idea, encode only an approved, tested destination (no placeholder that looks live); show a human-readable address/action nearby where appropriate. [HYPOTHESIS]

## Flyer-only work packages

| Work package to time-box in Run Plan | Owner / deliverable | Gate, parallel work, fallback |
|---|---|---|
| Verify offer | B: checked CTA, contact, date/location/price and source or explicit fictional label | A builds typography-first grid; Coordinator calls listed contact/destination or checks official source if permitted. Fallback: remove unsupported specifics, not silently invent them. |
| Make focal visual | B: optional one text-free illustration from `_common.md` image prompt | A typesets master with local shapes or licensed image during generation. No AI text/QR. |
| Layout and QR | A: render approved Vietnamese copy and QR in HTML/SVG or manual editor | B scans QR on an actual phone and checks alternate text/destination; if scan fails, use visible URL/contact or remove QR. |
| Export inspection | A: export official format; B: inspect crop, safe margin, hierarchy and color; Coordinator opens printed-size PDF/image | Fallback: one clean single-format flyer from editable master, not a mismatched pair of variants. |

## Fill this flyer layout brief

```text
Plan a single-action flyer for {AUDIENCE} offering {VERIFIED_OFFER}. Return a layout map for {CONFIRMED_SIZE_AND_FORMAT}: focal visual, headline area, verified details, CTA, QR or visible destination, source/credit line, and safe margins. Use {APPROVED_COPY_FILE} verbatim for Vietnamese text; do not generate new dates, addresses, prices, logos or contact details. In the first glance the reader should see {ONE_PROMISE} and {ONE_ACTION}. Provide a text-free visual description for the optional image request; QR and all text are added in layout software.
```

Vietnamese enters via B's **verified copy sheet**, then A typesets it in a tested Vietnamese font after optional visual generation. B reads print/export text against the master and checks diacritics, exact dates/amounts (`dd/mm/yyyy`, `1.000.000 ₫`), phone/address and QR target in the actual exported artifact. [FROM USER] Image calls use `_common.md` pricing; print/export extras are `UNKNOWN` if not documented.

## Judge-lens and cuts

- [HYPOTHESIS] Likely strength is a distinctive visual tied to the action and instantly legible hierarchy. Weak patterns: generic generated poster with unreadable type, competing CTAs, or an attractive but wrong event detail.
- [HYPOTHESIS] Cut secondary decorative elements, not the CTA or truthful logistics. If delivery spec disallows QR, switch to plain approved contact.
- [HYPOTHESIS] Before contest: prepare an editable print-safe grid with Vietnamese test sentence, saved QR generation workflow and a PDF reopen test; search `one-action community flyer editorial layout` for reference, checking licenses for any imported art.