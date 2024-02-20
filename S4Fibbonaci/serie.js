const fs = require('fs');

let crearSerie = (cantidad) => {

    return new Promise((resolve, reject) => {
        let fibo1 = 1;
        let fibo2 = 1;
        let serie = '';

        serie += `${fibo1}\t`;
        console.log("Cantidad: ", cantidad);
        console.log("Serie: ", serie);

        for(let i = 2;i <= cantidad;i++){
            console.log("Serie: ", serie);
            serie += `${fibo2}\t`;
            fibo2 = fibo1 + fibo2;
            fibo1 = fibo2 - fibo1;
        }

        fs.writeFile('fibonacci.txt', serie, (err) => {
            if (err) 
                reject('Error al crear el archivo.');
            else
                resolve('El archivo fue creado con éxito.');
        });
    })       
}

module.exports = {
    crearSerie
}
