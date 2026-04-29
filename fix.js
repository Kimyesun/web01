const fs = require('fs');
const file = 'd:/30703 ±è¿¹¼±/web01/js/brando_rastorant.js';
let js = fs.readFileSync(file, 'utf8');

// Replace sec02Top..sec14Top variables declarations with nothing
js = js.replace(/var\s+sec\d+Top\s*=\s*\$\('#section\d+'\)\.offset\(\)\.top[^;]+;/g, '');

// Replace "win.scrollTop() > sec0XTop" with dynamic offset().top
js = js.replace(/win\.scrollTop\(\)\s*>\s*sec(\d+)Top/g, 'win.scrollTop() > \.offset().top - (window.innerHeight * 0.6)');

// In scrollEventArrayFn:
// Replace the initialization loop that caches secTop[i] manually
// Also replace the check inside the scroll handler to compute it dynamically
js = js.replace(
    /for\(var i=0;i<=n-1;i\+\+\)\{\s*\n\s*secTop\[i\].*?\n\s*\}/g,
    ''
);

js = js.replace(
    /if\(\s*win\.scrollTop\(\)\s*>\s*secTop\[i\]\s*\)/g,
    'if( win.scrollTop() > section.eq(i).offset().top - (window.innerHeight * 0.6) )'
);

fs.writeFileSync(file, js, 'utf8');
console.log('JS FIX APPLIED');
