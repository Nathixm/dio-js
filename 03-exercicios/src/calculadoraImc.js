const calcularImc = function calcularImc(pesonum, alturanum) {
    return pesonum / Math.pow(alturanum, 2);
}
const mensagemImc = function mensagemImc(imc) { 
    if (imc < 18.5) {
        return 'Você está Abaixo do Peso';
    } else if (imc <= 25) {
        return 'Você está com Peso Normal'; 
    } else if (imc <= 30) {
        return 'Você está Acima do Peso';
    } else if (imc <= 40) {
        return 'Você está Obeso';
    } else {
        return 'Você está com Obesidade Grave';
    }
}

module.exports = {
    calcularImc,
    mensagemImc
}