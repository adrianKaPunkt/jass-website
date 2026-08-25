# J.A.S.S. Earth Component

## Purpose

The `Earth` component is intended to become one of the central visual storytelling elements of the J.A.S.S. landing page.

It is not a decorative globe added to a single section. On desktop, it should behave as a persistent visual layer that can remain visible across multiple parts of the landing page and react to scroll progress.

The desired effect is cinematic, restrained, institutional and technical — not playful, futuristic or game-like.

The Earth should communicate:

- global operational capability
- aviation
- governmental / institutional character
- technical precision
- restrained authority
- international reach

The visual language should fit J.A.S.S. rather than look like a generic blue planet.

---

## 1. Design Direction

### Overall mood

The current reference direction is:

- dark charcoal / near-black background
- deep navy and steel blue
- cool silver / chrome accents
- subtle blue atmospheric glow
- high contrast, but not neon
- monochrome / desaturated Earth
- no gold
- no country borders
- no political labels
- no playful markers
- no exaggerated sci-fi HUD effects

The Earth should feel closer to high-end aviation imagery, intelligence / operational visualization, cinematic satellite imagery and institutional technology than gaming UI, cyberpunk or consumer SaaS.

---

## 2. Desktop Storytelling Concept

On desktop, the Earth should already be partially visible near the lower edge of the initial viewport.

```text
┌──────────────────────────────────────────────┐
│                                              │
│           HERO CONTENT / MEDIA               │
│                                              │
│                                              │
│                                              │
│               EARTH HORIZON                  │
│          visible at bottom of screen         │
└──────────────────────────────────────────────┘
```

The Earth may remain present while the user scrolls through multiple narrative stages.

Possible later behavior:

1. Earth starts large and partially outside the viewport.
2. Scroll begins.
3. Camera slowly zooms out.
4. Earth rotates gradually.
5. The globe can reorient toward important geographic regions.
6. Optional mission locations appear only during the relevant narrative stage.
7. Earth eventually fades or moves out before the next major visual chapter.

The page should feel like a continuous storyboard rather than clearly separated WordPress-like sections.

---

## 3. Mobile Strategy

Desktop and mobile do not need identical choreography.

### Desktop

Use:

- real WebGL / Three.js globe
- richer lighting
- scroll-controlled camera
- mouse parallax
- atmospheric glow
- possible 360° globe rotation

### Mobile

Possible options:

- simplified Three.js scene
- 2.5D representation
- pre-rendered globe
- separate `MobileEarth` component
- delayed appearance after the hero rather than immediately at page load

Mobile should prioritize performance, battery, readability and smooth scrolling. Do not force the desktop choreography into a narrow viewport.

---

## 4. Current Folder

Current project folder:

```text
/jass-website/components/earth/
```

Suggested structure:

```text
components/
└── earth/
    ├── Earth.tsx
    ├── EarthCanvas.tsx
    ├── EarthScene.tsx
    ├── EarthMaterial.tsx        # later
    ├── EarthLights.tsx          # later
    ├── MobileEarth.tsx          # later
    └── earth.config.ts          # later

public/
└── earth/
    └── textures/
        ├── earth-color.jpg
        ├── earth-bump.jpg
        ├── earth-normal.jpg     # later
        ├── earth-night.jpg      # later
        └── earth-clouds.png     # optional / later
```

Do not split the component into too many files prematurely. The current priority is to establish a stable globe first.

---

## 5. Technology

Use:

- Next.js
- React
- TypeScript
- Three.js
- `@react-three/fiber`
- `@react-three/drei`

Potential later animation layer:

- Motion / Framer Motion for page-level animation
- React Three Fiber `useFrame`
- scroll progress mapped into Three.js camera / object transforms

The Earth WebGL layer should remain independent from the normal page content.

---

## 6. Layering

The globe must never block page interactions.

```text
z-index: 20+
Navigation / interactive overlays

z-index: 10
Normal page content
Buttons
Text
Links
Forms

z-index: 1
Earth Canvas
pointer-events: none

z-index: 0
Dark background
Grid texture
Background lighting
```

The WebGL canvas should use:

```css
pointer-events: none;
```

The user must always be able to click content placed visually above the globe.

---

## 7. Background Concept

Desired background:

- dark graphite / charcoal
- subtle texture
- very fine grid
- grid visible mainly near the center
- grid fades toward viewport edges
- grid should not cover the entire page uniformly
- extremely low opacity
- optional subtle moving light gradient across the grid

The grid itself should not visibly slide around. A slow light variation over the grid is preferable.

---

## 8. Earth Geometry

The Earth itself does not need to be a complex modeled 3D object.

