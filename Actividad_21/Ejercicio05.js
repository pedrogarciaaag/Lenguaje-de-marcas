const { randomInt } = require('node:crypto');
const { maxHeaderSize } = require('node:http');

function sensor(){
    let sensor = randomInt(150);

    if(sensor < 100){
        console.log('Temperatura: '+sensor);
    } else {
        console.log('Aviso, aviso . La temperatura actual : '+sensor+' , excede la temperatura maxima : 100');
        process.exit()
    }
}

setInterval(sensor, 1000);


