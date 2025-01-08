function somar(){
    //cuidar com nomes de variaveis nada a ver
    var batata = document.getElementById("num1").valueAsNumber
    var melancia = parseFloat(document.getElementById("num2").value)
    var resp = document.getElementById("respSoma")
    resp.textContent = (batata + melancia).toFixed(1)
}

function sub(){
    var numero01 = parseFloat(document.getElementById("num3").value)
    var numero02 = parseFloat(document.getElementById("num4").value)
    var resp = document.getElementById("respSub")
    resp.innerHTML = (numero01 - numero02).toFixed(1)
}

function multi(){
    var n1 = parseFloat(document.getElementById("num5").value)
    var n2 = parseFloat(document.getElementById("num6").value)
    var resposta = document.getElementById("respMulti")
    resposta.innerHTML = (n1 * n2).toFixed(1)
}

function div(){
   var n1 = parseFloat(document.getElementById("num7").value)
   var n2 = parseFloat(document.getElementById("num8").value)
   var dadoFinal = document.getElementById("respDiv")
   if(n2 !== 0){
       dadoFinal.innerHTML = (n1 / n2).toFixed(1)
   }else{
       dadoFinal.textContent = "Não podemos dividir por 0"
       dadoFinal.style.color = "red"
       document.getElementById("num8").style.border = "2px solid red"
   }
}

function media(){
    var n1 = parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)
    var n3 = parseFloat(document.getElementById("n3").value)
    var n4 = parseFloat(document.getElementById("n4").value)
    var n5 = parseFloat(document.getElementById("n5").value)
    var media = document.getElementById("respMedia")
    var res = (n1 + n2 + n3 + n4 + n5) / 5
    if(res >= 7 && res !== 7.6){
        media.textContent = res.toFixed(1) + " - " + "PASSOU DE ANO"
        media.style.color = "green"
        media.style.fontSize = "20px"
        media.style.fontWeight = "bold"
        media.style.fontFamily = "cursive"
        media.style.backgroundColor = "black"
        media.style.borderRadius = "15px"
    } else if(res === 7.6){
        res = 8
        media.textContent = res.toFixed(1) + " - " + "PASSOU DE ANO"
        media.style.color = "green"
        media.style.fontSize = "20px"
        media.style.fontWeight = "bold"
        media.style.fontFamily = "cursive"
        media.style.backgroundColor = "black"
        media.style.borderRadius = "15px"
    } else {
        media.textContent = res.toFixed(1) + " - " + "REPROVOU, BORA ESTUDA"
        media.style.color = "red"
        media.style.fontSize = "20px"
        media.style.fontWeight = "bold"
        media.style.fontFamily = "cursive"
        media.style.backgroundColor = "black"
        media.style.borderRadius = "15px"
    }
}

function contar(){
    // var a = document.getElementById("it").valueAsNumber //javascript puro
    var numero = parseFloat($("#it").val()) //javascript com jquery
    var res = ""

    if(numero <= 1000){
        for(var cont = 1; cont <= numero; cont++){
            res = res + cont + "<br>" + "</br>"
        }
        $("#result").html(res)
    }else{
        $("#result").text("Digite um número menor que 1000!!!")
    }
}







