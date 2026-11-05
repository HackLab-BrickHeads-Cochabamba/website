/** Export only curated gallery photos. Originals and metadata remain private. */
import { createRequire } from 'node:module';
import { readFile, writeFile, mkdir, unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const require = createRequire(import.meta.url);
const imageRequire = createRequire(require.resolve('@nuxt/image'));
const ipxRequire = createRequire(imageRequire.resolve('ipx'));
const sharp = ipxRequire('sharp');
const source = path.join(root, 'resources/gallery');
const output = path.join(root, 'public/images/gallery');
// Explicit allowlist. Dates describe the available evidence, never inferred from Facebook IDs.
const selected = [
  ['42766900_2168672023166933_5850043368968552448_n.jpg','cansat-2018','Primer lugar en CanSat Bolivia 2018','El equipo del HackLab ganó CanSat Bolivia 2018 con un picosatélite construido utilizando muchos componentes reciclados.','Integrantes del HackLab celebran levantando los brazos tras la competencia CanSat.','2018-09-29','29 sep 2018','50% 45%'],
  ['IMG20230106091031.jpg','navidad-en-comunidad','Una Navidad en comunidad','En camino a una comunidad rural para entregar regalos a niñas y niños, como parte de la actividad que realizamos cada Navidad.','Integrantes de la comunidad viajan en un vehículo con regalos para una visita a una comunidad rural.','2023-01-06','6 ene 2023','50% 50%'],
  ['photo_2023-04-23_11-41-49.jpg','flisol-2023','FLISoL 2023','El HackLab en el Festival Latinoamericano de Instalación de Software Libre de 2023.','Foto de grupo de participantes de FLISoL frente a una pantalla de proyección.','2023-04','2023','50% 45%'],
  ['IMG_20230714_152254.jpg','taller-ia-vacaciones','Vacaciones para explorar la IA','Taller de inteligencia artificial para niñas y niños durante las vacaciones.','Participantes de un taller de inteligencia artificial trabajan frente a varias computadoras.','2023-07-14','14 jul 2023','45% 50%'],
  ['IMG_6364.JPG','conversatorio-ciberseguridad','Conversaciones sobre ciberseguridad','Un conversatorio para compartir preguntas, experiencias y conocimientos sobre ciberseguridad.','Participantes conversan sentados en círculo dentro del espacio del HackLab.','2023-12-02','2 dic 2023','50% 50%'],
  ['IMG_6616.JPG','hackmeeting-2023','Hackmeeting Bolivia 2023','Encuentro de la comunidad en el Hackmeeting 2023.','Foto de grupo frente al edificio del mARTadero, bajo un cartel de Hackmeeting Bolivia.','2023-12-02','2 dic 2023','50% 65%'],
  ['IMG_8759.JPG','feria-comunidades-2025','El HackLab sale al encuentro','Compartiendo proyectos y conversando con visitantes durante una feria de comunidades.','Integrantes del HackLab conversan con visitantes junto a un banner y equipos en una feria.','2025-04-05','5 abr 2025','50% 45%'],
  ['IMG-20250419-WA0018.jpg','cine-hacklab','Cine HackLab: mirar y conversar','Proyectamos películas para conversar sobre tecnología, compartir preguntas y abrir nuevas conversaciones en comunidad.','Asistentes observan una película proyectada durante una sesión de Cine HackLab.','2025-04-19','Abril 2025','45% 40%'],
  ['705237494_18587029225019839_6294648513398939585_n.jpg','crt-noche-museos-2026','Pantallas que vuelven a contar historias','Presentación de un proyecto colectivo con pantallas CRT durante la Noche de Museos 2026.','Un integrante del HackLab presenta un proyecto junto a varias pantallas CRT apiladas.','2026','2026','45% 40%'],
  ['503808296_9914878101939732_4360502145857457405_n.jpg','reunion-hacklab','Una reunión en el HackLab','Una reunión habitual de la comunidad: compartir ideas, aprender y trabajar en nuestros proyectos.','Integrantes del HackLab trabajan y conversan alrededor de una mesa con computadoras.',null,null,'50% 45%'],
  ['505747119_9972093989551476_5552621646512274897_n.jpg','tecnologia-para-todas','Tecnología para todas','Capacitación a mujeres en el uso de tecnología.','Participantes de una capacitación utilizan computadoras portátiles en una sala.',null,null,'50% 45%'],
  ['509281597_10021344454626429_2599634601462828827_n.jpg','aprender-construir-juntos','Aprender y construir juntos','Una reunión habitual del HackLab, compartiendo conocimientos y trabajando en comunidad.','Integrantes del HackLab comparten una mesa con computadoras y herramientas.',null,null,'50% 50%'],
];
// Validate every original before writing public files.
for (const [file] of selected) await readFile(path.join(source, file));
let previous = [];
try { previous = JSON.parse(await readFile(path.join(root, 'src/data/gallery.json'), 'utf8')); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
await mkdir(output, { recursive: true });
const records = [];
for (const [file,id,title,description,alt,date,dateLabel,position] of selected) {
  const input = path.join(source, file);
  const meta = await sharp(input).metadata();
  const swapped = [5,6,7,8].includes(meta.orientation);
  const width = swapped ? meta.height : meta.width;
  const height = swapped ? meta.width : meta.height;
  const side = Math.min(width, height);
  const [x,y] = position.split(' ').map(value => parseFloat(value) / 100);
  const crop = { left:Math.round((width-side)*x), top:Math.round((height-side)*y), width:side, height:side };
  // Crop before resizing: a wide thumbnail otherwise has too few vertical pixels
  // when object-fit:cover expands it to fill a square on high-density screens.
  const sizes = [...new Set([640,960].map(size => Math.min(size, side)))];
  for (const size of sizes) {
    await sharp(input).rotate().extract(crop).resize(size,size)
      .webp({quality:93,effort:6}).toFile(path.join(output,`${id}-${size}.webp`));
  }
  const result = await sharp(input).rotate().resize({width:1920,height:1920,fit:'inside',withoutEnlargement:true}).webp({quality:90,effort:5}).toFile(path.join(output,`${id}-full.webp`));
  records.push({id,title,description,alt,date,dateLabel,position,thumbnail:`/images/gallery/${id}-${sizes[0]}.webp`,thumbnailWidth:sizes[0],srcset:sizes.map(size => `/images/gallery/${id}-${size}.webp ${size}w`).join(', '),image:`/images/gallery/${id}-full.webp`,width:result.width,height:result.height});
}
records.sort((a, b) => !a.date ? (b.date ? -1 : 0) : !b.date ? 1 : a.date.localeCompare(b.date));
const paths = record => [record.thumbnail, record.image, ...record.srcset.split(', ').map(candidate => candidate.split(' ')[0])];
const keep = new Set(records.flatMap(paths));
// Remove only obsolete files referenced by our previous generated manifest.
for (const file of new Set(previous.flatMap(paths))) {
  if (keep.has(file) || !/^\/images\/gallery\/[a-z0-9-]+\.webp$/.test(file)) continue;
  try { await unlink(path.join(root, 'public', file)); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
}
await writeFile(path.join(root,'src/data/gallery.json'),JSON.stringify(records,null,2)+'\n');
console.log(`Prepared ${records.length} gallery photos with sharp square thumbnails. Originals unchanged; no EXIF/GPS metadata exported.`);
