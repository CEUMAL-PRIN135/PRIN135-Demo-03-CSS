# 04 · Typography

Typography is how text looks: the **font**, and its size, weight, spacing and alignment. In CSS, a font can come from three places:

| Source | How | Pros | Cons |
|---|---|---|---|
| **Web-safe fonts** | Just name them in `font-family` | Nothing to download; instant | Limited choice; everyone has seen them |
| **Google Fonts** | A `<link>` tag in your HTML | Hundreds of free fonts; easy | Needs internet; loads from another server |
| **Uploaded (self-hosted)** | `@font-face` + a font file in your project | Works offline; full control | You manage the files and the license |

## 1. Web-safe fonts and font stacks

`font-family` takes a **list**. The browser uses the first font it has, so always end with a **generic family**:

```css
font-family: Georgia, "Times New Roman", serif;
/*           1st try  2nd try           always works */
```

| Generic family | Looks like | Common web-safe fonts |
|---|---|---|
| `sans-serif` | no little "feet" | Arial, Helvetica, Verdana, Trebuchet MS |
| `serif` | small strokes on letter ends | Georgia, Times New Roman |
| `monospace` | every letter the same width | Courier New |
| `cursive` | handwriting | (varies) |

Font names with spaces need quotes: `"Times New Roman"`.

## 2. Google Fonts

1. Go to [fonts.google.com](https://fonts.google.com), pick a font and its weights, and click **Get embed code**.
2. Paste the `<link>` tags into your `<head>`, **above** your own stylesheet:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap">
```

3. Use the font by name, with a fallback: `font-family: "Roboto", Arial, sans-serif;`

You can also load it from inside a CSS file with `@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");` at the very top, but `<link>` loads faster.

## 3. Uploading your own font (`@font-face`)

Put the font file in your project (here: `fonts/`), then describe it with `@font-face`:

```css
@font-face {
  font-family: "Pacifico";                                  /* the name you'll use */
  src: url("fonts/pacifico-latin-400-normal.woff2") format("woff2"),
       url("fonts/pacifico-latin-400-normal.woff") format("woff");
  font-weight: 400;
  font-display: swap;                                       /* show fallback text while loading */
}

.custom { font-family: "Pacifico", cursive; }
```

- Use **`.woff2`** (smallest) with **`.woff`** as a backup. Avoid `.ttf`/`.otf` on the web; they're much bigger.
- **Check the license.** Only upload fonts you're allowed to share. Pacifico uses the SIL Open Font License (`fonts/OFL.txt`), which allows this.

## 4. Text properties

| Property | Example | Notes |
|---|---|---|
| `font-size` | `1.125rem`, `18px`, `1.2em` | `rem` = relative to the root (usually 16px); `em` = relative to the parent |
| `font-weight` | `300`, `400` (normal), `700` (bold) | Only weights you've loaded will look right |
| `font-style` | `italic` | |
| `line-height` | `1.7` | Unitless = multiplied by the font size. 1.5–1.8 for body text |
| `letter-spacing` | `0.15em` | Great for small uppercase labels |
| `text-transform` | `uppercase`, `capitalize` | Changes how text *looks*, not the HTML |
| `text-align` | `left`, `center`, `right`, `justify` | Keep long text left-aligned |
| `text-decoration` | `underline`, `none` | Plus `-color`, `-thickness`, and `text-underline-offset` |

## Activity

1. Open `starter/index.html` in your browser.
2. Complete TODOs 1–15. Most are in `starter/style.css`, but **TODO 5 is in `starter/index.html`**.
3. Watch the badges in sections B and C: they turn green ✓ when a font really loads, and red ✗ when the browser falls back.
4. Compare with `solution/`.

> Section B needs an internet connection. If you're offline, its badges stay red and you'll see the fallback fonts. That's exactly why fallbacks matter!

## Questions

1. Why should every `font-family` list end with a generic family like `serif` or `sans-serif`?
2. Turn off your Wi-Fi (or block `fonts.googleapis.com` in DevTools → Network) and reload. What happens to section B? Which font does it show, and why?
3. In TODO 8, change the file name in `url()` to one that doesn't exist. What does the badge in section C say? What does the text look like?
4. In TODO 7, change `font-weight: 300` to `100`. Does it get thinner? Why not? (Hint: look at which weights the Google Fonts link loads.)
5. What's the difference between `rem` and `em`? When would `em` give a surprising result?
6. Name one advantage of uploading a font over using Google Fonts, and one disadvantage.
7. Why is `text-transform: uppercase` better than typing the text in capitals in the HTML?
