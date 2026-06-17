// Número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Configurações do jogo
const maxTentativas = 10;
let tentativasRestantes = maxTentativas;
let jogoEncerrado = false;

// Elementos HTML
const inputPalpite = document.getElementById("palpite");
const btnChutar = document.getElementById("btnChutar");
const mensagem = document.getElementById("mensagem");
const tentativas = document.getElementById("tentativas");

// Evento do botão
btnChutar.addEventListener("click", function () {

    if (jogoEncerrado) {
        return;
    }

    const palpite = parseInt(inputPalpite.value);

    // Validação
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = "Digite um número válido entre 1 e 100.";
        return;
    }

    // Decrementa as tentativas
    tentativasRestantes--;

    // Verifica se acertou
    if (palpite === numeroSecreto) {
        mensagem.textContent = "🎉 Você acertou!";
        tentativas.textContent =
            `Tentativas restantes: ${tentativasRestantes}`;

        btnChutar.disabled = true;
        jogoEncerrado = true;
        return;
    }

    // Verifica se acabou o jogo
    if (tentativasRestantes === 0) {
        mensagem.textContent =
            `❌ Você perdeu! O número secreto era ${numeroSecreto}.`;

        tentativas.textContent = "Tentativas restantes: 0";

        btnChutar.disabled = true;
        jogoEncerrado = true;
        return;
    }

    // Dicas
    if (palpite < numeroSecreto) {
        mensagem.textContent = "⬆️ O número secreto é maior.";
    } else {
        mensagem.textContent = "⬇️ O número secreto é menor.";
    }

    // Atualiza tentativas
    tentativas.textContent =
        `Tentativas restantes: ${tentativasRestantes}`;

    // Limpa o campo
    inputPalpite.value = "";
    inputPalpite.focus();
});