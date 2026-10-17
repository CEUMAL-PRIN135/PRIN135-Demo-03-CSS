# 13 · Floats

**`float`** pushes an element to the left or right edge of its container. The content after it (usually text) wraps around it.

## Key ideas

| Property | What it does |
|---|---|
| `float: left` / `float: right` | Push the element to one side; following content wraps around it |
| `float: none` | Default; no floating |
| `clear: left` / `right` / `both` | "Don't sit next to a float; go below it" |

**The collapsing parent problem:** floats are taken out of normal flow, so a parent that contains *only* floats has zero height. Fix it with a **clearfix**:

```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

> Today, Flexbox and Grid are used for page layout. Floats are still the right tool for wrapping text around an image, and you'll see them in a lot of older code.

## Activity

1. Open `starter/index.html` in your browser.
2. Complete TODOs 1–7 in `starter/style.css`. After TODO 3, look at the dashed border before moving on.
3. Compare with `solution/`.

## Questions

1. What happens to the text in demo A if you remove the margin from the floated box?
2. After TODO 3 (before TODO 4), what did the dashed gallery border look like? Why?
3. In demo C, remove `clear: both` from the footer. Where does it go?
4. The two columns are 65% + 30% = 95%. What happens if you change them to 70% + 35%?
