# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/), versionado
`MAYOR.MENOR.PARCHE`.

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
