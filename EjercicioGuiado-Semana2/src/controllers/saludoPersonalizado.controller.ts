import { Request, Response } from 'express';

export const saludar = (req: Request, res: Response) => {
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({ error: 'Debe enviar un nombre en el body' });
  }

  const hora = new Date().getHours();
  let saludo = '';

  if (hora >= 6 && hora < 12) {
    saludo = 'Buenos días';
  } else if (hora >= 12 && hora < 19) {
    saludo = 'Buenas tardes';
  } else {
    saludo = 'Buenas noches';
  }

  res.json({
    mensaje: `${saludo}, ${nombre}. ¡Bienvenida/o a nuestra API!`,
  });
};
