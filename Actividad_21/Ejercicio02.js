const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

console.log('Este es un conversor de temperatura de Celsius a Fahrenheit i viceversa');

rl.question('Por favor, introduce una temperatura: ', (temperatura) => {

    rl.question('¿En Celsius o Fahrenheit? (C/F): ', (grados) => {
        if (grados == 'C') {
            let Celsius = temperatura * 9/5 + 32;
            console.log(temperatura +' grados Celsius equivalen a '+ Celsius +'grados Fahrenheit.' );
        }else if (grados == 'F') {
            let Farenheit = (temperatura - 32) * 5/9;
            console.log(temperatura +'grados Fahrenheit equivalen a '+ Farenheit +' grados Celsius.');
        }else {
            console.log('Unidad desconocida');
        }
        
        rl.close();
    });
});