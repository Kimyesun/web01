const fs = require('fs');
let file = 'js/brando_rastorant.js';
let txt = fs.readFileSync(file, 'utf8');
txt = txt.replace(/for\s*\(\s*var\s+i=0;\s*i<=n-1;\s*i\+\+\)\s*\{\s*\/\/[^\n]*\n\s*secTop\[i\]\s*=\s*section[^}]+\}/g, '');
fs.writeFileSync(file, txt, 'utf8');
console.log('Fixed array init');
