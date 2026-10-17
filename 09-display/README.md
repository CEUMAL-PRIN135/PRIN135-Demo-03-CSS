# 09 · Display

The **`display`** property decides how an element's box takes part in the layout.

## Key ideas

| Value | New line? | Respects `width` / `height`? | Default for |
|---|---|---|---|
| `block` | Yes | Yes | `div`, `p`, `h1`–`h6`, `section`, `ul` |
| `inline` | No | **No** (vertical padding/margin don't push lines apart either) | `span`, `a`, `strong`, `em` |
| `inline-block` | No | Yes | `button`, `input`, `img` behave like this |
| `none` | — | — (the element is removed from the layout) | `head`, `script` |

## Activity

1. Open `starter/index.html` in your browser.
2. Complete TODOs 1–4 in `starter/style.css`.
3. Compare with `solution/`.

## Questions

1. In demo B, the divs have `width: 200px; height: 60px`. What happened to those sizes after you made them `inline`?
2. Before TODO 3, the nav links had `padding: 10px`. Use DevTools to inspect one: why doesn't its top/bottom padding push the content around it away?
3. Name a real situation where `inline-block` is the right choice.
4. Card 2 is hidden with `display: none`. Is it still in the HTML? How can you check? (Hint: DevTools → Elements.)
