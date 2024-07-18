const prompt = require('prompt-sync')();

const altura = prompt('Escreva sua altura: ');
const peso = prompt('Escreva seu peso: ');

const alturanum = Number(altura);
const pesonum = Number(peso);

const imc = pesonum / Math.pow(alturanum, 2);

console.log('O seu IMC é de: ' + imc.toFixed(2));

if (imc < 18.5) {
    console.log('Você está Abaixo do Peso')
} else if (imc <= 25) {
    console.log('Você está com Peso Normal')  
} else if (imc <= 30) {
    console.log('Você está Acima do Peso') 
} else if (imc <= 40) {
    console.log('Você está Obeso')
} else {
    console.log('Você está com Obesidade Grave')
}

// 2
/*const prompt = require('prompt-sync')();

const altura = prompt('Escreva sua altura: ');
const peso = prompt('Escreva seu peso: ');

const alturanum = Number(altura);
const pesonum = Number(peso);
const IMC = pesonum / (alturanum * alturanum);

console.log('O seu IMC é de: ' + IMC.toFixed(2));

const configuracaoMensagem = [
    [18.5, 'Você está Abaixo do Peso'],
    [25, 'Você está com Peso Normal'],
    [30, 'Você está Acima do Peso'],
    [40, 'Você está Obeso'],
    [1000, 'Você está com Obesidade Grave'],
];

for(let i = 0; i < 5; i = i + 1) {
    if(IMC < configuracaoMensagem[i][0]) {
        console.log(configuracaoMensagem[i][1]);
        break;
    }
}*/