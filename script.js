function mudarCor(id) {
  document.getElementById(`celula${id}`).style.color = cores()
}

function cores() {
  let cores = ["#b58900", "#cb4b16", "#dc322f", "#d33682", "#6c71c4", "#268bd2", "#2aa198", "#859900"]
  let posição = aleatorio(cores.length)
  let escolhida = cores[posição]
  return escolhida;
}

function cronometro() {
  setInterval(mudarTitulo, 800);
}

cronometro();


function mudarTitulo(){

  let titulos = document.querySelectorAll(".rainbow")
  
  for(let i = 0; i < titulos.length;i++){
    let letras = titulos[i].querySelectorAll("span")
    
    let posição = aleatorio(letras.length)
    let cor = cores()
    let letraDaVez = letras[posição]
    
    if(letraDaVez.style.color !== cor){
      letraDaVez.style.color = cor
    }
    else{
      letraDaVez.style.color = cores()
    }
  }
  
}

function aleatorio(num){
  return Math.floor(Math.random() * num)
}

function trocar(){
  
  let splash = document.querySelector(".splash")
  splash.style.opacity = "0%"
  setTimeout(()=>{
    splash.classList.add('hidden')
  },610)
}