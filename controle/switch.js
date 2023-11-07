const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
            console.log('Recuperação')
            break
        case 5: case 4: case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota invalida')
    }
}

imprimirResultado(5.3)
imprimirResultado(10)
imprimirResultado(3.4)
imprimirResultado(9)