const prod1 = {}

prod1.nome = 'Celular'
prod1.preco = 5430.40
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaços
console.log(prod1)

const prod2 = { 
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 'Exemplo'
        }
    }
}

console.log(prod2)

//O que é JSON (Java Script Objetc Notation)

// '{ "nome" : "Camisa Polo", "preco" : 15.50}'