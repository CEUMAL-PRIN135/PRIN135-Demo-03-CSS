# 12 · Position

**`position`** moves an element away from its normal place in the page, using the offset properties `top`, `right`, `bottom` and `left`.

## Key ideas

| Value | Positioned relative to | Keeps its original space? | Scrolls with page? |
|---|---|---|---|
| `static` (default) | — (offsets are ignored) | Yes | Yes |
| `relative` | **its own normal position** | Yes | Yes |
| `absolute` | the nearest **positioned** ancestor | No | Yes |
| `fixed` | the **browser window** | No | **No** |
| `sticky` | normal, until it hits the offset, then sticks | Yes | Until it sticks |

- A "positioned" element is anything that isn't `static`.
- `z-index` controls which positioned element is on top. Higher number wins.
- Common pattern: `position: relative` on the parent, `position: absolute` on the child.

## Activity

1. Open `starter/index.html` in your browser.
2. Complete TODOs 1–10 in `starter/style.css`.
3. Compare with `solution/`.

## Questions

1. In demo A, Box 2 moved. Why didn't Box 3 move up to fill the gap?
2. Remove `position: relative` from `.product` (TODO 2). Where does the SALE badge go now, and why?
3. In demo C, change green's `z-index` to `0`. What changes?
4. What's the difference between `sticky` and `fixed`?
5. `fixed` elements can cover page content. How could you make sure the last paragraph on the page isn't hidden behind the Help button?
