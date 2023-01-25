const a = {name: "Teste"}

const b = a //atribuição por referencia
b.name = "OPA"

console.log(a)

let c = 3 
let d = c
d++ //em tipos primitvos é atribuição por valor
console.log(c)

let valor //nãi inicializada 
let valor2 = null //ausência de valor
console.log(valor)
console.log(valor2)

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atruibuir undefined, deixar para a linguagem
//delete produto.preco //forma correta!!
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)