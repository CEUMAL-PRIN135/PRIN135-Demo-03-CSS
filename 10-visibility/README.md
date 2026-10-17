# 10 · Visibility

There are three common ways to hide an element. They look the same, but they behave differently.

## Key ideas

| Property | Can you see it? | Keeps its space? | Can you click it? |
|---|---|---|---|
| `visibility: hidden` | No | **Yes** | No |
| `opacity: 0` | No | **Yes** | **Yes** |
| `display: none` | No | No | No |

Use `visibility: visible` (or `opacity: 1`) to bring an element back, for example on `:hover`.

## Activity

1. Open `starter/index.html` in your browser.
2. Complete TODOs 1–5 in `starter/style.css`.
3. Compare with `solution/`.

## Questions

1. Look at the four rows in demo A. Which rows still have a gap where chip 3 was? Why?
2. Chip 3 in the `opacity: 0` row is a link. Can you still click it? Why could that be a problem?
3. When would you want to keep the space (`visibility: hidden`) instead of removing it (`display: none`)?
4. Change TODO 4 to `display: none` and TODO 5 to `display: block`. Does the hover still work? Is there any visible difference?
