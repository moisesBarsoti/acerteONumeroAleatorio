const numeroSecreto = Math.floor((Math.random() * 100) + 1);
let tentativas = 0
let numerosJaDigitados = [];

// Clique do botão para enviar o número
const button = document.querySelector('button');

button.addEventListener('click', function () {
    let digiteUmValor = document.querySelector('input');
    const digiteUmValorInt = parseInt(digiteUmValor.value);
    const feedback = document.querySelector('#feedback');
    const tentativasDisplay = document.querySelector('#tentativas');
    const numerosDigitados = document.querySelector('#numerosDigitados');

    tentativas++
    numerosJaDigitados.push(digiteUmValorInt);
    
    // Condição
    if (numeroSecreto === digiteUmValorInt) {
        console.log(`Você acertou o número secreto! ${numeroSecreto}`);
        window.location.href = 'voceAcertou.html';
    } else if (numeroSecreto < digiteUmValorInt) {
        feedback.textContent = `O número secreto é menor que: ${digiteUmValorInt}`
        console.log(`O número secreto é menor que: ${digiteUmValorInt}`);
    } else {
        feedback.textContent = `O número secreto é maior que: ${digiteUmValorInt}`
        console.log(`O número secreto é maior que: ${digiteUmValorInt}`);
    }

    // Palavras do singular para o plural

    let palavraDigitados = tentativas > 1 ? 'Números digitados:' : 'Número digitado:';
    let palavraTentativaDeAcertos = tentativas > 1 ? `Tentativa de acertos` : `Tentativa de acerto`;
    let palavraVez = tentativas > 1 ? 'vezes' : 'vez'

    tentativasDisplay.textContent = `${palavraTentativaDeAcertos} ${tentativas} ${palavraVez}`; 
    numerosDigitados.textContent = `${palavraDigitados} ${numerosJaDigitados.join(', ')}`;
    digiteUmValor.value = '';
});
