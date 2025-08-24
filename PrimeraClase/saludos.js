const args = process.argv.slice(2);

function mostrarAyuda() {
  console.log(`
Uso: node saludos.js <nombre> [opciones]

Argumentos:
  <nombre>               Nombre de la persona a quien saludar (obligatorio).

Opciones:
  -i, --idioma <idioma>  Idioma del saludo. Opciones disponibles: 'es', 'en', 'fr'. Por defecto: 'es'.
  -h, --help             Muestra este mensaje de ayuda.

Ejemplos:
  node saludos.js Leticia -i en
  node saludos.js Pierre --idioma fr
  node saludos.js -h
`);
}

function mostrarSaludo(nombre, idioma = 'es') {
  const saludos = {
    es: `¡Hola, ${nombre}! Bienvenido/a a Node.js.`,
    en: `Hello, ${nombre}! Welcome to Node.js.`,
    fr: `Bonjour, ${nombre}! Bienvenue à Node.js.`
  };

  if (!saludos[idioma]) {
    console.log(`Error: El idioma '${idioma}' no es válido. Usando español por defecto.`);
    idioma = 'es';
  }

  console.log(saludos[idioma]);
}

function procesarArgumentos(args) {
  if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
    mostrarAyuda();
    return;
  }

  const nombre = args.find(arg => !arg.startsWith('-'));

  if (!nombre) {
    console.error('Error: El nombre es obligatorio.');
    return;
  }

  let idioma = 'es';
  const idiomaIndex = args.findIndex(arg => arg === '-i' || arg === '--idioma');

  if (idiomaIndex !== -1) {
    if (idiomaIndex + 1 >= args.length || args[idiomaIndex + 1].startsWith('-')) {
      console.error('Error: Debe proporcionar un idioma después de -i o --idioma.');
      return;
    }
    idioma = args[idiomaIndex + 1];
  }

  
  const opcionesValidas = ['-i', '--idioma', '-h', '--help'];
  const opcionesNoValidas = args.filter(arg => arg.startsWith('-') && !opcionesValidas.includes(arg));

  if (opcionesNoValidas.length > 0) {
    opcionesNoValidas.forEach(opcion => {
      console.error(`Error: La opción '${opcion}' no es válida.`);
    });
    mostrarAyuda();
    return; 
  }

  mostrarSaludo(nombre, idioma);
}

procesarArgumentos(args);
