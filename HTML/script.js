function atualizarRelogio() {
  // Cria um novo objeto Date com a data e hora atuais
  const dataAtual = new Date();

  // Obtém o elemento p com o id "relogio"
  const elementoRelogio = document.getElementById('relogio');

  // Converte a data e hora para uma string formatada para a localidade do usuário
  elementoRelogio.innerHTML = dataAtual.toLocaleString();
}

// Atualiza o relógio a cada segundo (1000 milissegundos)
setInterval(atualizarRelogio, 1000);

// Executa a função uma vez ao carregar a página para evitar um atraso inicial
atualizarRelogio();


// fim do relogio

