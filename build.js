// Regenerates index.html from index.template.html + changelog.json.
// Update changelog.json from the app first: node build.js --from ../fragv-desktop/renderer/index.html
const fs = require('fs'); const path = require('path');
const i = process.argv.indexOf('--from');
if (i > 0) {
  const h = fs.readFileSync(process.argv[i + 1], 'utf8');
  const a = h.indexOf('const CHANGELOG = '); const b = h.indexOf('function renderChangelog');
  const CL = eval(h.slice(a + 18, b).trim().replace(/;\s*$/, ''));
  fs.writeFileSync(path.join(__dirname, 'changelog.json'), JSON.stringify(CL.map(([v, t, d, items]) => ({ v, t, d, items })), null, 1));
}
const cl = JSON.parse(fs.readFileSync(path.join(__dirname, 'changelog.json'), 'utf8'));
const tpl = fs.readFileSync(path.join(__dirname, 'index.template.html'), 'utf8');
const out = tpl.replace('__CHANGELOG__', JSON.stringify(cl).replace(/</g, '\\u003c')).replace(/__VERSION__/g, cl[0].v);
fs.writeFileSync(path.join(__dirname, 'index.html'), out);
console.log(`index.html built for v${cl[0].v} (${cl.length} releases)`);
