import { Router } from 'express';
import { saludar } from '../controllers/saludoPersonalizado.controller';

const router = Router();

router.post('/saludo', saludar);

export default router;
