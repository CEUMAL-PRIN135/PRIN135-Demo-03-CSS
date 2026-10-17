/* ===== 05 · Box Model Explorer — inspector logic =====
   You don't need to edit this file. It reads each element's
   computed margin, border and padding with getComputedStyle()
   and draws them on top of the page. */

(function () {
  var page = document.getElementById('page');
  var panel = document.querySelector('.bm-panel');
  var overlay = document.getElementById('bm-overlay');
  var hoverToggle = document.getElementById('bm-hover');
  var allToggle = document.getElementById('bm-all');
  var SIDES = ['Top', 'Right', 'Bottom', 'Left'];

  var toolbar = document.querySelector('.bm-toolbar');
  var hovered = null;
  var pinned = null;

  // Push the page (and panel) below the toolbar, however tall it wraps
  function fitToolbar() {
    var h = toolbar.offsetHeight;
    document.documentElement.style.paddingTop = h + 'px';
    if (window.innerWidth >= 900) panel.style.top = h + 'px';
    else panel.style.top = '';
  }
  fitToolbar();

  // ---------- Overlay boxes ----------
  var ov = {};
  ['margin', 'border', 'padding', 'content'].forEach(function (k) {
    var d = document.createElement('div');
    d.className = 'ov ov-' + k;
    overlay.appendChild(d);
    ov[k] = d;
  });
  var tip = document.createElement('div');
  tip.className = 'ov-tip';
  overlay.appendChild(tip);

  // ---------- Helpers ----------
  function isInspectable(el) {
    return el && el.nodeType === 1 && !el.closest('[data-inspector]') &&
      (el === page || page.contains(el) || el === document.body);
  }

  function round(n) {
    return Math.round(n * 10) / 10;
  }

  function measure(el) {
    var cs = getComputedStyle(el);
    var num = function (prop) { return parseFloat(cs[prop]) || 0; };
    var r = el.getBoundingClientRect();
    var m = SIDES.map(function (s) { return num('margin' + s); });
    var b = SIDES.map(function (s) { return num('border' + s + 'Width'); });
    var p = SIDES.map(function (s) { return num('padding' + s); });
    return {
      cs: cs, rect: r, m: m, b: b, p: p,
      contentW: r.width - b[1] - b[3] - p[1] - p[3],
      contentH: r.height - b[0] - b[2] - p[0] - p[2]
    };
  }

  function label(el) {
    var s = el.tagName.toLowerCase();
    if (el.id) s += '#' + el.id;
    if (typeof el.className === 'string' && el.className.trim()) {
      s += '.' + el.className.trim().split(/\s+/).join('.');
    }
    return s;
  }

  function describe(display) {
    if (display === 'none') return 'display: none — this element takes up no space at all.';
    if (display === 'inline') {
      return 'Inline: flows with the text. width and height are ignored, and vertical margin/padding don\'t push other lines away.';
    }
    if (display === 'inline-block') return 'Inline-block: sits in a line of text, but respects width, height and vertical spacing.';
    if (display === 'block') return 'Block: starts on a new line and stretches to fill the width of its container.';
    if (display === 'list-item') return 'List item: a block box with a bullet or number marker.';
    if (display.indexOf('table') === 0) return 'Part of a table layout (' + display + ').';
    if (display === 'flex' || display === 'grid') return display + ': a layout container for its children.';
    return 'display: ' + display;
  }

  function setBox(d, x, y, w, h, widths) {
    d.style.left = x + 'px';
    d.style.top = y + 'px';
    d.style.width = Math.max(0, w) + 'px';
    d.style.height = Math.max(0, h) + 'px';
    d.style.borderWidth = widths.map(function (v) { return Math.max(0, v) + 'px'; }).join(' ');
    d.style.display = 'block';
  }

  function setNum(id, v) {
    var node = document.getElementById(id);
    node.textContent = v === 0 ? '0' : round(v);
    node.className = node.className.replace(/\s*bm-zero/, '') + (v === 0 ? ' bm-zero' : '');
  }

  // ---------- Draw the overlay ----------
  function draw(el) {
    if (!el) {
      Object.keys(ov).forEach(function (k) { ov[k].style.display = 'none'; });
      tip.style.display = 'none';
      return;
    }
    var x = measure(el), r = x.rect, m = x.m, b = x.b, p = x.p;
    var ml = Math.max(0, m[3]), mt = Math.max(0, m[0]);

    setBox(ov.margin, r.left - ml, r.top - mt, r.width, r.height, m);
    setBox(ov.border, r.left, r.top, r.width - b[1] - b[3], r.height - b[0] - b[2], b);
    setBox(ov.padding, r.left + b[3], r.top + b[0], x.contentW, x.contentH, p);
    setBox(ov.content, r.left + b[3] + p[3], r.top + b[0] + p[0], x.contentW, x.contentH, [0, 0, 0, 0]);

    tip.innerHTML = '<b>' + label(el) + '</b> ' + round(r.width) + ' × ' + round(r.height);
    tip.style.display = 'block';
    var tipTop = r.top - mt - tip.offsetHeight - 4;
    if (tipTop < toolbar.offsetHeight) tipTop = r.bottom + Math.max(0, m[2]) + 4;
    tip.style.top = tipTop + 'px';
    tip.style.left = Math.min(Math.max(4, r.left), window.innerWidth - tip.offsetWidth - 4) + 'px';
  }

  // ---------- Fill the side panel ----------
  function show(el) {
    var name = document.getElementById('bm-name');
    var sub = document.getElementById('bm-sub');
    panel.classList.toggle('is-pinned', !!pinned);
    if (!el) {
      name.textContent = 'Hover over anything on the page';
      sub.innerHTML = 'Click an element to pin it. Press <kbd>Esc</kbd> to unpin.';
      document.getElementById('bm-note').textContent = '';
      ['m', 'b', 'p'].forEach(function (layer) {
        ['t', 'r', 'b', 'l'].forEach(function (side) {
          document.getElementById(layer + '-' + side).textContent = '–';
        });
      });
      ['bm-display', 'bm-position', 'bm-sizing', 'bm-size'].forEach(function (id) {
        document.getElementById(id).textContent = '–';
      });
      document.getElementById('bm-content').textContent = '– × –';
      return;
    }
    var x = measure(el), cs = x.cs;
    name.textContent = label(el);
    sub.textContent = pinned ? 'Press Esc or Unpin to go back to hovering.' : 'Click to pin this element.';

    ['t', 'r', 'b', 'l'].forEach(function (side, i) {
      setNum('m-' + side, x.m[i]);
      setNum('b-' + side, x.b[i]);
      setNum('p-' + side, x.p[i]);
    });
    document.getElementById('bm-content').textContent = round(x.contentW) + ' × ' + round(x.contentH);
    document.getElementById('bm-display').textContent = cs.display;
    document.getElementById('bm-position').textContent = cs.position;
    document.getElementById('bm-sizing').textContent = cs.boxSizing;
    document.getElementById('bm-size').textContent = round(x.rect.width) + ' × ' + round(x.rect.height) + ' (border box)';
    document.getElementById('bm-note').textContent = describe(cs.display);
  }

  function current() {
    return pinned || hovered;
  }

  function refresh() {
    var el = current();
    draw(el);
    show(el);
  }

  // ---------- Events ----------
  document.addEventListener('mouseover', function (e) {
    if (!hoverToggle.checked || pinned) return;
    hovered = isInspectable(e.target) ? e.target : null;
    refresh();
  });

  document.documentElement.addEventListener('mouseleave', function () {
    if (pinned) return;
    hovered = null;
    refresh();
  });

  document.addEventListener('click', function (e) {
    if (!hoverToggle.checked || !isInspectable(e.target)) return;
    if (e.target.closest('a, button')) e.preventDefault();
    pinned = e.target;
    refresh();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && pinned) {
      pinned = hovered = null;
      refresh();
    }
  });

  document.getElementById('bm-unpin').addEventListener('click', function () {
    pinned = hovered = null;
    refresh();
  });

  document.getElementById('bm-parent').addEventListener('click', function () {
    var el = current();
    if (el && el.parentElement && isInspectable(el.parentElement)) {
      pinned = el.parentElement;
      refresh();
    }
  });

  hoverToggle.addEventListener('change', function () {
    if (!hoverToggle.checked) { hovered = null; pinned = null; }
    refresh();
  });

  // Outline every box, coloured by display type
  allToggle.addEventListener('change', function () {
    if (allToggle.checked) {
      [page].concat(Array.prototype.slice.call(page.querySelectorAll('*'))).forEach(function (el) {
        var d = getComputedStyle(el).display;
        el.setAttribute('data-bm-display', d === 'block' || d === 'list-item' ? 'block' : d === 'inline' ? 'inline' : 'other');
      });
    }
    document.documentElement.classList.toggle('bm-show-all', allToggle.checked);
  });

  // Don't let the sample form submit
  document.getElementById('sample-form').addEventListener('submit', function (e) { e.preventDefault(); });

  // Keep the overlay lined up while scrolling or resizing
  window.addEventListener('scroll', function () { draw(current()); }, true);
  window.addEventListener('resize', function () { fitToolbar(); refresh(); });

  // ---------- Playground ----------
  var box = document.getElementById('pg-box');
  ['margin', 'border', 'padding'].forEach(function (prop) {
    var input = document.getElementById('pg-' + prop);
    var out = document.getElementById('pg-' + prop + '-out');
    input.addEventListener('input', function () {
      out.textContent = input.value + 'px';
      if (prop === 'border') box.style.borderWidth = input.value + 'px';
      else box.style[prop] = input.value + 'px';
      pinned = box;
      refresh();
    });
  });
  document.getElementById('pg-sizing').addEventListener('change', function (e) {
    box.style.boxSizing = e.target.checked ? 'border-box' : 'content-box';
    pinned = box;
    refresh();
  });
})();
