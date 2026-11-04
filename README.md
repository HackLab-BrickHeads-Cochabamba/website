# HackLab BrickHeads Website

Sitio web oficial del HackLab BrickHeads - espacio hacker de conocimiento abierto en Cochabamba, Bolivia.

## Tech Stack

- **Framework:** Nuxt 4
- **UI:** Vue 3 + Tailwind CSS
- **Icons:** Lucide Vue
- **Deployment:** Node.js / Static

## Setup

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Preview

```bash
pnpm preview
```

## Pantalla ambiental

Abrí `/wall` en el monitor o proyector del taller. El muro anima los personajes y el nombre del HackLab, con detalles de terminal, frases y hora de Cochabamba. La propuesta C fue elegida como versión final.

Usá **Pausa** para detener la escena y las frases, y **Pantalla completa** en navegadores compatibles. El muro empieza en pausa si el dispositivo prefiere movimiento reducido.

Abrí el panel de redes y QR con el botón o la tecla `R`; cerralo con `R` o `Esc`. Mientras esté abierto la escena queda en pausa. El QR principal apunta a `https://hacklab.brickheads.space/socials`; los otros usan los mismos enlaces de Contacto y Redes. Los SVG de QR están generados localmente en `public/images/qr/`; sus destinos están registrados en `src/data/wall-qr.json`. Si cambia un enlace, regenerar su QR antes de publicar.

## Direcciones

Las rutas usan nombres en inglés y los textos siguen en español: `/`, `/socials`, `/downloads` y `/wall`. La dirección anterior `/descargas` redirige permanentemente (301) a `/downloads`.

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
