const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let fs = require('fs');

rl.question('Introduzca el nombre de un archivo tipo .txt : ', (nombreArchivo) => {
    
    fs.readFile(nombreArchivo, 'utf8', (error, datos) => {
        if (error) {
            console.log('Error al leer el archivo: ' + error);
        } else {
            console.log('El contenido del archivo txt es : '+ datos);
        }
    });
    
    rl.close();
});