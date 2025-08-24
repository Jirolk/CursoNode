import express from 'express';
import saludoRoutes from './routes/salud.routes';
import saludoPersonalizadoRoutes from './routes/saludoPersonalizado.routes';
import { logger } from './middlewares/logger';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);
app.use('/api', saludoRoutes);
app.use('/api/Personalizado', saludoPersonalizadoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
