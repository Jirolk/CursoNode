import { Request, Response } from 'express';

export const saludar = (req: Request, res: Response) => {
  res.json({ mensaje: '¡Hola, mundo!' });
};
