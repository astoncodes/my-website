# Portfolio redesign: "Title card"

Date: 2026-09-26 · Status: approved in brainstorming, building

## Goal

Replace the "Signal OS" terminal theme, which reads as AI-generated, with a design that looks made by a person with taste. A recruiter skimming for 30 seconds should learn who Daniel is, what Daniel has built, and how to get in touch. Nothing on the page is fake, and every page works at 320px with no sideways scrolling.

## Decisions (from the brainstorming session)

| Topic | Decision |
| --- | --- |
| Direction | C "Title card": personality kept, costume dropped |
| Hero | Pictures first. Three real stills (The End of Evangelion, City of God, Drogba) fill the hero, brighter and taller, with only a caption strip over them. The name is not the centrepiece. |
| Type | "Credits": Jost for headings and labels (spaced caps), Source Serif 4 for body text. No monospace. |
| Colour | Neutral black and off-white from the approved mockups, plus one restrained Chelsea-blue accent (links, focus, selection). To be tuned once seen live. |
| Copy | Plain lines taken from the current resume (Aug 2026 version). Numbers instead of adjectives, no taglines or jokes, plain section names. |
| Contact backend | Deferred. The form keeps its mailto hand-off but says honestly what happens. |

## Page structure

1. Header: name (links home), Experience, Projects, Contact, Résumé. Transparent over the hero, solid once scrolled. Mobile menu panel.
2. Hero: three stills and a caption strip: "Software engineer · B.Sc. Computer Science, UPEI · May 2027", plus photo credits.
3. Intro: "Software engineer and computer science student at UPEI. Most recently at Mackenzie Investments." Links: Résumé, GitHub, LinkedIn, Email.
4. Now: building Drop In; building ASHẸ.
5. Experience: Mackenzie Investments, UPEI TA, BC Electronic Library Network (resume bullets, trimmed).
6. Projects: Drop In, ASHẸ, MapleNest, Monopoly Strategy Simulation.
7. Skills: the four resume groups.
8. Education: UPEI B.Sc. CS with Economics minor, coursework, Google Cloud Fundamentals.
9. Music & film: live Spotify (hidden when unavailable, never mock tracks) and Letterboxd.
10. Gallery: the remaining reference images with plain captions, in a wrapped grid.
11. Contact: email (with copy button), phone (tap to call), LinkedIn, GitHub, and the form.
12. Footer: © year, Email, LinkedIn, GitHub, Letterboxd, Résumé.
13. Custom 404 page in the same style.

Sections use a label column (small spaced caps) beside the content on desktop and stack on mobile.

## Removed

Boot sequence, ticker, grain, scanlines, CRT glow, glitch hover, the reveal-on-scroll fade on every section, the ⌘K command palette, the floating Signal Dock, the fake status footer, neon chips, project "case file" modals, the gallery filters and carousel, mock Spotify tracks, and the generic "Open Spotify" link.

## Checklist mapping

- Horizontal scroll and mobile overflow: fix causes, no carousels, verified at 320–1440px.
- Broken links: all external links checked. ASHẸ gets no link (private repo); Drop In links to its public repo.
- Mobile menu: rebuilt. Escape closes it, focus returns to the button, the page is scroll-locked, and it closes on navigation.
- Favicon, OG image: regenerated in the new type.
- Page titles and meta descriptions: title template, plain description, Open Graph and Twitter tags, `metadataBase` https://ayotosin.com.
- Footer links, custom 404, copyright year (updates at runtime).
- Compress images: next/image with AVIF and WebP, correct `sizes`, blur placeholders.
- Broken buttons, success and error messages: honest contact form states, per-field errors, a "Copied" confirmation.
- Placeholder text: mock data, generic links and input placeholders removed.
- Unused navigation: trimmed to four items.
- Logo, email and phone are clickable.

## Verification

`tsc`, `eslint`, `next build`; a headless-Chrome script checking overflow at 320/360/375/414/768/1024/1280/1440, the mobile menu behaviour, anchor targets, the 404 status and title, and form states; screenshots reviewed at desktop and mobile widths.
