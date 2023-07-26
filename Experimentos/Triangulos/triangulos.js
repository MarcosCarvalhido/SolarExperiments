//checa se os lados podem criar um triangulo
function checarTriangulo() {
  let ladoA = +document.getElementById("ladoA").value;
  let ladoB = +document.getElementById("ladoB").value;
  let ladoC = +document.getElementById("ladoC").value;
  let resposta;

  //Determina se o imput é valido ou não.
  if (ladoA === 0 || ladoB === 0 || ladoC === 0) {
    resposta = " Por favor preencha todos os campos e tente novamente!"
  }
  else if (ladoA < 0 || ladoB < 0 || ladoC < 0) {
    resposta = " Um triangulo não pode conter numeros negativos!"
  }
  //Determina se os numeros podem formar um triangulo.
  else if (ladoA + ladoB <= ladoC) {
    resposta = " <strong> Não é um triangulo! </strong> .A soma de 2 lados não pode ser maior que o terceiro lado!"
  }
  else if (ladoC + ladoB <= ladoA) {
    resposta = " <strong> Não é um triangulo! </strong> .A soma de 2 lados não pode ser maior que o terceiro lado!"
  }
  else if (ladoC + ladoA <= ladoB) {
    resposta = " <strong> Não é um triangulo! </strong> .A soma de 2 lados não pode ser maior que o terceiro lado!"
  }
  else {
    resposta = " <strong> É sim um triangulo! </strong> "
    triangulo(ladoA, ladoB, ladoC)
    tipoDoTriangulo(ladoA, ladoB, ladoC)
  }
  document.getElementById("resultadoChecar").innerHTML = resposta;

}

//Determina qual tipo de trangulo.
function tipoDoTriangulo(ladoA, ladoB, ladoC) {
  let resposta;

  //Se for um triangulo Equilatero.
  if (ladoA === ladoB && ladoB === ladoC && ladoC === ladoA) {
    resposta = "Esse triangulo é <strong>Equilátero!</strong> Ele possui todos os lados iguais!"
  }
  //Se for um trangulo isosceles.
  else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
    resposta = "Esse triangulo é <strong>Isósceles!</strong> Ele possui dois lados iguais!"
  }
  //se for um trangulo Escaleno.
  else {
    resposta = "Esse triangulo é <strong>Escaleno!</strong> Ele possui todos os lados diferentes!"
  }
  document.getElementById("resultadoTipo").innerHTML = resposta;
}
//Desenha o triangulo se for possivel
function triangulo(ladoA, ladoB, ladoC) {
  document.getElementById("triangulo").style.display = "block";

  document.getElementById("triangulo").style.borderRightWidth = ladoA + "px";
  document.getElementById("triangulo").style.borderBottomWidth = ladoB + "px";
  document.getElementById("triangulo").style.borderLeftWidth = ladoC + "px";
}
