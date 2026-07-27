import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sharp = (await import('../node_modules/sharp/lib/index.js')).default;

const OUTDIR = path.join(__dirname, '..', 'public', 'blog');

const IMAGES = [
  { slug: 'spring-plumbing-checklist-riverside-county', id: '37881101' },
  { slug: 'bathroom-remodel-plumbing-considerations', id: '7031566' },
  { slug: 'kitchen-renovation-plumbing-upgrades', id: '15124970' },
  { slug: 'seven-signs-call-professional-plumber', id: '32588548' },
  { slug: 'red-flags-hiring-plumbing-company', id: '13312223' },
  { slug: 'professional-plumbing-inspection-what-to-expect', id: '8293678' },
  { slug: 'slab-leaks-causes-detection-repair', id: '11658940' },
  { slug: 'water-pressure-regulators-why-needed', id: '372796' },
  { slug: 'truth-about-flushable-wipes', id: '3945257' },
  { slug: 'water-conservation-riverside-county', id: '4870798' },
  { slug: 'understanding-main-sewer-cleanout', id: '3964564' },
  { slug: 'water-quality-affects-fixtures-appliances', id: '30560253' },
  { slug: 'emergency-plumbing-preparedness-guide', id: '8488035' },
];

function downloadToBuffer(url) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadToBuffer(res.headers.location).then(resolve).catch(reject);
      }
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    });
    req.on('error', reject);
  });
}

for (const { slug, id } of IMAGES) {
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;
  const outFile = path.join(OUTDIR, `${slug}.webp`);
  try {
    console.log(`Downloading ${slug} (Pexels ${id})...`);
    const buf = await downloadToBuffer(url);
    const info = await sharp(buf)
      .resize(1200, 630, { fit: 'cover' })
      .webp({ quality: 82 })
      .toFile(outFile);
    const kb = Math.round(info.size / 1024);
    console.log(`  -> ${kb}KB ${kb > 300 ? 'OVER LIMIT' : 'OK'}`);
  } catch (e) {
    console.error(`  -> ERROR: ${e.message}`);
  }
}
console.log('Done.');
