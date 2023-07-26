function ação(botão) {
  let num1 = Number(document.getElementById("input1").value);
  let num2 = Number(document.getElementById("input2").value);

  switch (botão) {
    case "adição":
      {
        document.getElementById("resultado").innerHTML = (num1 + num2);

      }
      break;
    case "subtração":
      {
        document.getElementById("resultado").innerHTML = (num1 - num2);
      }
      break;
    case "multiplicação":
      {
        document.getElementById("resultado").innerHTML = (num1 * num2);
      }
      break;
    case "divisão":
      {
        document.getElementById("resultado").innerHTML = ((num1 / num2).toFixed(2));
      }
      break;
    case "potenciação":
      {
        document.getElementById("resultado").innerHTML = ((num1 ** num2).toFixed(2));
      }
      break;
    case "raizQuadrada":
      {
        document.getElementById("resultado").innerHTML = (Math.sqrt(num1).toFixed(2) + " e " + Math.sqrt(num2).toFixed(2));
      }
      break;

  }
}
