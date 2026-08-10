# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/), versionado
`MAYOR.MENOR.PARCHE`.

## [1.6.1] - 2026-08-10
### Agregado
- Badge "✓ Revisado [fecha]" en el header de Calendario y Correos
  importantes, para saber a simple vista cuándo fue la última vez que
  se chequearon novedades (tareas nuevas, correos importantes) sin
  tener que preguntar.

## [1.6.0] - 2026-08-10
### Cambiado
- Rediseño visual completo del tutor, inspirado en referencias de apps
  tipo fintech (fondo oscuro índigo, tarjetas muy redondeadas, acentos
  cálidos color durazno, iconos en "avatares" circulares con degradé).
  Sigue con selector claro/oscuro, pero ahora oscuro es el tema por
  defecto.
- Se centralizaron los tokens de color y los estilos base (header,
  botón de tema, enlace de vuelta al menú, animaciones) en
  `app/assets/theme.css`, compartido por las cuatro páginas del tutor.
  Cambiar el look del sitio entero es ahora editar un solo archivo, no
  cuatro copias del mismo bloque de CSS.
- Se agregaron animaciones de entrada (tarjetas y filas aparecen con un
  leve slide-up escalonado) y transiciones de hover más expresivas,
  respetando `prefers-reduced-motion`.
- Grilla del menú y layout de `tablas_frecuencia.html` ajustados para
  verse bien tanto en escritorio como en mobile (una columna en
  pantallas chicas, hasta 4 en pantallas grandes).
- La paleta de series (`--series-1`..`--series-8`) usada en las
  gráficas de `tablas_frecuencia.html` **no se tocó**: sigue siendo la
  validada para daltonismo.

## [1.5.0] - 2026-08-10
### Agregado
- Herramienta "Calendario" (`app/calendario.html`): entregas y parciales
  importados del calendario del campus virtual de la UAN, listados en
  orden cronológico, más un arreglo `REUNIONES` para agregar a mano
  reuniones u otras fechas relevantes. Los datos se embeben directamente
  en el HTML (sin fetch a archivos externos, para que funcione abriendo
  el archivo con doble clic) y se actualizan a mano en el chat — no hay
  conexión en vivo a Google Calendar desde el navegador.
- Herramienta "Correos importantes" (`app/correos.html`): lista de
  correos que el usuario marca como importantes durante el chat, sin
  filtro automático. Arranca vacía con un estado vacío explicativo.
- Ambas herramientas sumadas al menú central (`app/inicio.html`).

## [1.4.0] - 2026-08-10
### Agregado
- Menú central del tutor (`app/inicio.html`): punto de entrada de la app,
  con una tarjeta por herramienta disponible y espacio para las que se
  vayan agregando. Renderizado desde un arreglo `HERRAMIENTAS` en JS, para
  que sumar una herramienta nueva sea solo agregar un objeto ahí.
- Enlace "← Menú" en el header de `tablas_frecuencia.html` para volver al
  menú central.

### Cambiado
- El proyecto pasa de ser una sola app de tablas de frecuencia a un
  **tutor con varias herramientas**; `tablas_frecuencia.html` ahora es la
  primera de varias, no la raíz de la app.
- `index.html` redirige al menú (`app/inicio.html`) en vez de ir directo a
  la herramienta de tablas de frecuencia.

## [1.3.0] - 2026-08-10
### Agregado
- Checkbox "eje derecho en %" en barras/histograma: cuando la métrica
  principal es un conteo (fi o Fi), agrega un segundo eje Y a la derecha
  con su porcentaje asociado (hi% o Hi%), alineado a las mismas líneas de
  grilla que el eje izquierdo — el clásico eje doble de un diagrama de
  Pareto. No es una segunda serie independiente: el eje derecho es
  siempre esa misma frecuencia dividida por n, así que la alineación
  entre ambos ejes nunca es arbitraria.

## [1.2.0] - 2026-08-10
### Agregado
- Selector de "Métrica" en las gráficas de barras/histograma: además de la
  frecuencia absoluta (fi) por defecto, se puede habilitar la frecuencia
  relativa % (hi%), la acumulada (Fi) o la acumulada % (Hi%) como el valor
  graficado, con eje y tooltip que se adaptan (formato de porcentaje
  incluido). El pastel sigue mostrando siempre proporciones de fi.

## [1.1.0] - 2026-08-10
### Cambiado
- Rediseño completo de la interfaz: sistema de tokens de color claro/oscuro
  (con selector de tema 🌙/☀️ persistente), tipografía y espaciados
  consistentes, tarjetas y controles con mejor jerarquía visual.
- Gráficas reconstruidas siguiendo una metodología de data-viz validada:
  - Barras/histograma usan un solo tono de acento (la identidad ya la da el
    eje X), con extremos redondeados y grosor limitado — evita el "arcoíris"
    decorativo que no aportaba información.
  - El pastel usa una paleta categórica de 8 tonos en orden fijo, validada
    para daltonismo (protanopía/deuteranopía) y contraste; con más de 8
    categorías, el resto se agrupa en "Otros" en vez de generar colores
    nuevos indistinguibles.
  - Tooltips, leyenda propia y ejes rediseñados para verse bien en ambos
    temas.
- Tarjetas de resumen (n, k, moda) reestilizadas como "stat tiles".

### Corregido
- La tabla y el resumen ahora se construyen con el DOM (`textContent`) en
  vez de `innerHTML`, evitando que datos pegados por el usuario puedan
  interpretarse como HTML.
- Exportación a CSV ahora escapa comillas y separadores en los valores.

## [1.0.2] - 2026-08-10
### Corregido
- Bug crítico: el `<script>` de Chart.js apuntaba a la versión 4.4.4, que no
  existe en cdnjs (devolvía 404 en silencio). Por eso nunca se dibujaban las
  gráficas, aunque la tabla sí se generaba. Se fijó a la versión 4.5.0
  (verificada disponible).

## [1.0.1] - 2026-08-10
### Agregado
- Estructura de carpetas organizada (`app/`, `latex/`, `docs/`).
- Plantilla LaTeX (`latex/plantilla_informe.tex`) para entregas de informes,
  con portada, índice, tabla y gráfica de ejemplo, y referencias.
- README general y README específico de la carpeta `latex/`.
- Compilación de prueba verificada con `pdflatex` (4 páginas, sin errores).

### Cambiado
- Badge de versión de la app actualizado a v1.0.1.

## [1.0.0] - 2026-08-10
### Agregado
- Primera versión de `tablas_frecuencia.html`: carga de datos, cálculo de
  tabla de frecuencias (fi, hi, hi%, Fi, Hi%), gráficas de barras/histograma/
  pastel, exportación a CSV y PNG.
