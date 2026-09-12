# Image assets

Every image in this directory tree is currently a **generated placeholder**
(an abstract panel in the Ficha Uchi palette, labeled "PLACEHOLDER"), not a
photograph. This is intentional: the spec for this site explicitly rules out
using stock photography of people — especially children — as a stand-in for
real, consented Ficha Uchi photography.

To launch, replace files in each folder with real images **of the same
filename** (or update the `src` paths in `src/data/*.ts`), organized as:

```
/hero          — homepage + page hero imagery
/uniforms      — uniform sourcing, tailoring, fitting, distribution
/community     — outreach, drives, neighbourhood, meetings
/youth         — youth space, mentorship, arts, leadership
/team          — team member photographs
/campaigns     — campaign cover images
/stories       — story cover images
/gallery       — general photo archive
```

Guidelines (see `about` page "Ethical storytelling" note in the product
spec):

- Only publish photographs of children/learners with documented consent.
- Prefer images that show agency, achievement and community — avoid
  "poverty porn" framing or before/after imagery.
- Keep files reasonably optimized (WebP or compressed JPEG, ideally under
  300KB for gallery/story images, under 800KB for hero images).
- Update `alt` text in the relevant `src/data/*.ts` file for every image you
  replace — descriptive alt text is required, not optional, on this site.
