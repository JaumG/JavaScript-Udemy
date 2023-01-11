let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!isAtivo)

console.log('Os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) //pega o valor atribuido pode ser qualquer coisa q da true

console.log('Os falsos.....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar')
console.log(!!('' || null || 0 || 'epa' || ' '))
console.log('' || null || 0 || 'epa' || ' ') //retorna o primeiro verdadeiro

let nome = 'Lucas'
console.log(nome || 'Desconhecido') //se não tivesse atribuido iria ser Desconhecido
