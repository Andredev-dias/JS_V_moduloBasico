function calcular(id1, id2, respId, operador) {
    // alert(id1 + ", " + id2 + ", " + respId + ", " + operador)
    // alert(`${id1}, ${id2}, ${respId}, ${operador} = parametros passados`)
    var num1 = parseFloat(document.getElementById(id1).value);
    var num2 = parseFloat(document.getElementById(id2).value);
    var resultado;

    switch (operador) {
      case "+":
        resultado = num1 + num2
        break;
      case "-":
        resultado = num1 - num2
        break;
      case "*":
         resultado = num1 * num2
        break;
      case "/":
        if(num2 !== 0){
            resultado = num1 / num2
        }else{
            resultado = "Erro: divisao por 0"
        }
        break;
      default:
        resultado = "Operador invalido"
        break;
    }
    // if (Number.isInteger(resultado)){
    //     return (document.getElementById(respId).textContent = resultado)
    // } else {
    //     return (document.getElementById(respId).textContent = resultado.toFixed(2))
    // }
    document.getElementById(respId).textContent = formatNumber(resultado)
  }

  function formatNumber(n){
    if(Number.isInteger(n)){
        return n;
    }else{
        if(n !== "Erro: divisao por 0"){
            return n.toFixed(2)
        }else{
            return n
        }
    }
  }
