# Tutor — Probabilidad y Estadística

**Versión:** 1.6.2
**Materia:** Probabilidad y Estadística — 4to semestre
**Estado:** en desarrollo activo (el profesor aún no publicó el temario formal)

Proyecto personal que arrancó como una sola app de tablas de frecuencia y se
está convirtiendo en un **tutor con varias herramientas** para la clase,
todas accesibles desde un menú central (`app/inicio.html`). Cada herramienta
es un HTML independiente que se agrega al menú a medida que se construye.
También incluye una plantilla LaTeX para redactar los informes de entrega, y
funciona como **plantilla de formato**: la estructura de carpetas y el
esquema de versionado de acá se repiten en los próximos proyectos de la
carpeta `03_Proyectos_Personales`.

## Estructura

```
TablasFrecuencia_ProbEstadistica/
├── README.md              este archivo
├── CHANGELOG.md            historial de versiones
├── VERSION                 versión actual en texto plano
├── app/
│   ├── assets/
│   │   └── theme.css            tokens y estilos base compartidos por todo el tutor
│   ├── inicio.html              menú central del tutor (abrir con doble clic)
│   ├── tablas_frecuencia.html   herramienta: tablas de frecuencia
│   ├── calendario.html          herramienta: calendario (entregas, parciales, reuniones)
│   └── correos.html             herramienta: correos importantes
├── latex/
│   ├── plantilla_informe.tex    plantilla para informes de entrega
│   ├── README.md                cómo compilarla
│   └── output/
│       └── plantilla_informe.pdf   ejemplo ya compilado
└── docs/
    └── (temario, consignas y materiales de la clase cuando el profesor los publique)
```

## Menú del tutor (`app/inicio.html`)

Punto de entrada de la app. Muestra una tarjeta por cada herramienta
disponible (o "Próximamente" para las que faltan). Para agregar una
herramienta nueva: crear su HTML en `app/` y sumarla al arreglo
`HERRAMIENTAS` dentro de `inicio.html`.

## Herramienta: tablas de frecuencia (`app/tablas_frecuencia.html`)

Se abre desde el menú, o directo con doble clic (necesita internet solo para
cargar la librería de gráficas). Permite:

- Cargar datos pegando texto o subiendo un CSV/TXT.
- Calcular frecuencia absoluta (fi), relativa (hi), relativa % y acumuladas
  (Fi, Hi%), con moda y totales.
- Graficar en barras, histograma o pastel.
- Exportar la tabla a CSV y la gráfica a PNG — listos para pegar en el
  informe LaTeX.

Por ahora cubre datos cualitativos y discretos. Los intervalos de clase para
datos continuos quedan para una próxima versión.

## Herramienta: calendario (`app/calendario.html`)

Lista cronológica de entregas y parciales, tomados del calendario del campus
virtual de la UAN, más un arreglo `REUNIONES` para sumar a mano otras fechas
relevantes (una reunión propuesta, por ejemplo). Los datos están embebidos
directamente en el HTML — no hay conexión en vivo a Google Calendar desde el
navegador (sería inseguro exponer credenciales OAuth en un archivo local) —
así que se actualizan editando el arreglo cuando se conversa sobre el tema.

## Herramienta: correos importantes (`app/correos.html`)

Lista de correos marcados como importantes a mano durante el chat, sin
filtro automático de Gmail. Arranca vacía; los correos se van agregando al
arreglo `CORREOS` del HTML a medida que se piden.

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
