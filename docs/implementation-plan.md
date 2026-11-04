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

- [x] Revisar el video local como referencia privada.
- [x] Proponer dirección visual y movimiento para revisión del usuario.
- [x] Implementar una animación web con los recursos públicos aprobados.
- [x] Comprobar la entrada a pantalla completa, la adaptación a móvil y escritorio y la pausa por teclado.
- [ ] Confirmar pantalla completa sostenida en el proyector y el arranque en pausa con movimiento reducido activado en el sistema.

Criterio: pantalla ambiental continua y fluida; el MP4 original no se publica.

## Pendientes posteriores

- Fotografías definitivas de galería.
- Revisión editorial con el usuario.
- Decisión sobre blog.
- Nueva auditoría de rendimiento y accesibilidad tras los cambios.

## Validación inicial

El 4 de noviembre de 2026, `pnpm build` terminó correctamente. Las puntuaciones Lighthouse del traspaso son históricas y deben medirse de nuevo. Se observaron advertencias de fuentes duplicadas, Browserslist y sourcemaps de Tailwind.

## Primera implementación

Catálogo de 12 variantes implementado. Integridad del ZIP y coincidencia de originales verificadas. Build correcto y revisión visual inicial del catálogo realizada. Queda pendiente completar QA visual a distintas densidades, descargas mediante interacción en móvil y desktop y auditoría Lighthouse.

## Implementación de la pantalla ambiental

### Exploración posterior solicitada por el usuario

La primera propuesta resultó demasiado estática y alejada de la estética del sitio. Se conserva `/wall` como referencia hasta elegir una versión nueva. El objetivo es una pantalla genérica para ferias, talleres y proyecciones, dinámica, personal y artesanal. Conservar hora e información y frases; respetar negro de marca, verde, blanco, Oxanium y terminal.

- [x] Desarrollar con tres subagentes Astra las variantes A (logo), B (terminal) y C (mezcla) en `/wall-a`, `/wall-b` y `/wall-c`.
- [x] Integrar estructura y controles comunes para comparar las propuestas.
- [x] Añadir panel oculto de redes con QR principal a `https://hacklab.brickheads.space/socials` y QR individuales.
- [x] Pausar animación y frases mientras el panel esté abierto; abrir/cerrar con R y cerrar con Esc.
- [x] Elegir con el usuario la dirección final: propuesta C.
- [x] Reemplazar `/wall` por la propuesta C y retirar las tres rutas de comparación y las animaciones descartadas.
- [ ] Comprobar escaneo físico de los QR en el monitor o proyector de destino.

### Ajustes de navegación y contacto

- [x] Adoptar rutas en inglés: `/downloads`, con redirección 301 desde `/descargas`.
- [x] Actualizar enlaces internos y compartir los enlaces de redes entre Contacto y `/socials`, incluyendo WhatsApp.

**Circuito abierto** presenta el logo público de los cinco BrickHeads en una placa isométrica dibujada en SVG. Cada 18 segundos cambia la nota del taller y se ilumina otro grupo de pistas. El pie permite pausar la secuencia y entrar en pantalla completa. La animación empieza pausada con movimiento reducido y se suspende al ocultar la pestaña. Se verificó `pnpm build` y la ausencia de los recursos privados en la salida pública.

Revisión en el navegador a 1440 × 900 y 390 × 844: los controles quedaron visibles en móvil y ambas vistas ocuparon el ancho disponible sin desbordamiento horizontal. Se verificó que Enter pausa y reanuda la animación y que la consola quedó libre de advertencias y errores. Al activar pantalla completa el botón cambió a «Salir»; el navegador integrado regresó a ventana en la siguiente interacción de prueba. La preferencia de movimiento reducido se revisó en el código. Queda pendiente comprobarla desde el sistema y observar el muro en sesión prolongada en el proyector.


### Validación de las tres propuestas

Build de producción correcto. Las rutas `/wall-a`, `/wall-b`, `/wall-c`, `/downloads` y las rutas existentes responden 200. `/descargas` responde 301 hacia `/downloads`. Se verificó el enlace de WhatsApp en el HTML de Contacto y las seis rutas de SVG QR. Los seis SVG coinciden con sus destinos registrados y mantienen cuatro módulos de margen blanco.

Se revisaron las tres propuestas en el navegador y B/C en móvil. Se ajustó la altura común tras detectar scroll vertical en A: se confirmó en producción que A ocupa 900 px en desktop de 1440×900 y 844 px en móvil de 390×844, con controles visibles. R abre el diálogo, Esc lo cierra, la selección cambia el destino y la escena se pausa al abrirlo. Quedan el escaneo físico de QR, el movimiento reducido activado desde el sistema y la prueba prolongada de proyector. Los cambios siguen locales, sin commit ni push.

## Selección final

El usuario eligió C. `/wall` usa `WallScreen` y `WallAnimation`; se retiraron la placa original, A, B y las rutas temporales de las tres propuestas. Se conserva hora, frases, pausa, pantalla completa y panel de redes con QR.
