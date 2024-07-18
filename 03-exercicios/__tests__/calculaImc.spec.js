const { test, expect } = require('@jest/globals');

const calculadora = require('../src/calculadoraImc');

test('verificar imc', () => {
    const pesonum = 60;
    const alturanum = 1.60;
    const resultadoEsperado = '23.44';

    const resultadoObtido = calculadora.calcularImc(pesonum, alturanum);

    expect(resultadoObtido.toFixed(2)).toBe(resultadoEsperado);
});