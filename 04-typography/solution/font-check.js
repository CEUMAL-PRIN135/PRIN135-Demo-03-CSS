/* ===== 04 · Font status badges =====
   You don't need to edit this file. After the page's fonts finish
   loading, each badge says whether its font really loaded or the
   browser fell back to another font. */

(function () {
  function isLoaded(name) {
    var found = false;
    document.fonts.forEach(function (face) {
      if (face.family.replace(/["']/g, '') === name && face.status === 'loaded') found = true;
    });
    return found;
  }

  document.fonts.ready.then(function () {
    document.querySelectorAll('.font-status').forEach(function (badge) {
      var name = badge.getAttribute('data-font');
      var ok = isLoaded(name);
      badge.textContent = ok ? '✓ ' + name + ' loaded' : '✗ ' + name + ' not loaded (fallback)';
      badge.classList.add(ok ? 'is-ok' : 'is-missing');
    });
  });
})();