Use a sphere:

```tsx
<sphereGeometry />
```

Depth should primarily come from:

- color texture
- bump map
- normal map
- lighting
- atmosphere
- camera angle

A high-poly terrain mesh is unnecessary for the first implementation.

---

## 9. Texture Requirements

The final globe textures should be genuine equirectangular maps.

Recommended aspect ratio:

```text
2:1
```

Examples:

```text
4096 × 2048
8192 × 4096
```

The left and right edges must align seamlessly.

### Current known issue

The current generated Earth texture does **not** close perfectly around the sphere.

This is expected because the current texture is an AI-generated visual reference rather than a technically perfect seamless Earth map.

Do not spend too much time trying to repair this in Three.js.

For the final version:

1. use a geographically correct seamless Earth texture
2. preserve the real coastlines and terrain
3. create the J.A.S.S. visual mood using Three.js materials, color grading, shaders and lighting

The style should come primarily from rendering, not from distorting geography.

---

## 10. Maps

### Color Map

Purpose:

- continents
- oceans
- terrain
- base visual information

Desired look:

- dark
- desaturated
- navy
- slate
- silver
- realistic geography

### Bump Map

Purpose:

- subtle terrain depth
- mountain relief

Do not exaggerate mountains. Earth terrain should remain believable at planetary scale.

### Normal Map

Add later if it improves surface detail. Do not add it before the basic material and lighting are stable.

### Night Map

Potential later feature. Can be used to reveal subtle city lights on the night side of the Earth. City lights must remain restrained.

### Cloud Map

Optional. Clouds are not necessary for the core J.A.S.S. look.

If used later:

- separate slightly larger sphere
- transparent cloud texture
- independent slow rotation
- easy to disable

Build the globe so it already looks good without clouds.

---

## 11. Lighting

Lighting is extremely important to the final visual quality.

The Earth should eventually support:

- directional key light / sun
- subtle ambient fill
- blue atmospheric rim light
- optional sunrise / sunset edge
- soft shadow transition between day and night

Do not use many random lights. The lighting should feel physically coherent.

The atmosphere / rim glow is one of the most important visual signatures from the current reference image.

---

## 12. Rotation

The Earth should ultimately be able to rotate fully.

A full 360° globe is preferred because the page should communicate worldwide reach rather than only three fixed locations.

Idle rotation should be extremely slow:

```text
user notices that the Earth is alive
without consciously watching it rotate
```

Scroll can later take control of rotation. Avoid constant fast autonomous movement.

---

## 13. Scroll Interaction

Later, scroll progress can control:

- Earth rotation
- Earth scale
- Earth vertical position
- camera distance
- camera target
- atmosphere strength
- visibility of location markers
- transition into later page chapters

The user should always control progress by scrolling. Avoid long forced animations that require excessive scrolling.

---

## 14. Mouse Interaction

Desktop may later react subtly to mouse movement.

```text
mouse X
→ very small globe/camera yaw change

mouse Y
→ very small pitch change
```

Keep it subtle. The globe must not chase the cursor.

---

## 15. Locations

Potential operational locations currently relevant to the visual concept include:

- Luxembourg
- Tunisia / North Africa
- Uzbekistan / Central Asia

Locations should **not** permanently clutter the globe.

Possible behavior:

```text
scroll reaches location chapter
        ↓
small marker appears
        ↓
marker softly pulses
        ↓
supporting text appears
        ↓
marker disappears during transition
```

Country borders are intentionally unnecessary.

---

## 16. Visual Markers

If markers are implemented later, use:

- small point
- restrained ring
- faint pulse
- cool blue / silver

Avoid huge glowing circles, constant blinking, red targeting graphics, military-game HUD styling and permanent labels covering the globe.

---

## 17. Responsive Earth Sizing

The globe should not use a permanently hard-coded visual size.

A good direction is to derive the globe scale from the smaller viewport dimension.

```ts
const referenceSize = Math.min(
  viewport.width,
  viewport.height
);

const earthRadius =
  referenceSize * EARTH_SIZE_FACTOR;
```

This should keep the globe visually consistent across common desktop resolutions and ultrawide displays.

The exact size factor still needs visual tuning. Do not prematurely extract this into configuration until the correct visual proportions are found.

---

## 18. Current Implementation State

Completed:

- `/components/earth` folder exists
- Three.js / React Three Fiber setup works
- Canvas renders
- sphere renders
- Earth texture loads
- bump texture loads
- Earth is visible
- texture path works in deployed project
- current deployment can display the textured Earth

### Current issue

After changing the globe to viewport-relative sizing / positioning, the Earth ended up near the page footer rather than in the intended hero area.

