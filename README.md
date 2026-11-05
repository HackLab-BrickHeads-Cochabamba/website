# HackLab BrickHeads Website

Sitio web oficial del HackLab BrickHeads - espacio hacker de conocimiento abierto en Cochabamba, Bolivia.

## Tech Stack

- **Framework:** Nuxt 4
- **UI:** Vue 3 + Tailwind CSS
- **Icons:** Lucide Vue
- **Deployment:** Node.js / Static

## Setup

Usar una versión de Node compatible con `engines` en `package.json` (por ejemplo, Node 24.15 o superior dentro de la rama 24) y pnpm 12.16.1.

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

El build pregenera las cuatro rutas públicas y sus imágenes optimizadas, además de archivos Brotli/gzip. Los cambios de contenido requieren un nuevo build. Manifiesto, Actividades y la galería actual se muestran desde el HTML sin hidratarse; si se añade interacción a esas secciones, habrá que habilitar su hidratación. Contacto se hidrata al entrar en pantalla.

## Preview

```bash
pnpm preview
```

## Pantalla ambiental

Abrí `/wall` en el monitor o proyector del taller. El muro anima los personajes y el nombre del HackLab, con detalles de terminal, frases y hora de Cochabamba. La propuesta C fue elegida como versión final.

Usá **Pausa** para detener la escena y las frases, y **Pantalla completa** en navegadores compatibles. El muro empieza en pausa si el dispositivo prefiere movimiento reducido.

Abrí el panel de redes y QR con el botón o la tecla `R`; cerralo con `R` o `Esc`. Mientras esté abierto la escena queda en pausa. El panel permite desactivar el atajo R; la preferencia se conserva en el navegador y el botón sigue disponible. El QR principal apunta a `https://hacklab.brickheads.space/socials`; los otros usan los mismos enlaces de Contacto y Redes. Los SVG de QR están generados localmente en `public/images/qr/`; sus destinos están registrados en `src/data/wall-qr.json`. Si cambia un enlace, regenerar su QR antes de publicar.

## Direcciones

Las rutas usan nombres en inglés y los textos siguen en español: `/`, `/socials`, `/downloads` y `/wall`. La dirección anterior `/descargas` redirige permanentemente (301) a `/downloads`.

## Errores y revisión del sitio

`src/error.vue` contiene la plantilla de errores con mensajes para páginas inexistentes, indisponibilidad temporal y fallos genéricos. Conserva el estado HTTP del error y evita indexar estas vistas. Para comprobar un 404, abrir una ruta inexistente y usar **Volver al inicio**.

Los informes y las mediciones de auditoría se conservan solo en `.perf-reports/`, ignorado por Git. El [plan de trabajo](docs/implementation-plan.md) recoge las prioridades pendientes.

## Contacto

- Email: hacklab.brickheads@gmail.com
- Ubicación: Proyecto mARTadero, Cochabamba
- Horarios: Sábados 15:00 - 18:00 | Miércoles (virtual) 21:00 - 22:00

## Recursos de marca

Los originales internos se guardan en `resources/` (ignorado por Git). Mantener una copia de seguridad privada: no se recuperan al clonar el repositorio.

Para actualizar los logos públicos y el ZIP, con los originales locales disponibles:

```bash
python3 scripts/prepare_brand_assets.py
```

El script publica únicamente los 12 PNG de su lista explícita, conserva los originales sin recomprimir y actualiza `src/data/brand-assets.json`. No incluye personajes individuales, Illustrator, fuente ni video. Revisar la lista antes de añadir variantes. El build normal usa los archivos públicos ya exportados y no requiere `resources/` ni Python.

Las previews usan PNG redimensionado sin pérdida mediante Nuxt Image y resoluciones 1x/2x. Las descargas apuntan directamente a los PNG originales.

## Flujo de trabajo Git

- `main`: versión estable y rama predeterminada.
- `dev`: desarrollo, correcciones y nuevas funcionalidades.

Trabajar y subir cambios a `dev`. Cuando una versión esté validada, integrarla en `main` mediante un pull request de `dev` a `main`.

```bash
git switch dev
git add <archivos>
git commit -m "Descripción del cambio"
git push origin dev
```

`origin` es el repositorio personal; `upstream` apunta al repositorio de la organización. Este flujo no modifica `upstream`.
