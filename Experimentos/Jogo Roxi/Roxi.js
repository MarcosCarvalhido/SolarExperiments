let rolagemSoma = 0;
let rolagem;

///Rola o primeiro dado e ativa os outros botões.
function jogar() {
  let rolamento = d20Rolagem();
  rolagemSoma = rolamento;

  document.getElementById("numero").innerHTML = rolamento;
  document.getElementById("resultado").innerHTML = rolamento;

  document.getElementById("botões").style.display = "inline";
  document.getElementById("primeiroBotão").disabled = true;
}

// Define um numero aleatorio de 1 a 20.
function d20Rolagem() {
  return Math.floor((Math.random() * 20) + 1);
}

//Define a logica de decisão e o resultado do oponente.
function jogadaDaBanca() {
  rolagem = d20Rolagem();

  if (rolagem > 15) {
    return rolagem;
  }
  else {
    rolagem += d20Rolagem();
    return rolagem;
  }

}

//Mantem o valor do primeiro dado rolado e vai direto para a logica final.
function manter() {
  LogicaFinal(rolagemSoma, jogadaDaBanca());
}

//Soma um novo D20 a o valor original e vai para a logica final.
function outroDado() {

  let novaRolagem = d20Rolagem();
  rolagemSoma += novaRolagem;

  document.getElementById("resultado").innerHTML = rolagemSoma;
  document.getElementById("numero").innerHTML = novaRolagem;
}

//Logica final para decisão do jogo.
function LogicaFinal(rolagemJogador, rolagemMesa) {
  document.getElementById("outroDado").disabled = true;
  document.getElementById("manter").disabled = true;
  document.getElementById("jogarNovamente").style.display = "inline";
  document.getElementById("rolagemDaBanca").innerHTML = rolagemMesa;

  let resultadoTexto;
  let resultadoPromp;


  if (rolagemJogador === rolagemMesa) {
    resultadoTexto = "Você e a Mesa empataram! Ninguem ganhou!"
    resultadoPromp = "Você Empatou!"
  }
  else if (rolagemJogador > 20 && rolagemMesa > 20) {
    resultadoTexto = "Você e a Mesa estouraram! Ambos tiraram mais do que 20!"
    resultadoPromp = "Você Perdeu!"
  }
  else if (rolagemJogador <= 20 && rolagemMesa > 20) {
    resultadoTexto = "A Mesa estourou! Ela tirou mais do que 20!"
    resultadoPromp = "Você Ganhou!"
  }
  else if (rolagemJogador > 20 && rolagemMesa <= 20) {
    resultadoTexto = "Você estourou! Tirou mais do que 20!"
    resultadoPromp = "Você Perdeu!"
  }
  else if (rolagemJogador < rolagemMesa) {
    resultadoTexto = "A Mesa tirou um numero mais proximo de 20 que você!"
    resultadoPromp = "Você Perdeu!"
  }
  else if (rolagemJogador > rolagemMesa) {
    resultadoTexto = "Você tirou um numero mais proximo de 20!"
    resultadoPromp = "Você Ganhou!"
  }


  document.getElementById("resultadoTexto").innerText = `Seu resultado final foi ${rolagemJogador} e a da Mesa foi ${rolagemMesa}. ${resultadoTexto}`
  document.getElementById("resultadoPromp").innerText = resultadoPromp;

}

//Resetar contadores e iniciar uma nova partida.
function jogarNovamente() {
  rolagemSoma = 0;
  rolagem = 0;
  none = null;

  document.getElementById("resultado").innerHTML = 0;
  document.getElementById("numero").innerHTML = 0;
  document.getElementById("rolagemDaBanca").innerHTML = 0;

  document.getElementById("resultadoTexto").innerText = " ";
  document.getElementById("resultadoPromp").innerText = " ";

  document.getElementById("outroDado").disabled = false;
  document.getElementById("manter").disabled = false;
  document.getElementById("primeiroBotão").disabled = false;

  document.getElementById("botões").style.display = "none";
  document.getElementById("jogarNovamente").style.display = "none";
}