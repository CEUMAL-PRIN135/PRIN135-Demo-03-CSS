/* ===== 02 · Specificity calculator =====
   You don't need to edit this file. It counts the parts of a
   selector the same way the browser does (for common selectors). */

(function () {
  var input = document.getElementById('calc-input');

  function specificity(sel) {
    var a = 0, b = 0, c = 0;
    var s = ' ' + sel + ' ';

    // :where() always counts as zero
    s = s.replace(/:where\([^)]*\)/g, ' ');
    // :not(), :is(), :has() count as their most specific argument
    s = s.replace(/:(not|is|has)\(([^)]*)\)/g, function (m, fn, inner) {
      var best = inner.split(',').map(specificity).sort(compare).pop() || [0, 0, 0];
      a += best[0]; b += best[1]; c += best[2];
      return ' ';
    });
    s = s.replace(/\[[^\]]*\]/g, function () { b++; return ' '; });                         // [attr]
    s = s.replace(/#[\w-]+/g, function () { a++; return ' '; });                             // #id
    s = s.replace(/\.[\w-]+/g, function () { b++; return ' '; });                            // .class
    s = s.replace(/::[\w-]+(\([^)]*\))?/g, function () { c++; return ' '; });                // ::pseudo-element
    s = s.replace(/:(before|after|first-line|first-letter)\b/g, function () { c++; return ' '; });
    s = s.replace(/:[\w-]+(\([^)]*\))?/g, function () { b++; return ' '; });                 // :pseudo-class
    (s.replace(/[>+~*]/g, ' ').match(/[a-zA-Z][\w-]*/g) || []).forEach(function () { c++; }); // elements
    return [a, b, c];
  }

  function compare(x, y) {
    return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
  }

  function update() {
    // For a comma list, show the most specific selector in it
    var best = input.value.split(',').map(specificity).sort(compare).pop() || [0, 0, 0];
    document.getElementById('calc-a').textContent = best[0];
    document.getElementById('calc-b').textContent = best[1];
    document.getElementById('calc-c').textContent = best[2];
  }

  input.addEventListener('input', update);
  document.querySelectorAll('.calc-examples button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      input.value = btn.textContent;
      update();
    });
  });
  update();
})();
