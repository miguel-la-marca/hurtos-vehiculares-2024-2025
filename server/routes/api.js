import { Router } from 'express';

const router = Router();

/** Estado del servicio. */
router.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'hurtos-api' });
});

/**
 * Secciones del informe. Se ira completando en cada sesion de trabajo,
 * de la misma forma que las vistas de Angular.
 */
router.get('/sections', (_req, res) => {
  res.json({ sections: [] });
});

export { router as apiRouter };
