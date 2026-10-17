# 02 · Specificity, Cascade & Inheritance

When more than one rule tries to style the same element, the browser picks a winner. Three ideas decide which one wins. Once you understand them, "why isn't my CSS working?" becomes easy to answer.

## 1. Inheritance: values passed down from parent to child

Some properties automatically pass from a parent element to its children. Others don't.

| Inherited (mostly text) | Not inherited (mostly box) |
|---|---|
| `color`, `font-family`, `font-size`, `font-style`, `font-weight`, `line-height`, `text-align`, `visibility` | `margin`, `padding`, `border`, `width`, `height`, `background`, `display`, `position` |

Keywords you can use on **any** property:

- `inherit`: use the parent's value, even for a property that isn't normally inherited
- `initial`: reset to the property's default value
- `unset`: `inherit` if the property normally inherits, otherwise `initial`

**Important:** an inherited value is the *weakest* thing there is. Any rule that targets the element directly beats it, however simple that rule is.

## 2. The cascade: when rules compete

When two rules set the same property on the same element, the browser decides in this order:

1. **`!important`**: a declaration marked `!important` beats everything else, even inline styles. Avoid it; it makes CSS hard to override later.
2. **Inline styles** (`style="..."`) beat any selector in a stylesheet.
3. **Specificity**: the more specific selector wins (see below).
4. **Source order**: if specificity is equal, the rule that comes **last** wins.

## 3. Specificity: how specific is a selector?

Count three things and write them as **IDs-Classes-Elements**:

| Column | Counts |
|---|---|
| **IDs** | `#nav` |
| **Classes** | `.btn`, `[type="email"]`, `:hover`, `:first-child` |
| **Elements** | `p`, `li`, `::before` |

Compare left to right, like a version number. **Any** ID beats any number of classes: `1-0-0` beats `0-15-0`.

| Selector | Score |
|---|---|
| `p` | 0-0-1 |
| `.card p` | 0-1-1 |
| `.btn.btn-primary:hover` | 0-3-0 |
| `#nav a` | 1-0-1 |
| `*`, `>`, `+`, `~` | add nothing |

The page has a **specificity calculator**: type any selector to see its score.

## Activity

1. Open `starter/index.html` in your browser.
2. Complete TODOs 1–11 in `starter/style.css`. Don't edit the **GIVEN RULES** block, since your rules have to compete with it.
3. **Before every refresh, predict** what will happen, then check.
4. For the puzzles (TODOs 9–11), use the calculator and DevTools to find out *why* the rule loses. In DevTools, losing declarations are shown ~~crossed out~~ in the Styles panel.
5. Compare with `solution/`.

## Questions

1. After TODO 1, which properties did the child paragraphs inherit from `.family`? Which didn't they inherit? Why does it make sense that `border` isn't inherited?
2. In TODO 4, move your green `.order-box` rule **above** the given blue one. What happens? Why?
3. In demo B, the `#stubborn` paragraph has an inline style, an ID rule and an `!important` class rule. Rank all three from strongest to weakest.
4. In demo C, which colour won? Now delete TODO 6. Which colour wins now, and why?
5. Give the score of each: `ul li a`, `.nav .item`, `#header .logo img`, `a:hover`, `input[type="text"]`. Check them with the calculator.
6. Puzzle 3: `.dark` is a class (0-1-0) and `.panel p` is a class plus an element (0-1-1). But that's not why the paragraph stayed dark. What's the real reason?
7. Why is `!important` called a "last resort"? What problem does it cause for the next developer?
