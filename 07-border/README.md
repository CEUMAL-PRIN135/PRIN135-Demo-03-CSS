# 07 · Border

The **border** is the line that sits between an element's padding and its margin. It's the only visible edge of the box model.

## Key ideas

A border has three parts. The shorthand puts them together:

```css
border: 2px solid #2f5d8c;
/*      width style color */
```

| Property | Example | Notes |
|---|---|---|
| `border-style` | `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`, `none` | **Required.** With no style, there's no border at all |
| `border-width` | `4px` | Defaults to `medium` (about 3px) |
| `border-color` | `#2f5d8c` | Defaults to the text colour |
| `border-top`, `-right`, `-bottom`, `-left` | `border-left: 6px solid gold;` | One side only |
| `border-radius` | `8px`, `50%` | Rounds the corners; `50%` on a square makes a circle |
| `outline` | `outline: 2px solid red;` | Looks like a border but **takes no space** in the layout |

**Borders add size.** Unless you use `box-sizing: border-box`, a border is added *on top of* the width. Even with `border-box`, adding a border on `:hover` can make things jump. The fix is a `transparent` border from the start.

## Activity

1. Open `starter/index.html` in your browser. Notice that the tiles in demo A have no border yet.
2. Complete TODOs 1–18 in `starter/style.css`.
3. Compare with `solution/`.

## Questions

1. The tiles in demo A already had `border-width` and `border-color`. Why was no border visible until you set `border-style`?
2. Write `border: 3px dashed red;` as three separate properties.
3. What shape does `border-radius: 50%` make on a 100×200 rectangle? Try it.
4. In demo D, why did the "Jumpy" button push its neighbours, and how does the transparent border fix it?
5. Browsers show an outline on links and buttons when you press <kbd>Tab</kbd>. Why is it a bad idea to remove it with `outline: none`?
