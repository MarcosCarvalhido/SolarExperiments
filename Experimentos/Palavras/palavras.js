let palavras = ["sagaz", "amago", "exito", "termo", "mexer", "nobre", "senso", "afeto", "algoz", "ética", "plena", "mútua", "tênue", "fazer", "assim", "sutil", "vigor", "aquém", "porém", "seção", "fosse", "sanar", "audaz", "poder", "ideia", "cerne", "inato", "moral", "desde", "sobre", "justo", "muito", "honra", "quiçá", "torpe", "sonho", "razão", "fútil", "ícone", "etnia", "anexo", "amigo", "égide", "tange", "lapso", "expor", "haver", "mútuo", "dengo", "tempo"]
// let palavras = ["afeto"]

let palavraDavez;

let linha = 1

let entrada = document.querySelector(".input")

entrada.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    Enter()
  }
})

function sortearPalavra() {
  let indexDaVez = Math.floor(Math.random() * palavras.length)
  return palavras[indexDaVez].toUpperCase().split("")
}

function selecionarInput() {
  return document.querySelector(".input").value.toUpperCase().split("")
}

function Enter() {
  let input = selecionarInput()
  if (input.length === 5) {

    for (let i = 0; i < input.length; i++) {
      let celula = document.querySelector(`.linha:nth-of-type(${linha}) .celula:nth-of-type(${i + 1})`)

      celula.innerText = input[i]
    }
    checar()
    document.querySelector(".input").value = ""
  }

}

function checar() {

  let input = selecionarInput()

  if (linha === 1) {

    palavraDavez = sortearPalavra()
  }
  let arrayTemp = [...palavraDavez]

  let preenchido
  for (let i = 0; i < input.length; i++) {
    preenchido = false

    let celula = document.querySelector(`.linha:nth-of-type(${linha}) .celula:nth-of-type(${i + 1})`)

    if (celula.innerText === palavraDavez[i]) {
      celula.classList.add("certo")
      arrayTemp.splice(i, 1, " ")
      preenchido = true
    }
    else if (arrayTemp.includes(celula.innerText)) {
      celula.classList.add("contem")
      preenchido = true
    }
    else {
      celula.classList.add("errado")
      preenchido = true
    }
  }
  if (preenchido) {
    linha++
  }
  checarVitoria()
}

function checarVitoria() {
  let popup = document.querySelector(".resultado")
  let input = selecionarInput()

  let resposta;
  let jogoTerminado = false

  if (linha > 6) {
    resposta = "<span class='derrota'>Perdeu!</span>"
    jogoTerminado = true
  }
  else if (input == palavraDavez) {
     resposta = "<span class='vitoria'>Ganhou!</span>"
    jogoTerminado = true
  }

  if(jogoTerminado){
      popup.innerHTML = `<span>Você ${resposta}.A palavra da vez era: <br><br><b>${palavraDavez.join("")}</b>     <section>
      <button class="botão" onclick="jogarNovamente()">Tentar Novamente</button>
    </section></span>`
    
    popup.classList.remove("hidden")
  }
}

function jogarNovamente(){
  linha = 1
  palavraDavez = ""
  
  let popup = document.querySelector(".resultado")
  popup.classList.add("hidden") 
  
  
  for(let i = 0; i< 6;i++){
    for(let j = 0; j< 5;j++){
      let celula = document.querySelector(`.linha:nth-of-type(${i + 1}) .celula:nth-of-type(${j + 1})`)
     celula.innerText = ""
      celula.classList.remove("certo")
      celula.classList.remove("errado")
      celula.classList.remove("contem")
    }
  }
}