This suggests the current canvas/container positioning strategy needs to be reviewed before continuing.

Do not immediately solve this by adding arbitrary absolute Y values.

First verify:

1. which DOM element owns the Earth
2. height of that container
3. whether the Earth canvas is `absolute`, `fixed` or `sticky`
4. whether the canvas is tied to the whole `<main>` height
5. which section should control Earth visibility
6. whether the Earth should initially be viewport-fixed while storytelling content scrolls

The Earth appearing at the footer is likely a layout/container issue rather than a Three.js geometry issue.

---

## 19. Recommended Next Technical Step

Before adding more visual effects, fix canvas ownership.

### Option A — Fixed visual layer

```css
position: fixed;
inset: 0;
```

Useful if Earth should remain in the viewport while content scrolls.

### Option B — Sticky storytelling container

A tall Earth chapter contains:

```text
sticky viewport
+
scrolling narrative content
```

This is likely the better long-term option if Earth only belongs to one major chapter of the landing page.

Example:

```text
EarthChapter
height: 300vh

    EarthViewport
    position: sticky
    top: 0
    height: 100vh

    Narrative layers
    controlled by scroll progress
```

This allows Earth to stay visually fixed while the user scrolls through the Earth story, then naturally leave when the chapter ends.

This architecture should be considered before further styling.

---

## 20. Recommended Component Architecture Later

Possible final structure:

```text
EarthChapter.tsx
│
├── EarthCanvas.tsx
│   └── EarthScene.tsx
│       ├── EarthMesh
│       ├── EarthAtmosphere
│       ├── EarthClouds
│       ├── EarthMarkers
│       └── EarthLights
│
├── EarthStory.tsx
│   ├── Intro
│   ├── GlobalReach
│   ├── LocationLuxembourg
│   ├── LocationAfrica
│   └── LocationAsia
│
└── useEarthScroll.ts
```

Do not implement all of this immediately. This is a target architecture, not today's task list.

---

## 21. Development Order

Use this order:

```text
01 Canvas ownership / viewport behavior
02 Responsive globe size
03 Correct seamless Earth texture
04 Base material
05 Bump / normal detail
06 Lighting
07 Atmospheric rim glow
08 Slow idle rotation
09 Scroll-controlled scale
10 Scroll-controlled rotation
11 Camera motion
12 Background grid
13 Location markers
14 Night lights
15 Optional clouds
16 Mouse parallax
17 Performance optimization
18 Mobile Earth
```

Do not skip ahead to animations before the visual base is correct.

---

## 22. Performance Principles

Desktop can use the full 3D experience, but performance still matters.

Later consider:

- DPR limits
- texture compression
- lower texture resolution on weaker devices
- geometry resolution reduction where visually acceptable
- suspend rendering when Earth is outside the viewport
- respect `prefers-reduced-motion`
- disable unnecessary continuous animation
- separate mobile implementation if needed

The globe must not make the rest of the landing page feel sluggish.

---

## 23. Accessibility

The Earth is primarily decorative / narrative.

It must never be required to understand critical page information.

Important:

- all meaningful information must also exist as text
- respect `prefers-reduced-motion`
- animations must not block navigation
- no interaction should require hovering the globe
- canvas should not capture pointer events unless explicitly required later

---

## 24. Design Principle

The J.A.S.S. landing page should be memorable, but it must remain credible for a conservative governmental audience.

The design goal is:

> Advanced, controlled and intentional.

Not:

> Look how many animations we can build.

The best visual effects should feel obvious only after the viewer notices them.

Subtle motion is preferred over spectacle.

The Earth is intended to be a major visual signature of the site, so it is worth investing time in making this one element exceptionally good.

---

## 25. Immediate Task for Codex

Start from the existing implementation.

Do **not** rewrite the whole component.

First inspect:

- `Earth.tsx`
- `EarthCanvas.tsx`
- `EarthScene.tsx`
- the parent page / layout where `<Earth />` is mounted

Then determine why the Earth canvas currently follows the page down toward the footer.

Goal:

> Keep the Earth in a viewport-relative desktop storytelling area while preserving its responsive size.

Before making major architecture changes, explain the current DOM/layout cause and propose the smallest clean fix.

After the layout is stable, continue with the development order in this document.

---

## 26. Working Philosophy

Build iteratively.

Each visual layer should be evaluated before the next is added.

```text
implement one effect
        ↓
view in browser
        ↓
evaluate visually
        ↓
adjust
        ↓
commit
        ↓
add next layer
```

Do not implement the complete globe in one pass.

The final quality of this component will come from many small, deliberate adjustments.
