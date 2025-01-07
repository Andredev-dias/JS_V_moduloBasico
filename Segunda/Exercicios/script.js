// Criar 3 variaveis number para efetuar o calculo de média entre as 3 e retornar uma resposta contendo uma string que se maior ou igual a  7 a frase "PASSOU", vai aparecer com a nota, se nao a frase "REPROVOU" vai aparecer junto com a nota no console do browser.
const n1 = 10
const n2 = 5
const n3 = 7

function media(){
    var res = (n1 + n2 + n3) / 3
    return res >= 7 ? `${res}, PASSOU` : `${res}, REPROVOU`
}
console.log(media())



// efetuar a função calcularComSwitchCase, so que agora usar blocos de if, else no lugar do ternario
function calcularComSwitchCase(n1, n2, op){
    switch (op) {
        case "+":
            return n1 + n2
        case "-":
            return n1 - n2
        case "x":
            return n1 * n2
        case "%":
            if(n2 !== 0){
                return n1 / n2
            } else {
                return "Divisão por 0 não pode ser efetuada"
            }
        default:
            return "Operador Inválido"
    }
}
console.log(calcularComSwitchCase(n1, n2, "%"))

