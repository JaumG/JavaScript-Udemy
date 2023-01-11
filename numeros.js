const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.654
const avaliacao2 = 6.876

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // limita as casas decimais
console.log(media.toString(2)) // o 2 indica binário
console.log(typeof media) //number é tanto inteiro quanto flutuante



console.log(7/0) //Infinito
console.log("10" / 2)
console.log("Show" * 2)
console.log(0.1 + 0.7) // o ponto flutuante é meio impreciso por ser mais rapido

//console.log(10.toString()) não funciona 
console.log((10.345).toFixed(2))
console.log((10.345).toString())

console.log("10" / 2)
console.log("3" - 2)
console.log("3" + 2) // String ganha



