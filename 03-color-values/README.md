# 03 · Color Values

CSS accepts colours in several formats. They can all be used anywhere a colour is allowed: `color`, `background`, `border-color`, `outline-color`, and more.

## The formats

| Format | Example | How it works |
|---|---|---|
| **Named** | `tomato`, `steelblue`, `white` | ~140 built-in names. Readable, but you can't fine-tune them |
| **Hex** | `#2f5d8c` | `#RRGGBB`: two hex digits (00–ff = 0–255) per channel |
| **Hex shorthand** | `#f90` | `#RGB`: each digit is doubled, so `#f90` = `#ff9900` |
| **`rgb()`** | `rgb(47 93 140)` or `rgb(47, 93, 140)` | Red, green, blue from 0 to 255 |
| **`hsl()`** | `hsl(210 60% 50%)` | **H**ue (0–360° on the colour wheel), **S**aturation (0% grey → 100% vivid), **L**ightness (0% black → 100% white) |

Screens mix **light**, not paint: `rgb(255 255 0)` (red + green) is **yellow**, and all three at 255 is **white**.

### Hue cheat sheet

| 0° | 60° | 120° | 180° | 240° | 300° |
|---|---|---|---|---|---|
| red | yellow | green | cyan | blue | magenta |

**Why HSL is handy:** to make a lighter or darker version of a colour, change *only* the lightness. In hex or RGB, you'd have to change all three numbers.

## Alpha (transparency)

Alpha runs from `0` (invisible) to `1` (solid).

| Format | 50% transparent `#2f5d8c` |
|---|---|
| 8-digit hex | `#2f5d8c80` (last two digits are alpha: `80` = 128 ≈ 50%) |
| `rgb()` with a slash | `rgb(47 93 140 / 0.5)` |
| `rgba()` (older syntax) | `rgba(47, 93, 140, 0.5)` |
| `hsl()` with a slash | `hsl(210 50% 37% / 0.5)` |
| `transparent` | a named colour with alpha 0 |

**Alpha vs `opacity`:** an alpha colour makes only *that colour* see-through. `opacity: 0.5` fades the **whole element**, including its text, border and children.

## Activity

1. Open `starter/index.html` in your browser.
2. Complete TODOs 1–22 in `starter/style.css`. The selectors are written for you. Each TODO describes the colour, and you write it in the format asked for. The label in each box shows what it should end up as.
3. Use the **colour converter** at the bottom of the page to explore and check your values.
4. Compare with `solution/`.

## Questions

1. What colour is `rgb(255 255 255)`? `rgb(0 0 0)`? `rgb(0 255 255)`? Explain why.
2. Expand these shorthand hex values: `#fff`, `#000`, `#0f0`, `#abc`.
3. Is `#2f5d8c` the same as `rgb(47 93 140)`? Convert `2f`, `5d` and `8c` to decimal to prove it.
4. Using HSL, write a colour that's the same hue as `hsl(210 60% 50%)` but **much darker**, and one that's **grey**.
5. In section E, why is the text in the `opacity` box faded, but not the text in the alpha box?
6. The converter says `#2f5d8c` is `hsl(210 50% 37%)`. Inspect the `hsl()` box in section E with DevTools: what `rgb()` value does the browser actually compute? Why isn't it exactly `rgb(47 93 140)`? (Hint: the converter rounds to whole numbers.)
7. Your brand colour is `#2f5d8c`. Which format would you use to make a hover colour 10% lighter, and why?
