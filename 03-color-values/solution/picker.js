/* ===== 03 · Colour converter =====
   You don't need to edit this file. It converts the picked
   colour into hex, rgb() and hsl() notation. */

(function () {
  var colorIn = document.getElementById('pick-color');
  var alphaIn = document.getElementById('pick-alpha');

  function toHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var l = (max + min) / 2, d = max - min, h = 0, s = 0;
    if (d) {
      s = d / (1 - Math.abs(2 * l - 1));
      if (max === r) h = ((g - b) / d) % 6;
      else if (max === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h = Math.round(h * 60);
      if (h < 0) h += 360;
    }
    return [h, Math.round(s * 100), Math.round(l * 100)];
  }

  function update() {
    var hex = colorIn.value;
    var a = alphaIn.value / 100;
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    var hsl = toHsl(r, g, b);
    var alpha = a < 1 ? ' / ' + a : '';
    var hexA = a < 1 ? ('0' + Math.round(a * 255).toString(16)).slice(-2) : '';

    document.getElementById('pick-alpha-out').textContent = a;
    document.getElementById('out-hex').textContent = hex + hexA;
    document.getElementById('out-rgb').textContent = 'rgb(' + r + ' ' + g + ' ' + b + alpha + ')';
    document.getElementById('out-hsl').textContent = 'hsl(' + hsl[0] + ' ' + hsl[1] + '% ' + hsl[2] + '%' + alpha + ')';
    document.getElementById('pick-swatch').style.background = 'rgb(' + r + ' ' + g + ' ' + b + ' / ' + a + ')';
  }

  colorIn.addEventListener('input', update);
  alphaIn.addEventListener('input', update);
  update();
})();
