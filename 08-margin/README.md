# 08 · Margin

**Margin** is the transparent space *outside* an element's border. It controls the distance between an element and its neighbours.

## Key ideas

| Syntax | Meaning |
|---|---|
| `margin: 20px;` | all four sides |
| `margin: 10px 40px;` | top/bottom, left/right |
| `margin: 5px 10px 15px;` | top, left/right, bottom |
| `margin: 0 0 30px 60px;` | top, right, bottom, left (clockwise) |
| `margin: 0 auto;` | centers a block that has a width |
| `margin-top: -20px;` | negative margins pull elements closer, even overlapping |

**Margin collapse:** when two vertical margins touch, they don't add up. The larger one wins.

## Activity

1. Open `starter/index.html` in your browser.
2. Complete TODOs 1–7 in `starter/style.css`.
3. Compare with `solution/`.

## Questions

1. Write `margin: 0 0 30px 60px` using four separate properties (`margin-top`, ...).
2. Why does `margin: 0 auto` do nothing on a block with no `width`?
3. In demo C, what is the gap between Box 1 and Box 2? Why isn't it 50px?
4. Do horizontal (left/right) margins collapse too? Try it.
