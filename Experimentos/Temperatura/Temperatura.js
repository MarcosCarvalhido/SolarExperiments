
//Escolhe entre os diferentes metodos de conversão.
function escolha(opção) {

  let geo = document.getElementById("geo");
  let cidade = document.getElementById("cidade");
  let manual = document.getElementById("manual");
  let botões = document.getElementById("botões");
  let cabeçalho = document.getElementById("cabeçalho")
  let botãoVoltar = document.getElementById("escolherOutro");

  switch (opção) {
    case 1: {
      geo.style.display = "block";
      cidade.style.display = "none";
      manual.style.display = "none";
      botões.style.display = "none";
      cabeçalho.style.display = "none";
      botãoVoltar.style.display = "inline";
      break;
    }
    case 2: {
      geo.style.display = "none";
      cidade.style.display = "block";
      manual.style.display = "none";
      botões.style.display = "none";
      cabeçalho.style.display = "none";
      botãoVoltar.style.display = "inline";
      break;
    }
    case 3: {
      geo.style.display = "none";
      cidade.style.display = "none";
      manual.style.display = "block";
      botões.style.display = "none";
      cabeçalho.style.display = "none";
      botãoVoltar.style.display = "inline";
      break;
    }
    case 4: {
      geo.style.display = "none";
      cidade.style.display = "none";
      manual.style.display = "none";
      botões.style.display = "block";
      cabeçalho.style.display = "block";
      botãoVoltar.style.display = "none";
      break;
    }
  }
}

//Conversão de temperatura por Geolocalização.
function conversãoGeo() {
  navigator.geolocation.getCurrentPosition(localGeo);

  function localGeo(local) {
    let lat = local.coords.latitude;
    let lon = local.coords.longitude;

    // https://openweathermap.org/current  
    const apiKey = "8f57cb746c4c1d4b48b7f35eba6f6230";
    const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    const unidade = 'metric'


    fetch(`${apiEndpoint}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unidade}`)
      .then(response => response.json())
      .then(data => {
        temperaturaAtual(data.main.temp, 1);
      })
  }
}

//Conversão de temperatura por cidade
function convesãoCidade() {

  // https://openweathermap.org/current
  const apiKey = "8f57cb746c4c1d4b48b7f35eba6f6230";
  const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  const cidade = document.getElementById("cidadeInput").value;
  const unidade = 'metric'

  fetch(`${apiEndpoint}?q=${cidade}&appid=${apiKey}&units=${unidade}&lang=${unidade}`)
    .then(response => response.json())
    .then(data => {
      temperaturaAtual(data.main.temp, 2)

    })
}

//Devolve as conversões de temperatura baseada na resposta do API.
function temperaturaAtual(temperatura, id) {

  document.getElementById(`resultadoC${id}`).innerHTML = (temperatura + " C°");
  document.getElementById(`resultadoF${id}`).innerHTML = (temperatura * 1.8 + 32).toFixed(2) + " F°";
  document.getElementById(`resultadoK${id}`).innerHTML = ((temperatura + 273.15)).toFixed(2) + " K°";
}

//Conversão de Temperatura manual
function conversãoManual() {
  let valorEntrada = Number(document.getElementById("entrada").value);
  if (isNaN(valorEntrada))
    alert("Valor não é um numero, tente novamente!")

  let opçao1 = document.querySelector('input[name="opção1"]:checked').value
  let opçao2 = document.querySelector('input[name="opção2"]:checked').value



  let Converções = [["c_c", "c_f", "c_k"], ["f_c", "f_f", "f_k"], ["k_c", "k_f", "k_k"]];
  let index = Converções[opçao1][opçao2];

  switch (index) {
    case "c_c":
      {
        document.getElementById("resultado").innerHTML = (valorEntrada + " C°");
      }
      break;

    case "c_f":
      {
        document.getElementById("resultado").innerHTML = ((valorEntrada * 1.8 + 32).toFixed(2) + " F°");
      }
      break;

    case "c_k":
      {
        document.getElementById("resultado").innerHTML = (resultado + " K°");
      }
      break;


    case "f_c":
      {
        document.getElementById("resultado").innerHTML = (((valorEntrada - 32) / 1.8).toFixed(2) + " C°");
      }
      break;

    case "f_f":
      {
        document.getElementById("resultado").innerHTML = (valorEntrada + " F°");
      }
      break;

    case "f_k":
      {
        document.getElementById("resultado").innerHTML = (((valorEntrada + 459.67) / 1.8).toFixed(2) + " K°");
      }
      break;


    case "k_c":
      {
        document.getElementById("resultado").innerHTML = ((valorEntrada - 273.15).toFixed(2) + " C°");
      }
      break;

    case "k_f":
      {
        document.getElementById("resultado").innerHTML = (((valorEntrada * 1.8) - 459.67).toFixed(2) + " F°");
      }
      break;

    case "k_k":
      {
        document.getElementById("resultado").innerHTML = (valorEntrada + " K°");
      }
      break;

    default:
      alert("Valor não enecontrado, tente novamente!");
      break;
  }
}