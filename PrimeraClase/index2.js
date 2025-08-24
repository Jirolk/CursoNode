import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function obtenerSaludo() {
  const hora = new Date().getHours();

  if (hora < 12) {
    return 'Buenos días';
  } else if (hora < 18) {
    return 'Buenas tardes';
  } else {
    return 'Buenas noches';
  }
}

rl.question('¿Cuál es tu nombre? ', (nombre) => {
  const saludo = obtenerSaludo();
  console.log(`${saludo}, ${nombre}!`);
  console.log('Espero que tengas un excelente día.');

  rl.close();
});
