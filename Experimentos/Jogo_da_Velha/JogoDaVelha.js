//Tabuleiro em formato de array.
let tabuleiro = [[0,0,0],[0,0,0],[0,0,0]]

//Determina qual é o jogador da vez.
let jogadaVez = 1;

//Determina qual é a dificuldade escolhida.
let dificuldade;

//Determina o vencedor do jogo.
let vencedor = ""

//Determina qual o tabuleiro inicial para cada dificuldade.
function modoDeJogo(botão){
  
  let botão0 = document.getElementById("botão0")
  let botão1 = document.getElementById("botão1")
  let botão2 = document.getElementById("botão2")
  let botãoVoltar = document.getElementById("botãoVoltar")
  let tabuleiro = document.getElementById("tabuleiro")

  //Seleciona modo Jogador Vs Jogador.
  if(botão === 0){
    dificuldade = 'JogadorVsJogador'

    botão0.style.display = "none"
    botão1.style.display = "none"
    botão2.style.display = "none"
    botãoVoltar.style.display = "inline"
    tabuleiro.style.display = "table"
  }
    
  //Seleciona modo Jogador Vs Maquina (Facil).
  else if(botão === 1){
    dificuldade = 'JogadorVsMaquinaFacil'

    botão0.style.display = "none"
    botão1.style.display = "none"
    botão2.style.display = "none"
    botãoVoltar.style.display = "inline"
    tabuleiro.style.display = "table"
    
  }

  //Seleciona modo Jogador Vs Maquina (Dificil).  
  else if(botão === 2){
    dificuldade = 'JogadorVsMaquinaDificil'

    botão0.style.display = "none"
    botão1.style.display = "none"
    botão2.style.display = "none"
    botãoVoltar.style.display = "inline"
    tabuleiro.style.display = "table"
  }
    
  //Volta para escolher outra dificuldade
  else{
    botão0.style.display = "inline"
    botão1.style.display = "inline"
    botão2.style.display = "inline"
    botãoVoltar.style.display = "none"
    tabuleiro.style.display = "none"
    limparTabuleiro()
  }
}

//Determina qual dificuldade sera jogada.
function jogar(pos1,pos2){


  
  celula = document.getElementById(`casa${pos1}${pos2}`)

  if( vencedor === ""){
    //Joga no modo Jogador Vs Jogador.
    if(dificuldade === "JogadorVsJogador"){
      if(jogadaVez == 1 && tabuleiro[pos1][pos2] === 0){
        tabuleiro[pos1][pos2] = jogadaVez;
        celula.style.backgroundImage = "url('Imagens/X-1.png')"
       
        jogadaVez = -1
      }
      else if(tabuleiro[pos1][pos2] === 0){
        tabuleiro[pos1][pos2] = jogadaVez;
        celula.style.backgroundImage = "url('Imagens/0-2.png')"
        jogadaVez = 1
      }
    }
  
    //Joga no modo Jogador Vs Maquina (Facil).  
    else if(dificuldade === "JogadorVsMaquinaFacil"){
        
      tabuleiro[pos1][pos2] = jogadaVez;
      celula.style.backgroundImage = "url('Imagens/X-1.png')"
     
      jogadaVez = -1
  
      let novacelula = JogadorVsMaquinaFacil()
      console.log(novacelula)
      celula = document.getElementById(`casa${novacelula}`)
      celula.style.backgroundImage = "url('Imagens/0-2.png')"
      
      jogadaVez = 1
    }
  
    //Joga no modo Jogador Vs Maquina (Dificil).    
    else if(dificuldade === "JogadorVsMaquinaDificil"){
     // JogadorVsMaquinaDificil(pos1,pos2)
    }
  }
  //Imprime no console a situação atual do tabuleiro.
  console.log(tabuleiro)

  //verifica se o jogo terminou.
  fimDeJogo()
}
  
