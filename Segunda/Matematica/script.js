const n1 = 5, n2 = 2

function somar(numero1, numero2){
    return numero1 + numero2
}
console.log(somar(n1, n2), "RESULTADO DA SOMA")

function sub(num1, num2){
    return num1 - num2
}
console.log(sub(n1, n2), "RESULTADO DA SUBTRAÇÃO")


// const multi = (n1, n2) => {
//     return n1 * n2
// }

const multi = (n1, n2) => n1 * n2
console.log(multi(n1, n2), "RESULTADO DA MULTIPLICAÇÃO")

// function div(n1, n2){
//     if(n2 === 0){
//         return "Não é possível divisão por 0"
//     } else {
//         return n1 / n2
//     }
// }

// function div(n1, n2){
//     if(n2 !== 0){
//         return n1 / n2
//     } else {
//         return "Não é possível divisão por 0"
//     }
// }

const div = (n1, n2) => n2 !== 0 ? n1 / n2 : "Não é possível dividir por 0"
console.log(div(n1, n2), "RESULTADO DA DIVISÃO")

function calcular(numero1, numero2, operador){
    if(operador === "+"){
        return numero1 + numero2
    } else if(operador === "-") {
        return numero1 - numero2
    } else if(operador === "*"){
        return numero1 * numero2
    } else if(operador === "/"){
        if(numero2 !== 0){
            return numero1 / numero2
        } else {
            return "Divisão por 0 não pode ser efetuada"
        }
    } else {
        return "Operador Inválido"
    }
}
console.log(calcular(5,1,"/"), "RESULTADO DO CALCULO DESEJADO")


function calcularComSwitchCase(n1, n2, op){
    switch (op) {
        case "+":
            return n1 + n2
        case "-":
            return n1 - n2
        case "x":
            return n1 * n2
        case "%":
            return n2 === 0 ? "não posso dividir por 0" : parseFloat((n1 / n2).toFixed(1))
        default:
            return "Operador Inválido"
    }
}

console.log(calcularComSwitchCase(2, 3, "%"))





