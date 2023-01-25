function tratarErroELancar(erro){
    //throw 'mensagem'
    //throw 10
    //throw new Error('....')
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj){
    try{ //tentar código que possivelmente vai dar error
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e){ //tratar o erro
        tratarErroELancar(e)
    } finally{ //semprpe executado
        console.log('final')
    }
}

const obj = { name: 'Roberto'}
imprimirNomeGritando(obj)