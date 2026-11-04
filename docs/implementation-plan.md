# Plan de trabajo — HackLab BrickHeads

## Acuerdos

- Conservar la identidad visual actual y separar la revisión editorial.
- `resources/` contiene originales y referencias internas. No versionar ni servir esta carpeta.
- Excluir de las descargas públicas `c_1.png` a `c_5.png`, el Illustrator, la fuente y el video.
- Seleccionar explícitamente los logos públicos; no copiar ni empaquetar `resources/` completo.
- Mantener el blog oculto hasta definir contenido y estrategia.
- No hacer push sin autorización.

## 1. Recursos internos

- [x] Inventariar archivos y dimensiones de los PNG.
- [x] Confirmar que los tres PNG públicos coinciden con sus originales.
- [x] Excluir `resources/` de Git.
- [x] Definir las variantes de logo que se ofrecerán públicamente: 12 PNG completos, excluyendo recursos internos.

Criterio: ningún recurso interno queda versionado, servido o incluido en el ZIP. Gitignore no sustituye una copia de seguridad privada de los originales.

## 2. Calidad de imágenes

- [ ] Comparar originales con imágenes servidas en móvil y desktop, con distintas densidades de pantalla.
- [x] Revisar tamaños responsive, proporciones y conversión a WebP.
- [x] Corregir la entrega: PNG sin pérdida, tamaños responsive válidos y densidades 1x/2x.

Criterio: logos nítidos, sin deformación ni ampliación de derivados insuficientes; comprobar tamaño de transferencia y build.

## 3. Descargas

- [x] Catalogar las variantes públicas y describir composición, colores, fondo y uso.
- [x] Preparar descargas de originales y un ZIP con una lista explícita de archivos permitidos.
- [ ] Verificar enlaces, contenido del ZIP y previews en móvil y desktop.

Criterio: cada descarga funciona y el ZIP contiene exclusivamente los recursos públicos seleccionados.

## 4. Pantalla ambiental `/wall`

- [ ] Revisar el video local como referencia privada.
- [ ] Proponer dirección visual y movimiento para revisión del usuario.
- [ ] Implementar una animación web con los recursos públicos aprobados.
- [ ] Comprobar pantalla completa, adaptación a pantallas y movimiento reducido.

Criterio: pantalla ambiental continua y fluida; el MP4 original no se publica.

## Pendientes posteriores

- Fotografías definitivas de galería.
- Revisión editorial con el usuario.
- Decisión sobre blog.
- Nueva auditoría de rendimiento y accesibilidad tras los cambios.

## Validación inicial

El 4 de noviembre de 2026, `pnpm build` terminó correctamente. Las puntuaciones Lighthouse del traspaso son históricas y deben medirse de nuevo. Se observaron advertencias de fuentes duplicadas, Browserslist y sourcemaps de Tailwind.

## Primera implementación

Catálogo de 12 variantes implementado. Integridad del ZIP y coincidencia de originales verificadas. Build correcto y revisión visual inicial del catálogo realizada. Queda pendiente completar QA visual a distintas densidades, descargas mediante interacción en móvil y desktop y auditoría Lighthouse. `/wall` sigue pendiente de propuesta visual.
