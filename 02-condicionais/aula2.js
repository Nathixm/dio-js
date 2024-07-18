//Boolean e Condicionais
//Boolean representa verdadeiro e falso

/*const camisetaNathAzul = true;
const camisetaAleAzul = false;

10 >= 10; //true
10 < 5;  //false*/

//Saber se o número é par;
//Porcentagem pega o resto da divisão
//Operador igual == ou === (== igualdade (ignora o título da variável), === igualdade)
/*
const numero = 4;
const numeroPar = numero % 2 === 0;

console.log(numeroPar);

//IF e ELSE
//Imprimir texto caso o número for par ou impar;

if (numeroPar) {
    console.log('Par');
}
else {
    console.log('Impar');
}
*/
//Ex 2:
/*const numero = 12;
const numeroDivisaoPor5 = (numero % 5) === 0;

if (numeroDivisaoPor5) {
    console.log('Sim');
}
else {
    console.log('Não');
} */

//Ex3: ler números de 1 a 100
/*const numero = 0;
const numeroDivisaoPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O número é inválido');
} else if (numeroDivisaoPor5) {
    console.log('Sim');
}
else {
    console.log('Não');
}*/

//Ex 4:
/*const numero = 2;

if ((numero % 2) === 0) {
    console.log('O número é par');
} else {
    console.log('O número é impar');
}*/

//Ex 5: usar "is"
const numero = 5;
const isNumeroEPar = (numero % 2) === 0;

if (isNumeroEPar) {
    console.log('O número é par');
} else {
    console.log('O número é impar');
}