// Função auxiliar para obter um elemento pelo ID
function getElementById(id) {
    return document.getElementById(id);
}

// Função para ler o texto em voz alta
function lerTexto() {
    const texto = getElementById('texto').value;
    if (texto.trim() === '') {
        getElementById('resultado').textContent = 'Digite um texto para ler.';
        return;
    }

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(texto);
    synth.speak(utterance);
}

// Função para contar palavras
function contarPalavras() {
    const texto = getElementById('texto').value;

    if (texto.trim() === '') {
        getElementById('resultado').textContent = 'Digite um texto para contar as palavras.';
        return;
    }

    const palavras = texto.trim().split(/\s+/); // Conta palavras corretamente, ignorando múltiplos espaços
    getElementById('resultado').textContent = `Número de palavras: ${palavras.length}`;
}

function lerTexto() {
    const texto = document.getElementById('texto').value;
    if (texto.trim() === '') {
        document.getElementById('resultado').textContent = 'Digite um texto para ler.';
        return;
    }
    // Exemplo de uso da Web Speech API
    const utterance = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(utterance);
    document.getElementById('resultado').textContent = 'Texto sendo lido...';
}

function salvarEmocao() {
    const emocao = document.getElementById('emocao').value;
    if (emocao.trim() === '') {
        document.getElementById('resultadoEmocao').textContent = 'Digite seu estado emocional.';
        return;
    }
    // Salvar a emoção no localStorage para persistência
    const listaEmocoes = JSON.parse(localStorage.getItem('emocoes')) || [];
    listaEmocoes.push(emocao);
    localStorage.setItem('emocoes', JSON.stringify(listaEmocoes));
    document.getElementById('resultadoEmocao').textContent = 'Emoção salva com sucesso!';
}


function adicionarTransacao() {
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if (!descricao || isNaN(valor)) {
        alert('Preencha todos os campos corretamente.');
        return;
    }

    const listaTransacoes = document.getElementById('lista-transacoes');
    const item = document.createElement('li');
    item.textContent = `${descricao}: R$${valor.toFixed(2)}`;
    listaTransacoes.appendChild(item);

    // Adicionar a transação no localStorage
    const transacoes = JSON.parse(localStorage.getItem('transacoes')) || [];
    transacoes.push({ descricao, valor });
    localStorage.setItem('transacoes', JSON.stringify(transacoes));

    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';
}


function traduzirTexto() {
    const texto = document.getElementById('textoAprendizado').value;
    const idioma = document.getElementById('idiomaAprendizado').value;

    if (texto.trim() === '') {
        document.getElementById('resultadoTraducao').textContent = 'Digite um texto para traduzir.';
        return;
    }

    // Simulação de tradução (você pode integrar com uma API real de tradução)
    document.getElementById('resultadoTraducao').textContent = `Texto traduzido para ${idioma}: ${texto}`;
}

