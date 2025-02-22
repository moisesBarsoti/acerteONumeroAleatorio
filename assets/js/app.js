// Gerando número aleatório
const numeroSecreto = Math.floor((Math.random() * 100) + 1);
let tentativas = 0
let numerosJaDigitados = [];

// Clique do botão para enviar o número
const button = document.querySelector('button');

button.addEventListener('click', function () {
    let input = document.querySelector('input');
    const inputUmValorInt = parseInt(input.value);
    const feedback = document.querySelector('#feedback');
    const tentativasDisplay = document.querySelector('#tentativas');
    const numerosDigitados = document.querySelector('#numerosDigitados');

    tentativas++
    numerosJaDigitados.push(inputUmValorInt);
    
    // Condições
    if (numeroSecreto === inputUmValorInt) {
        console.log(`Você acertou o número secreto! ${numeroSecreto}`);
        window.location.href = 'voceAcertou.html';
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
