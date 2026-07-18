# Morocco Tag / Wibit Site Guidelines

## Project Identity

This project is the official website for a Morocco Tag tourism experience centered on a Wibit floating aquatic park in Saidia, Morocco. The site should feel premium, coastal, Moroccan, family-friendly, and adventure-led. It must not drift into a generic waterpark, resort, or travel-agency template.

## Source Of Truth

- Treat the PowerPoint deck as the primary source for factual content, naming, data, positioning, and claims.
- Do not invent awards, capacities, dates, prices, partners, safety certifications, or operational details.
- If a metric or claim is not in the deck or explicitly provided by the user, leave it out or mark it as needing confirmation in internal notes.
- Preserve the distinction between Morocco Tag as the project/tourism brand and Wibit as the floating aquapark technology/provider.

## Visual Direction

- Use a refined Moroccan coastal palette: deep navy, Mediterranean blue, turquoise water, white, sand only as a supporting neutral, and restrained gold accents.
- Avoid one-note beige, generic blue corporate, neon waterpark, or cartoon resort styling.
- Favor large immersive beach/aquatic imagery, Moroccan geometric ornament, clean iconography, elegant serif display headings, and crisp sans-serif UI text.
- The first viewport must clearly signal Saidia, Morocco, the floating aquatic park, and the booking/discovery action.
- Do not add decorative blobs, generic gradients, fake dashboard panels, or unrelated tourist imagery.

## Copy Tone

- Write in a premium but direct tourism voice: inviting, confident, precise, and family-friendly.
- Preferred themes: adventure, family, Saidia, Mediterranean coast, safety, innovation, summer, Morocco.
- Avoid filler phrases like "unforgettable memories await" unless grounded by a specific experience.
- Keep French as the primary public-facing language unless the user requests another language.
- If multilingual support is added, keep FR, EN, and AR labels consistent across navigation and footer.

## Required Website Shape

The full site should include, unless the user changes scope:

- Header with brand, navigation, language switcher, and reservation CTA.
- Hero section with strong aquatic park imagery, location, headline, and primary CTA.
- Experience overview explaining the floating aquatic park concept.
- Data/stat strip using only verified values.
- Saidia destination section with location and visitor context.
- Attractions or zones section for the park experience.
- Safety/family section if supported by the deck.
- Strong booking CTA band.
- Footer with quick links, contact/social placeholders only when confirmed.

## UI And Component Rules

- Keep layout spacious, polished, and editorial rather than card-heavy.
- Use cards only for repeated items, proof points, or compact content blocks that need framing.
- Buttons should be sharp, premium, and consistent: gold primary, outlined navy/white secondary where appropriate.
- Icons should be simple line icons or custom Moroccan-inspired glyphs with consistent stroke weight.
- Make responsive layouts feel designed, not merely stacked.
- Text must never overlap images or controls on mobile or desktop.

## Assets

- Supplied reference images define the desired mood and section rhythm, but visible facts should be updated from the PowerPoint.
- Prefer real or generated coastal/aquatic visuals that show the park, sea, family activity, or Saidia context.
- Do not use generic pool, cruise, tropical island, or non-Moroccan resort imagery.
- If a logo or brand mark is recreated, keep it refined and Moroccan-inspired, with gold/navy treatment.

## Engineering Guidelines

- Follow the framework and tooling already present in the repository once the app is scaffolded.
- Keep content data separated from layout components where practical.
- Use reusable design tokens for colors, typography, spacing, buttons, and section backgrounds.
- Keep components focused: header, hero, stats, media sections, CTA, footer, and content blocks should not all live in one monolithic file.
- Avoid hardcoded one-off styles when a shared token or component variant should be used.

## Deployment Guidelines

- Repository: `Yassine1017/MoroccoTag-Wibit`.
- Keep the GitHub repository private.
- Use preview deployments for review before production.
- Production should only be promoted after desktop and mobile visual checks.
- If deployed on Vercel, connect a custom domain only after content and imagery are approved.

## Quality Checklist

Before handoff, verify:

- All public claims are backed by the PowerPoint or user-provided facts.
- The page does not look like a generic template.
- Hero, CTAs, stats, and section order match the approved direction.
- Desktop and mobile layouts are clean with no clipped or overlapping text.
- Colors remain navy, turquoise, white, and gold-led without drifting beige or corporate blue.
- Footer/contact/social details are either confirmed or clearly omitted.
