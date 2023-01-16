{
    {
        {
            {
                var sera = 'Sera???'
            }
        }
   }
}

console.log(sera) //visivel fora do bloco

function teste(){
    var local = 123
}

teste()
//console.log(local) //se definir dentro da função ela n fica visível

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//var ignora o bloco a n ser que seja um função

