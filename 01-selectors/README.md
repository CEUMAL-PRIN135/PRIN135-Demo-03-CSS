# 01 · Selectors

Every CSS rule starts with a **selector**, which says *which* elements the rule applies to:

```css
selector {
  property: value;
}
```

In this activity you write the selectors yourself, using four families of them.

## A. Basic selectors

| Selector | Example | Selects |
|---|---|---|
| Universal | `*` | every element |
| Element (type) | `p` | every `<p>` |
| Class | `.highlight` | every element with `class="highlight"` (reusable) |
| ID | `#special` | the **one** element with `id="special"` (unique) |
| Attribute | `input[type="email"]` | inputs whose `type` is exactly `email` |
| Attribute (starts with) | `a[href^="https"]` | links whose `href` starts with `https` |
| Grouping | `h3, h4` | every `h3` **and** every `h4` |

## B. Combinators

A combinator joins two selectors by their **relationship** in the HTML.

| Combinator | Example | Selects |
|---|---|---|
| Descendant (space) | `.menu a` | every `a` *anywhere* inside `.menu` |
| Child `>` | `.menu > li` | only `li` elements *directly* inside `.menu` |
| Adjacent sibling `+` | `.anchor + p` | the **one** `p` immediately after `.anchor` |
| General sibling `~` | `.anchor ~ p` | **every** `p` after `.anchor` with the same parent |

Siblings only look **forward**: a `p` *before* `.anchor` is never selected.

## C. Pseudo-classes: one colon `:`

Select an element in a certain **state** or **position**.

| Pseudo-class | Selects |
|---|---|
| `:hover` | while the mouse is over it |
| `:focus` | while it's selected (e.g. typing in an input) |
| `:first-child` / `:last-child` | the first / last child of its parent |
| `:nth-child(even)`, `:nth-child(odd)`, `:nth-child(3)` | children by position |
| `:not(.featured)` | everything that does **not** match |
| `:checked` | a ticked checkbox or radio button |
| `:disabled` | a disabled form control |

## D. Pseudo-elements: two colons `::`

Style a **part** of an element, or add content that isn't in the HTML.

| Pseudo-element | Selects |
|---|---|
| `::before` / `::after` | a generated box at the start / end of the content (needs `content: "..."`) |
| `::first-letter` | the first letter (drop caps) |
| `::first-line` | the first rendered line |
| `::selection` | text the user highlights |
| `::placeholder` | the hint text in an empty input |

## Activity

1. Open `starter/index.html` in your browser.
2. Complete TODOs 1–24 in `starter/style.css`. Each TODO tells you **which elements** to target and **which declarations** to use. **You** write the selector.
3. Some TODOs only show up when you interact: hover the buttons, click into the input, tick a checkbox, highlight the story text.
4. Compare with `solution/`.

## Questions

1. What's the difference between `.menu a` and `.menu > a`? Which links in demo B would `.menu > a` select?
2. In the siblings demo, which paragraphs got the green background, and which got the left border? Why didn't the paragraph *before* the heading get either?
3. Why must an ID be unique, but a class can be reused?
4. Change `:nth-child(even)` to `:nth-child(odd)`, then to `:nth-child(3)`. What changes each time?
5. TODO 17 uses `input:checked + label`. Explain in words what that selector means.
6. Delete the `content` line from TODO 19. What happens, and why?
7. Open DevTools and find the `::after` badge on "Selector Mug". Does it appear in the HTML source? Where does DevTools show it?
8. **Specificity:** add `p { background: pink; }` at the bottom of the file. Why does the `.highlight` paragraph stay yellow, even though the `p` rule comes later? (Activity 02 explains this in detail.)