//Jogar no modo maquina Facil (seleciona uma posição aleatoria valida no tabuleiro).
function JogadorVsMaquinaFacil(){
  let pos1 = jogadaAleatoria()
  let pos2 = jogadaAleatoria()

  if(tabuleiro[pos1][pos2] !== 0){
    for(let i = 0; i < 9; i++) {
      pos1 = jogadaAleatoria()
      pos2 = jogadaAleatoria()
    }
  }
  else{
  fimDeJogo()
}
  tabuleiro[pos1][pos2] = jogadaVez;

   return `${pos1}${pos2}`;
  
}

//Numero aleatorio entre 0 e 2.
function jogadaAleatoria() {
  return Math.floor((Math.random()) * 3)
}

//Limpa o tabuleiro.
function limparTabuleiro(){

  vencedor = ""
  
  document.getElementById("tabuleiro").style.opacity = "100%";
  document.getElementById("resultado").innerText = "";
  document.getElementById("jogarDeNovo").style.display = "none";
  
  for(let i = 0; i < tabuleiro.length; i++) {
      let tab = tabuleiro[i];
      for(let j = 0; j < tab.length; j++) {
          tabuleiro[i][j] = 0;
          document.getElementById(`casa${i}${j}`).style.backgroundImage = "none";
      }
  }
}

//Determina  o fim do jogo.
function fimDeJogo(){

  vencedor = verificarTermino()

  let tabuleiroCentral = document.getElementById("tabuleiro");
  let texto = document.getElementById("resultado");
  let botão = document.getElementById("jogarDeNovo");
  
  if(dificuldade === "JogadorVsJogador" && vencedor === "jogador1" ){
    tabuleiroCentral.style.opacity = "50%"
    texto.innerText = "O jogador 1 Venceu!"
    botão.style.display = "inline"

  }
  else if(dificuldade === "JogadorVsJogador" && vencedor === "jogador2" ){
    tabuleiroCentral.style.opacity = "50%"
    texto.innerText = "O jogador 2 Venceu!"
    botão.style.display = "inline"
   
  }

  else if(dificuldade === "JogadorVsMaquinaFacil" && vencedor === "jogador1"){
    tabuleiroCentral.style.opacity = "50%"
    texto.innerText = "O jogador 2 Venceu!"
    botão.style.display = "inline"

  }
  else if(dificuldade === "JogadorVsMaquinaFacil" && vencedor === "jogador2"){
    tabuleiroCentral.style.opacity = "50%"
    texto.innerText = "Você Perdeu!"
    botão.style.display = "inline" 

  }
  else if (vencedor === "velha"){
    tabuleiroCentral.style.opacity = "50%"
    texto.innerText = "Deu Velha, Você Perdeu!"
    botão.style.display = "inline"

  }
  
}

//verifica se o jogo terminou
function verificarTermino(){
  let somaV = 0;
  let somaH = 0;
  let somaX = 0;
  let somaY = 0;

  let linha = 0;
  let coluna = 0;
  
  let possuiZero;
  let index = 0
  
  for(linha = 0; linha < tabuleiro.length; linha++) {
    
      possuiZero = tabuleiro[linha].includes(0)
      
      for(coluna = 0; coluna < tabuleiro.length; coluna++) {
          
        somaH += tabuleiro[linha][coluna] ;
        somaV += tabuleiro[coluna][linha] ;
    
     
      }
      
      somaX += tabuleiro[linha][linha] ;
      somaY += tabuleiro[linha][2-linha] ;
      
    //verifica vitoria do player 1.
    if(somaH == 3 || somaV == 3 || somaX == 3 || somaY == 3 ){
      vencedor = "jogador1";
    }

      //verifica vitoria do player 2.
    else if(somaH == -3 || somaV == -3 || somaX == -3 || somaY == -3){
      vencedor = "jogador2";
    }

      somaV = 0;
      somaH = 0;
    
    //verifica velha.
    if(!possuiZero){
      index++
    }
    if(index == 3){
      vencedor = "velha";
    }
    
  }
  
return vencedor;
  
}
    
 
  


