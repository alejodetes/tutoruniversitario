# Tutor — Probabilidad y Estadística

**Versión:** 1.8.0
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
│   ├── notas.html                herramienta: notas de corte
│   └── recordatorios.html        herramienta: recordatorios manuales
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

## Herramienta: notas de corte (`app/notas.html`)

Registro de notas por curso: cada curso tiene actividades con nota (0-5) y
porcentaje, y muestra el acumulado ponderado, el % usado y la nota que hace
falta en lo que resta para alcanzar la meta (3.0 por defecto, editable por
curso). Los datos se guardan en `localStorage` del navegador — son privados,
no viajan al repositorio ni requieren pedirle a Claude que edite código para
cada nota nueva.

## Herramienta: recordatorios (`app/recordatorios.html`)

Lista de tareas, entregas y parciales que se agregan a mano desde la propia
página (título, curso opcional, fecha y tipo), con checkbox para marcarlas
como hechas. También se guarda en `localStorage`, igual que notas de corte.

> Antes existían las herramientas "Calendario" y "Correos importantes",
> pensadas para sincronizarse solas con Google Calendar/Gmail vía una rutina
> en la nube. Se retiraron porque esa rutina no lograba obtener permiso de
> escritura sobre el repositorio (bloqueo a nivel de cuenta de GitHub) y el
> enfoque manual resultó más simple y confiable.

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
