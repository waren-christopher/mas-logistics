const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Christopher\\.gemini\\antigravity\\brain\\07d4852d-9c06-41c5-a2fa-b41da5242812';
const destDir = path.join(__dirname, 'public', 'images');

const files = fs.readdirSync(srcDir);

const mappings = [
  { prefix: 'industry_auto', dest: 'industry_auto.png' },
  { prefix: 'industry_fashion', dest: 'industry_fashion.png' },
  { prefix: 'industry_medical', dest: 'industry_medical.png' },
  { prefix: 'industry_energy', dest: 'industry_energy.png' },
  { prefix: 'industry_hightech', dest: 'industry_hightech.png' },
  { prefix: 'industry_fmcg', dest: 'industry_fmcg.png' },
  { prefix: 'industry_retail', dest: 'industry_retail.png' },
  { prefix: 'industry_machinery', dest: 'industry_machinery.png' },
];

for (const file of files) {
  for (const mapping of mappings) {
    if (file.startsWith(mapping.prefix) && file.endsWith('.png')) {
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, mapping.dest));
    }
  }
}
