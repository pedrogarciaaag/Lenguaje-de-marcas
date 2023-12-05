const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Introduce su nombre:  ', (nombre) => {
  
  console.log('¡Bienvenido '+ nombre +' a la asignatura de lenguaje de marcas!');

  rl.close();
});