# 06 · Padding

**Padding** is the space *inside* an element, between the content and the border. Unlike margin, padding shows the element's background colour.

## Key ideas

| Syntax | Meaning |
|---|---|
| `padding: 20px;` | all four sides |
| `padding: 10px 50px;` | top/bottom, left/right |
| `padding: 0 0 30px 60px;` | top, right, bottom, left |
| `padding-left: 80px;` | one side only |

**`box-sizing`** decides what `width` means:

- `content-box` (browser default): `width` is the content only. Padding and border are **added on top**.
- `border-box`: `width` includes padding and border. Much easier to reason about, so most sites set `* { box-sizing: border-box; }`.

> Unlike the other activities, this one does **not** set `box-sizing: border-box` globally, so you can see the default behaviour.

## Activity

1. Open `starter/index.html` in your browser.
2. Complete TODOs 1–6 in `starter/style.css`.
3. Compare with `solution/`.

## Questions

1. A box has `width: 200px; padding: 20px; border: 5px solid;`. Show the math for its total width with `content-box`, and with `border-box`.
2. In demo C, what number did the label show for each box? Did it match your prediction?
3. Can padding be negative? Try `padding: -10px` and explain what happens.
4. Why do buttons usually use padding instead of a fixed `width` and `height`?
