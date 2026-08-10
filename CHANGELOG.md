# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/), versionado
`MAYOR.MENOR.PARCHE`.

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
