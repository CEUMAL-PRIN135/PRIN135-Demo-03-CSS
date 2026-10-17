# 00 · Where to Write CSS

Before styling boxes, you need to know **where** CSS goes. There are three places, and every later activity uses at least one of them.

## The three ways

### 1. Inline CSS: in a `style` attribute

```html
<p style="padding: 16px; border: 3px dotted #c0392b;">Hello</p>
```

- Affects **one element only**.
- Quick for testing, but hard to maintain: you'd have to repeat it on every element.

### 2. Internal CSS: in a `<style>` tag inside `<head>`

```html
<head>
  <style>
    .internal-box { padding: 16px; border: 3px dashed #27ae60; }
  </style>
</head>
```

- Affects every matching element **on this page only**.
- Handy for a single-page demo or page-specific tweaks.

### 3. External CSS: in a separate `.css` file

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

```css
/* styles.css */
.external-box { padding: 16px; border: 3px solid #2f5d8c; }
```

- Affects every page that links the file.
- **The recommended way.** Change one file and the whole site updates. It also keeps HTML (content) separate from CSS (design).

## Which one wins?

When the same property is set in more than one place on the same element:

| Priority | Where | Why |
|---|---|---|
| 1st (wins) | **Inline** `style=""` | Written directly on the element |
| 2nd / 3rd | **Internal** `<style>` and **external** `<link>` | Equal strength. **Whichever comes later in the `<head>` wins** |

In this activity the `<style>` tag comes *after* the `<link>`, so internal beats external.

> Selectors also matter (an `#id` rule beats a `.class` rule), but with the same selector, the rules above decide.

## Activity

The starter uses all three methods, but none of them are written yet.

1. Open `starter/index.html` in your browser. It's plain, unstyled HTML.
2. Complete the TODOs in order. They're spread across **three files**:

| TODO | File | Method |
|---|---|---|
| 1 | `starter/index.html` | Inline: add a `style` attribute |
| 2 | `starter/index.html` | Internal: add a `<style>` tag |
| 3 | `starter/index.html` | External: add the `<link>` tag |
| 4 | `starter/styles.css` | External: write the `.external-box` rule |
| 5 | `starter/index.html` | "Who wins?": style one box in all three places |
| 6 | `starter/about.html` | Reuse: link the same stylesheet on a second page |

3. Click the **About** link to check that the shared styles carry over.
4. Compare with `solution/`.

## Questions

1. After TODO 4, why didn't anything change until you finished TODO 3?
2. In "Who wins?", what colour was the box with all three styles? What colour was it after you deleted the inline style? Why?
3. Move the `<style>` tag **above** the `<link>` tag in `index.html`. What colour is the "Who wins?" box now (with the inline style still removed)? Why?
4. On the About page, why is the green internal box unstyled?
5. Your site has 20 pages and you want to change the header colour. Which method makes that easiest, and why?
6. Give one situation where inline CSS is acceptable.
