// Test integracao
const { test, expect } = require('@jest/globals');

const calculadora = require('../src/calculadoraImc');

test('verificar processo', () => {
    const altura = 1.86;
    const peso = 79;
    const resultadoEsperado = 'Você está com Peso Normal'; 

    const imc = calculadora.calcularImc(peso, altura);
    const obtido = calculadora.mensagemImc(imc);

    expect(obtido).toBe(resultadoEsperado);
});