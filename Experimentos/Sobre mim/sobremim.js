function mudarCor(id) {
  document.getElementById(`celula${id}`).style.color = cor()
}


function cor() {
  let cores = ["#b58900", "#cb4b16", "#dc322f", "#d33682", "#6c71c4", "#268bd2", "#2aa198", "#859900"]
  let escolhida = cores[Math.floor(Math.random() * 8)]
  return escolhida;
}

function mudarTitulo() {
  let id = Math.floor(Math.random() * 15 + 1)
  document.getElementById(`tID${id}`).style.color = cor()
}
function cronometro() {
  setInterval(mudarTitulo, 800);
}

cronometro();
