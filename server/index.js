import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import cors from 'cors';
import express from 'express';

import { apiRouter } from './routes/api.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = Number(process.env.PORT ?? 3000);
const DIST_DIR = path.resolve(__dirname, '../frontend/dist/frontend/browser');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

// En produccion el backend sirve el build de Angular.
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));

  // Fallback de la SPA (Express 5 no admite rutas tipo '*').
  app.use((req, res, next) => {
    if (req.method !== 'GET' || req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });
}

app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'Recurso no encontrado' });
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`API de hurtos vehiculares escuchando en http://localhost:${PORT}`);
});
