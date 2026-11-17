# Hurtos vehiculares 2024/2025

Landing page del proyecto de data science sobre hurtos vehiculares 2024/2025.

- Front-end: **Angular 22** (standalone, SCSS) en `frontend/`
- Back-end: **Node.js + Express 5** en `server/`
- Gráficos: **Highcharts** (`highcharts-angular`)
- Iconos: **Material Design Icons** (fuente local, `@material-design-icons/font`)

## Estructura

```
proyecto prueba/
├── frontend/            # App Angular
│   ├── proxy.conf.json  # Redirige /api al backend en desarrollo
│   └── src/app/
│       ├── app.html          # Shell: fondo #F5F4F0 + recuadro #FFFFFD
│       ├── app.routes.ts     # Rutas (incluye las secciones declaradas en SECTIONS)
│       ├── core/services/    # ApiService (cliente HTTP)
│       └── features/
│           ├── home/         # Vista de inicio
│           └── section/      # Vista reutilizable por sección del informe
├── server/              # API Express
│   └── routes/api.js     # /api/health, /api/sections
└── package.json         # npm workspaces + scripts
```

## Comandos

| Comando           | Qué hace                                              |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Levanta API (3000) y Angular (4200) a la vez           |
| `npm run build`   | Compila Angular a `frontend/dist/frontend/browser`     |
| `npm start`       | Express sirve la app compilada + la API en el puerto 3000 |

En desarrollo, Angular proxea `/api` hacia `http://localhost:3000`.

## Reglas de estilo (REGLAS.md)

- Fondo de la página: `#F5F4F0`
- Recuadro de información: `#FFFFFD`
- Cuadros de código: fondo negro, bordes redondeados
  - Python → borde `#FFD700` (`.code-block--python`)
  - R → borde `#00BFFF` (`.code-block--r`)

Las clases de los cuadros de código y las rutas de sección ya están preparadas;
el contenido de cada sección se completa en la sesión de trabajo correspondiente.
