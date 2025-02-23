// Selecionar Elementos
function selecionarElemento(tag) {
    return  document.querySelector(tag);
}

// Gerar número aleatório 
function gerarNumRandom(numMax) {
    return Math.floor((Math.random() * numMax) + 1);
}

// Ir para outra página
function linkParaPagina(url) {
    return window.location.href = url;
}


// Gerando número secreto
const numeroSecreto = gerarNumRandom(100);
let tentativas = 0;
let numerosJaDigitados = [];

// Clique do botão para enviar o número
const button = selecionarElemento('button');

button.addEventListener('click', function () {
    let input = selecionarElemento('input');
    const inputUmValorInt = parseInt(input.value);
    const feedback = selecionarElemento('#feedback');
    const tentativasDisplay = selecionarElemento('#tentativas');
    const numerosDigitados = selecionarElemento('#numerosDigitados');

    tentativas++
    numerosJaDigitados.push(inputUmValorInt);
    
    // Condições
    if (numeroSecreto === inputUmValorInt) {
        console.log(`Você acertou o número secreto! ${numeroSecreto}`);
        linkParaPagina('voceAcertou.html');
    } else if (numeroSecreto < inputUmValorInt) {
        feedback.textContent = `O número secreto é menor que: ${inputUmValorInt}`
        console.log(`O número secreto é menor que: ${inputUmValorInt}`);
    } else {
        feedback.textContent = `O número secreto é maior que: ${inputUmValorInt}`
        console.log(`O número secreto é maior que: ${inputUmValorInt}`);
    }

    // Palavras do singular para o plural
    let palavraDigitados = tentativas > 1 ? 'Números digitados:' : 'Número digitado:';
    let palavraTentativaDeAcertos = tentativas > 1 ? `Tentativa de acertos` : `Tentativa de acerto`;
    let palavraVez = tentativas > 1 ? 'vezes' : 'vez'

    tentativasDisplay.textContent = `${palavraTentativaDeAcertos} ${tentativas} ${palavraVez}`; 
    numerosDigitados.textContent = `${palavraDigitados} ${numerosJaDigitados.join(', ')}`;
    input.value = '';
});