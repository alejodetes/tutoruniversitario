# Tablas de Frecuencia — Probabilidad y Estadística

**Versión:** 1.0.1
**Materia:** Probabilidad y Estadística — 4to semestre
**Estado:** en desarrollo activo (el profesor aún no publicó el temario formal)

Proyecto personal con dos herramientas para la clase: una app web para generar
tablas de frecuencia con sus gráficas, y una plantilla LaTeX para redactar los
informes de entrega. También funciona como **plantilla de formato**: la
estructura de carpetas y el esquema de versionado de acá se repiten en los
próximos proyectos de la carpeta `03_Proyectos_Personales`.

## Estructura

```
TablasFrecuencia_ProbEstadistica/
├── README.md              este archivo
├── CHANGELOG.md            historial de versiones
├── VERSION                 versión actual en texto plano
├── app/
│   └── tablas_frecuencia.html   app de tablas de frecuencia (abrir con doble clic)
├── latex/
│   ├── plantilla_informe.tex    plantilla para informes de entrega
│   ├── README.md                cómo compilarla
│   └── output/
│       └── plantilla_informe.pdf   ejemplo ya compilado
└── docs/
    └── (temario, consignas y materiales de la clase cuando el profesor los publique)
```

## App de tablas de frecuencia (`app/`)

Abrí `tablas_frecuencia.html` con doble clic (necesita internet solo para
cargar la librería de gráficas). Permite:

- Cargar datos pegando texto o subiendo un CSV/TXT.
- Calcular frecuencia absoluta (fi), relativa (hi), relativa % y acumuladas
  (Fi, Hi%), con moda y totales.
- Graficar en barras, histograma o pastel.
- Exportar la tabla a CSV y la gráfica a PNG — listos para pegar en el
  informe LaTeX.

Por ahora cubre datos cualitativos y discretos. Los intervalos de clase para
datos continuos quedan para una próxima versión.

## Plantilla de informes (`latex/`)

`plantilla_informe.tex` trae portada, índice, secciones estándar
(introducción, objetivos, marco teórico, desarrollo, tabla y gráfica de
ejemplo, conclusiones, referencias) y estilo con color de acento. Ver
`latex/README.md` para instrucciones de compilación.

## Convención de formato (para futuros proyectos)

Esta carpeta es el molde: cada proyecto nuevo en `03_Proyectos_Personales`
que necesite este nivel de organización copia esta misma estructura
(`README.md` + `CHANGELOG.md` + `VERSION` + subcarpetas por tipo de
entregable) y sigue versionado semántico simple (`MAYOR.MENOR.PARCHE`).

## Historial

Ver [`CHANGELOG.md`](./CHANGELOG.md).
