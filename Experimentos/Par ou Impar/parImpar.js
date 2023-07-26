//escolhe um numero aleatorio entre 1 e 100.
function numAleatorio() {
  return Math.floor((Math.random() * 100) + 1)
}

//Compara o imput com o numero aleatorio e retorna uma resposta.
function jogar(parOuImpar) {
  resetarCor();
  let numeroAleatorio = numAleatorio()
  let numeroSorteado = numeroAleatorio % 2

  //Se o numero escolhido pelo jogador e o numero aleatorio forem iguais = true.
  if (parOuImpar === numeroSorteado) {
    resultado1 = "você <strong>Ganhou</strong>! O numero sorteado foi"
  }
  else {
    resultado1 = "você <strong>Perdeu</strong>! O numero sorteado foi"
  }

  //Se o numero sorteado é par ou impar.
  if (numeroSorteado === 0) {
    resultado2 = " <strong>Par</strong>!"
  }
  else {
    resultado2 = " <strong>Impar</strong>!"
  }

  //Mantem colorida o opção escolhida.
  if(parOuImpar === 0){
    document.getElementById("impar").style.opacity = "50%"
   
  }
  else{
    document.getElementById("par").style.opacity = "50%"
   
  }

  //Escreve o resultado final.
  document.getElementById("numSorteado").innerHTML = numeroAleatorio;
  document.getElementById("resposta").innerHTML = resultado1 + resultado2;
}

//muda a cor do botão de volta para o vazio.
function resetarCor(){
  document.getElementById("par").style.opacity = "100%"
  document.getElementById("impar").style.opacity = "100%"
}