const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

console.log(`Este ejercicio hace operaciones de suma, media, maximo y minimo con los numeros 1,2,3,4,5`);

let numeros = [1, 2, 3, 4, 5,];

let suma = 0;
let contador = 0;
while (contador < numeros.length) {
    suma = suma + numeros[contador];
    contador++;
}

let media = suma / numeros.length;

maximo = Math.max(...numeros);
minimo = Math.min(...numeros);

rl.question('¿Que operacion deseas realizar?', (pregunta) => {
    if(pregunta == 'suma'){
        console.log('Suma : '+ suma)
    }else if(pregunta == 'media'){
        console.log('Media : '+ media)
    }else if(pregunta == 'maximo'){
        console.log('Maximo : '+ maximo)
    }else if(pregunta == 'minimo'){
        console.log('Minimo : '+ minimo)
    }
    
    rl.close();
});

