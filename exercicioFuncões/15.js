
function comprarCarro(carro, dinheiro = 0) {

        switch(carro){
            case 'Fusca':
                if(dinheiro >= 3100) {
                    console.log(`${carro} comprado com sucesso!`)
                    console.log(`Você tem de saldo restante R$${dinheiro - 3100} (reais)`)
                } else{
                console.log('Dinheiro Insuficiente!')
            }
        break;

            case 'Mobilete':
                if(dinheiro >= 1700) {
                    console.log(`${carro} comprado com sucesso!`)
                    console.log(`Você tem de saldo restante R$${dinheiro - 1700} (reais)`)
                } else{
                    console.log('Dinheiro Insuficiente!')
            }
        break;

            default: console.log('Carro invalido!')
        }

        
    }

comprarCarro('Mobilete', 1900)