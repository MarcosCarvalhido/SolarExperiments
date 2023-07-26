let tabuleiro = []
let acertos = []

let jogadas = 0

let casas = 16/2

let cartaDaVez = 0


class Carta {
  constructor(casa,imagem){
    this.casa = casa;
    this.imagem = imagem;
  }

  limpar(){
    delete this.imagem
    delete this.casa
  }
}

let carta1 = new Carta
let carta2 = new Carta

for(let i = 0; i < casas;) {
  let num = numAleatorio()

    if(!tabuleiro.includes(num)){
      for(let j = 0; j < 2; j++){
        tabuleiro.push(num)
        acertos.push(0)
      }
      i++
    } 
}

function reordenar(array){
  //Metodo:Fisher–Yates shuffle
  //https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  
  let index = array.length;
  let aleatorio;

  while(index != 0){
    aleatorio = Math.floor(Math.random() * index);

    index--;
    
    [array[index], array[aleatorio]] = [array[aleatorio], array[index]];
    
  }
  return array;
}

reordenar(tabuleiro)
console.log(tabuleiro)

function numAleatorio() {
  return Math.floor(Math.random() * casas)
  
}

function jogar(casa){
  let carta = document.getElementById(`carta${casa}`)
    
  let index = tabuleiro[casa]
  
  carta.src = `Cartas/carta${index}.svg`

  if(cartaDaVez === 0){
    carta1.imagem = index
    carta1.casa = casa
    cartaDaVez++
  }
  else{
    carta2.imagem = index
    carta2.casa = casa
    cartaDaVez--
  }

  verificarIgualdade()
  verificarFim()

  console.log(jogadas)

}

function verificarIgualdade(){

  if(cartaDaVez === 0){
    if(carta1.imagem === carta2.imagem){
      document.getElementById(`fundo${carta1.casa}`).disabled 
      document.getElementById(`fundo${carta2.casa}`).disabled
      
      document.getElementById(`fundo${carta1.casa}`).style.opacity = "70%"
      document.getElementById(`fundo${carta2.casa}`).style.opacity = "70%"

      acertos[carta1.casa] = 1
      acertos[carta2.casa] = 1
      
      carta1.limpar
      carta2.limpar

      jogadas++
    }
    else{

    setTimeout(limparCartas,1000) 
      jogadas++
    }
  

  }
  
}

function limparCartas(){
  document.getElementById(`carta${carta1.casa}`).src = "card-ace-diamonds.svg"
  document.getElementById(`carta${carta2.casa}`).src = "card-ace-diamonds.svg"

  carta1.limpar
  carta2.limpar


}

function verificarFim(){
  
  let total = acertos.reduce(soma)

  if(total === 16){
    document.getElementById("resultado").style.display = "block";
    document.getElementById("jogadas").innerHTML = jogadas
  }

  function soma(total, num){
    return total + num
  }  
}

function jogarDeNovo(){
  document.getElementById("resultado").style.display = "none";
  document.getElementById("jogadas").innerHTML = jogadas

  tabuleiro = []
  acertos = []
  jogadas = 0

  cartaDaVez = 0
    
  carta1.limpar
  carta2.limpar
}

