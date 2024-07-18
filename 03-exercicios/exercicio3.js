
const valorProduto = 80;
const formaDePagamento = 'duas'; // debito, pix, duas, mais

let valorFinal;

if (formaDePagamento === 'desconto') {
    const desconto = valorProduto * 0.1;
    valorFinal = valorProduto - desconto;
} else if (formaDePagamento === 'pix') {
    const desconto = valorProduto * 0.15;
    valorFinal = valorProduto - desconto;
} else if (formaDePagamento === 'mais') {
    const acrescimo = valorProduto * 0.1;
    valorFinal = valorProduto + acrescimo;
} else if (formaDePagamento === 'duas') {
    valorFinal = valorProduto;
}

console.log('O valor de pagamento é: ' +  valorFinal.toFixed(2));

/*//modelo curso
const precoEtiqueta = 289.90;
const formaDePagamento = 2;

if (formaDePagamento === 1) {
    console.log((precoEtiqueta - (precoEtiqueta * 0.1)).toFixed(2));
} else if (formaDePagamento === 2) {
    console.log((precoEtiqueta - (precoEtiqueta * 0.15)).toFixed(2));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta.toFixed(2));
} else {
    console.log((precoEtiqueta + (precoEtiqueta * 0.1)).toFixed(2));
}*/
