// ----------------------------------------
// Instructions
// ----------------------------------------
// Run the app:      node app.js =5
// Download nodemon: npm intall -g nodemon
// Run nodemon:      nodemon app.js =7
// Serie de Fibonacci
// 1 1 2 3 5 8 13 21 34...

const serie = require('./serie');

let argv = process.argv;
console.log("Argumentos: ", argv);
let valor = argv[2].split('=')[1];

let cantidad = valor;
console.log("valor: ", valor);
serie.crearSerie(cantidad)
    .then(mensaje => console.log(mensaje))
    .catch(mensaje => console.log(mensaje))