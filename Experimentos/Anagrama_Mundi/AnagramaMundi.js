
var paisDaVez; 

//https://servicodados.ibge.gov.br/api/docs/localidades#api-Paises-paisesGet
async function EscolherPais(){
  let paises = []

  const url = "https://servicodados.ibge.gov.br/api/v1/localidades/paises"
  const resposta = await fetch(url)
  const  respostas = await resposta.json()
  respostas.forEach(item => paises.push({
    nome: item.nome,
    região: item["sub-regiao"].nome
  }))
  
  let sortear = aleatorio(paises.length)
  paisDaVez = paises[sortear].nome 
  let DicaDaVez = paises[sortear].região 

  let anagrama = document.querySelector(".anagrama")
  let dica = document.querySelector(".dica")
  
  anagrama.innerText = dividirPalavras(paisDaVez)
  dica.innerText = DicaDaVez
  
}

function embaralhar(array){
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

function aleatorio(num){
  return  Math.floor(Math.random() * num);
}

function dividirPalavras(paisDaVez){
  
let array = paisDaVez.split("")
embaralhar(array)

return array
}

function conferirPalavras(entradaJogador){
console.log("b")
  if(vidas === 1){
    alert("VOCÊ PERDEU!")
    vidas--
  }
  else{
     if(entradaJogador === paisDaVez){
      alert("VOCÊ VENCEU! O pais da vez era: " + paisDaVez)
      EscolherPais()
      document.querySelector(".tentativa").value = ""
     }
    else {
      alert("Responta errada!")
      vidas--
    }
  }
 
}

let dificuldade = document.querySelectorAll(".botDificuldade")

var vidas = 0
var ajudas = 3

for(let i = 0; i < dificuldade.length; i++){
    dificuldade[i].onclick = () => {

      if(dificuldade[i] === dificuldade[0]){
       vidas = 15
        dificuldade[1].disabled = true
        dificuldade[2].disabled = true
        começar.disabled = false
      }
      else if(dificuldade[i] === dificuldade[1]){
        vidas = 10
        dificuldade[0].disabled = true
        dificuldade[2].disabled = true
        começar.disabled = false
      }
      else{
        vidas = 5,
        dificuldade[0].disabled = true
        dificuldade[1].disabled = true
        começar.disabled = false
      }
    }
  }

let começar = document.querySelector(".começar")
começar.disabled = true

let jogo = document.querySelector(".jogo")
let contadorVidas = document.querySelector(".vidas")
let dificuldades = document.querySelector(".dificuldades")

começar.onclick = () => {
  contadorVidas.innerText = vidas
  EscolherPais()
  jogo.style.opacity = "100%"
  começar.style.display = "none"
  dificuldades.style.display = "none"
}

let conferir = document.querySelector(".conferir")
let entradaJogador = document.querySelector(".tentativa")

conferir.onclick = () => {
  conferirPalavras(entradaJogador.value)
  contadorVidas.innerText = vidas
  console.log("a")
}

let cheat = document.querySelector(".cheat")
cheat.onclick = () =>{
  EscolherPais()
}