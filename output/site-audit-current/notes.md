# Morocco Tag / Wibit Site Audit Notes

Date: 2026-07-01
URL: http://127.0.0.1:5173/

## Scope

Screenshot-based design, UX, responsive, and performance pass of the current single-page website. No code edits were made.

## Strengths

- The hero now feels premium, image-led, and clearly communicates Saidia, Wibit, and the booking/discovery action.
- The navy, turquoise, white, and restrained gold palette is consistent and brand-appropriate.
- The proof strip, Wibit section, park plan, age cards, impact section, and final CTA now read as one coherent editorial system.

## Main Recommendations

1. Optimize media before production. The Wave video is about 45 MB, and two JPEGs are about 8-12 MB each. This will hurt mobile load, perceived quality, and conversion.
2. Fix hash/anchor landing positions and bottom scroll behavior. Direct jumps to later sections can expose awkward blank space or clipped section starts, especially around Impact, Wave, CTA, and footer.
3. Tighten the mobile hero and first scroll. The mobile hero is beautiful but very tall; the user has to travel a lot before seeing proof or project detail.
4. Recheck mobile section openings. Some mobile anchor states start mid-section or expose only the tail of a section, which makes navigation feel less polished.
5. Clarify footer brand/contact context. The footer mentions Flootica while the header brand is Morocco Tag; if Flootica is the operator, the relationship should be explicit. If not, this should be corrected.
6. Add production accessibility checks. Keyboard focus, reduced-motion behavior for autoplay video, image alt text, and contrast on small gold labels need a real interaction pass.

## Verification

- Local build passed with `npm run build`.
- Screenshots saved in this folder.
