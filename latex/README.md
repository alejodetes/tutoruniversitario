# Plantilla LaTeX — Informes

## Compilar

**Opción A — Overleaf (más simple):** subí `plantilla_informe.tex` a un
proyecto nuevo en [overleaf.com](https://www.overleaf.com) y compilá con el
botón Recompile. Ahí ya viene el paquete de idioma español instalado, así
que podés descomentar la línea de `babel` (ver nota dentro del archivo) para
tener el índice y las fechas 100% en español.

**Opción B — Local (pdflatex):**
```
pdflatex -output-directory=output plantilla_informe.tex
pdflatex -output-directory=output plantilla_informe.tex   # se corre 2 veces por el índice
```
El PDF queda en `output/plantilla_informe.pdf`. Ya se probó y compila sin
errores (ver `output/plantilla_informe.pdf` como ejemplo).

## Antes de entregar

1. Completar los `\newcommand` del bloque **DATOS DEL INFORME** al inicio del
   archivo (título, nombre, materia, docente, fecha).
2. Reemplazar la tabla y la gráfica de ejemplo por las tuyas: exportá el CSV
   y el PNG desde `app/tablas_frecuencia.html` y pegá los valores /
   `\includegraphics` correspondientes.
3. Completar introducción, objetivos, marco teórico, desarrollo, análisis,
   conclusiones y referencias.
4. Recompilar y revisar que el índice y las referencias cruzadas (tabla,
   figura) queden bien numeradas.

## Notas técnicas

- Sin el paquete de idioma español instalado, la plantilla igual compila:
  los acentos funcionan por `inputenc`+`fontenc`, y el nombre del índice y
  el formato de `\today` ya están forzados a español manualmente.
- Si tu instalación sí tiene `texlive-lang-spanish` (Overleaf, o una
  instalación completa de TeX Live/MiKTeX), podés descomentar la línea de
  `babel` para hyphenation correcta en español.
