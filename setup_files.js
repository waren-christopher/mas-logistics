const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Christopher\\.gemini\\antigravity\\brain\\07d4852d-9c06-41c5-a2fa-b41da5242812';
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);

const mappings = [
  { prefix: 'hero_bg', dest: 'hero.png' },
  { prefix: 'sea_freight', dest: 'sea.png' },
  { prefix: 'sky_freight', dest: 'sky.png' },
  { prefix: 'land_freight', dest: 'land.png' },
  { prefix: 'about_us', dest: 'about.png' },
];

for (const file of files) {
  for (const mapping of mappings) {
    if (file.startsWith(mapping.prefix) && file.endsWith('.png')) {
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, mapping.dest));
    }
  }
}

if (fs.existsSync('postcss.config.mjs')) fs.unlinkSync('postcss.config.mjs');
if (fs.existsSync('tailwind.config.ts')) fs.unlinkSync('tailwind.config.ts');
