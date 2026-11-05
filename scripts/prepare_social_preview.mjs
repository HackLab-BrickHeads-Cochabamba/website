/** Compose the sharing card from the existing public brand artwork. */
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const require = createRequire(import.meta.url);
const imageRequire = createRequire(require.resolve('@nuxt/image'));
const ipxRequire = createRequire(imageRequire.resolve('ipx'));
const sharp = ipxRequire('sharp');
const root = fileURLToPath(new URL('../', import.meta.url));
const logo = await sharp(path.join(root, 'public/images/large_white.png'))
  .resize({ width: 1000, height: 260, fit: 'inside' }).toBuffer();
const { height } = await sharp(logo).metadata();
const background = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
<rect width="1200" height="630" fill="#161616"/>
<g fill="none" stroke="#189C3B" stroke-width="2" opacity=".55">
<path d="M64 144h70l28-28h106"/><circle cx="274" cy="116" r="5"/>
<path d="M932 474h70l28-28h106"/><circle cx="926" cy="474" r="5"/>
</g>
<g font-family="monospace" font-size="18" letter-spacing="2">
<text x="64" y="68" fill="#189C3B">// COCHABAMBA, BOLIVIA</text>
<text x="64" y="514" fill="#eeeeee" letter-spacing="0">Conocimiento abierto · Experimentación · Comunidad</text>
<path d="M64 550h1072" stroke="#444"/>
<text x="64" y="590" fill="#bcbcbc" font-size="16" letter-spacing="0">hacklab.brickheads.space</text>
<text x="1064" y="590" fill="#189C3B">&gt;_</text>
</g></svg>`);
await sharp(background).composite([{input: logo, left: 100, top: Math.round(300-height/2)}])
  .png().toFile(path.join(root, 'public/images/social-preview.png'));
