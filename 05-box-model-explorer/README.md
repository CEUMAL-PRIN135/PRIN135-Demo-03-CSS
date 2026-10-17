# 05 · Box Model Explorer

**Do this right after activities 00–04.** Every element on a web page is a box with four layers. This page lets you *see* those layers on any element just by hovering over it, the same way browser DevTools does.

```
┌──────────── margin ─────────────┐
│ ┌────────── border ───────────┐ │
│ │ ┌──────── padding ────────┐ │ │
│ │ │        content          │ │ │
│ │ └─────────────────────────┘ │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

| Colour | Layer | What it is |
|---|---|---|
| 🟧 Orange | **margin** | Transparent space *outside* the border; pushes neighbours away |
| 🟨 Yellow | **border** | The edge line around the padding |
| 🟩 Green | **padding** | Space *inside* the border; shows the background colour |
| 🟦 Blue | **content** | The text, image, or child elements |

## How to use it

Open `index.html` in a browser. There's no starter or solution here. This one is for exploring.

| Action | What happens |
|---|---|
| **Hover** any element | Its margin, border, padding and content are coloured on the page, and the panel shows the exact numbers |
| **Click** an element | Pins it so you can read the panel without holding the mouse still |
| **↑ Select parent** | Moves the pin to the element that contains it (great for tiny inline elements) |
| **Esc** / **Unpin** | Go back to hovering |
| **Outline every box** | Draws the border box of *every* element at once: solid = block, dashed = inline, dotted = other |
| **Playground sliders** | Change margin, border, padding and `box-sizing` on a live box |

The page has three sections:

- **A. Browser defaults**: headings, paragraphs, lists, a blockquote, a figure, a table and a form, all with **no CSS from us**. Everything you measure there comes from the browser's built-in stylesheet.
- **B. Styled elements**: a card, buttons, a tag, a note and floated columns styled by `page.css`.
- **C. Playground**: a box you control with sliders.

## Explorer worksheet

Record what the panel shows. Numbers can differ slightly between browsers.

1. Click any heading, then press **↑ Select parent** until you reach `body`. What margin does the browser give it by default?
2. What are the top and bottom margins of a `p`? Of the `h1`? Of an `h3`? Which is biggest?
3. Inspect the `ul`. Which side has padding, and why do you think it's there?
4. Inspect the `blockquote`. Is it indented with margin or with padding?
5. Inspect the `input`, `select`, `textarea` and `button`. Which of them have a border and padding by default? Write down their `box-sizing`.
6. Hover the link in section A. What is its `display` value? Does it have any margin?
7. Turn on **Outline every box**. Name three inline elements and three block elements on the page.
8. In section B, inspect `.card` and then the `h3` inside it. Compare its margin with the `h3` in section A ("A smaller heading"). Why are they different?
9. In the playground, set margin 20, border 4, padding 20. Write down the rendered width. Now tick `box-sizing: border-box`. What's the rendered width now, and what happened to the content width?
10. **Challenge:** find two elements stacked vertically whose margins collapse. Measure both margins, then measure the actual gap between them.

## Do it in real DevTools

Everything this page does, your browser can do too. Right-click any element on **any** website → **Inspect** → open the **Computed** tab (Chrome/Edge) or **Layout** tab (Firefox) to see the same box-model diagram.
