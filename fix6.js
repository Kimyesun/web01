const fs = require('fs');
let file = 'js/brando_rastorant.js';
let txt = fs.readFileSync(file, 'utf8');
txt = txt.replace(/var\s+sec\d+Top[^;]+;/g, '');
txt = txt.replace(/win\.scrollTop\(\)\s*>\s*sec(\d+)Top/g, "win.scrollTop() > $$('#section$1').offset().top - (window.innerHeight * 0.6)");
txt = txt.replace(/for\(var i=0;i<=n-1;i\+\+\)\{\s*\n\s*secTop\[i\].*?\n\s*\}/g, '');
txt = txt.replace(/win\.scrollTop\(\)\s*>\s*secTop\[i\]/g, "win.scrollTop() > section.eq(i).offset().top - (window.innerHeight * 0.6)");
fs.writeFileSync(file, txt, 'utf8');
console.log('Fixed JS dynamically!');
