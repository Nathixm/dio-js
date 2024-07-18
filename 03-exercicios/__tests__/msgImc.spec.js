// Test BVA 2
const { test, expect } = require('@jest/globals');

const calculadora = require('../src/calculadoraImc');

test('verificar pesoNormal 1', () => {
    const imc = 18.5;
    const resultadoEsperado = 'Você está com Peso Normal'; 

    const resultadoObtido = calculadora.mensagemImc(imc);

    expect(resultadoObtido).toBe(resultadoEsperado);
});

test('verificar pesoNormal 2', () => {
    const imc = 18.6;
    const resultadoEsperado = 'Você está com Peso Normal'; 

    const resultadoObtido = calculadora.mensagemImc(imc);

    expect(resultadoObtido).toBe(resultadoEsperado);
});

test('verificar pesoNormal 3', () => {
    const imc = 25;
    const resultadoEsperado = 'Você está com Peso Normal'; 

    const resultadoObtido = calculadora.mensagemImc(imc);

    expect(resultadoObtido).toBe(resultadoEsperado);
});

test('verificar pesoNormal 4', () => {
    const imc = 24.9;
    const resultadoEsperado = 'Você está com Peso Normal'; 

    const resultadoObtido = calculadora.mensagemImc(imc);

    expect(resultadoObtido).toBe(resultadoEsperado);
});