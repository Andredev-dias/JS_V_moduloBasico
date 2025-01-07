const primeiro = 10
const segundo = 2
const terceiro = 5

function soma(){
    var a = 5
    var b = 2
    var res = a + b
    printSomething()
    return res
}

function printSomething(){
    console.log("printando um texto qualquer")
}

function somaPorParametros(n1, batata, n3, n4, n5){
    return n1 + batata + n3 + n4 + n5
}

const somaPorParametro = (n1, n2, n3,n4, n5) => n1 + n2 + n3 + n4 + n5

console.log(somaPorParametros(primeiro, segundo, terceiro, 8, 9))

const printSome = () => console.log("printando blablabla")

console.log(somaPorParametro(1,1,1,1,1))

// NaN - not a number