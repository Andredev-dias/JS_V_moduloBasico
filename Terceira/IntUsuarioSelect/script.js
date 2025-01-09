function calc() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operador = document.getElementById("operador").value;
  var resultado;

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        resultado = "Erro na conta por 0";
      }
      break;
    default:
      resultado = "Operador invalido";
      break;
  }
  if (resultado !== "Erro na conta por 0") {
    var a = document.getElementById("resultado");
    a.textContent = format(resultado);
    a.style.fontSize = "48px";
  } else {
    var a = document.getElementById("resultado");
    a.textContent = resultado;
    a.style.fontSize = "16px";
    a.style.textAlign = "center";
  }
}

const format = (num) => (Number.isInteger(num) ? num : num.toFixed(2));
