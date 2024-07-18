const tipoAtual = 1;
const tipoCombustivelCarro = ['Gasolina', 'Etanol'];
const precoCombustivel = [5.85, 3.86];
const distanciaKm = 1800;
const kmPorLitros = 10;


const combustivelUtilizado = (distanciaKm / kmPorLitros);
const valorGasto = combustivelUtilizado * precoCombustivel[tipoAtual];

console.log("O valor que será gasto para realizar esta viagem com " + tipoCombustivelCarro[tipoAtual] + " é de : " + valorGasto);


// if (tipoCombustivelCarro[tipoAtual] === 'Gasolina') {

//     console.log("o valor que será gasto para realizar esta viagem na Gasolina é de : " + valorGasto);
// } else {

//     console.log("O valor que será gasto para realizar esta viagem no Etanol é de : " + valorGasto);
// }
