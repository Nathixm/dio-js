const calculadora = require('./src/calculadoraImc')

const prompt = require('prompt-sync')();

const altura = prompt('Escreva sua altura: ');
const peso = prompt('Escreva seu peso: ');

const alturanum = Number(altura);
const pesonum = Number(peso);

const imc = calculadora.calcularImc(pesonum, alturanum);

console.log('O seu IMC é de: ' + imc.toFixed(2));

const msg = calculadora.mensagemImc(imc);

console.log(msg);
