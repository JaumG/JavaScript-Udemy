//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

//imprimirSoma(2, 3)
//imprimirSoma(3)
//imprimirSoma(2,3,4,5,6,7)
//imprimirSoma()

//Funcao com retorno
function soma(a, b=0){
    return a + b
}

//console.log(soma(2, 9))
//console.log(soma(10))

//Armazenando uma funcao em uma variavel

const somar = function (a, b){
    console.log(a + b)
}

somar(2,3)

// Funcao arrow em uma variavel

const somando = (a, b) => {
    return a+b
}

console.log(soma(2,3))

//retorno implícito

const subtracao = (a,b) => a-b

console.log(subtracao(4,2))