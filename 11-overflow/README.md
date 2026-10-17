# 11 · Overflow

**`overflow`** controls what happens when an element's content is bigger than the box itself. This usually happens when you set a fixed `height` or `width`.

## Key ideas

| Value | What happens to extra content |
|---|---|
| `visible` (default) | It spills outside the box |
| `hidden` | It is clipped and can't be seen |
| `scroll` | It is clipped, and scrollbars are **always** shown |
| `auto` | It is clipped, and scrollbars appear **only if needed** |

- `overflow-x` / `overflow-y` control one direction at a time.
- To cut a single line of text with "…", you need all three: `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`

## Activity

1. Open `starter/index.html` in your browser. Notice the text spilling out of every box.
2. Complete TODOs 1–6 in `starter/style.css`.
3. Compare with `solution/`.

## Questions

1. What's the difference between `scroll` and `auto`? Make the text in the `auto` box shorter and see what changes.
2. Why is `overflow: hidden` risky for important content?
3. In demo C, remove `white-space: nowrap`. Why does the ellipsis stop working?
4. Name a real website element that uses `overflow: auto` (hint: chat windows, dropdown menus, code blocks).
