
function Comanda(codigo, unidade = 1) {

    let Hamburguer = 400 
    let Refrigerante = 500
    let Suco = 600

    if(codigo == Suco){
        if(unidade >= 1) {
            const Nome = 'Suco'
            const preço = 2.80
            console.log(`Código: ${codigo}`)
            console.log(`Unidade: ${unidade}`)
            console.log(`Preço: ${preço * unidade}`)
            console.log(`Nome: ${Nome}`)
        } else{
            console.log('Coloque a unidade!')
        }
    } 
    if(codigo == Refrigerante){
        if(unidade >= 1) {
            const Nome = 'Refrigerante'
            const preço = 5.20
            console.log(`Código: ${codigo}`)
            console.log(`Unidade: ${unidade}`)
            console.log(`Preço: ${preço * unidade}`)
            console.log(`Nome: ${Nome}`)
        } else{
            console.log('Coloque a unidade!')
        }
    }  
    if(codigo == Hamburguer){
        if(unidade >= 1) {
            const Nome = 'Hamburguer'
            const preço = 14.50
            console.log(`Código: ${codigo}`)
            console.log(`Unidade: ${unidade}`)
            console.log(`Preço: ${preço * unidade}`)
            console.log(`Nome: ${Nome}`)
        } else{
            console.log('Coloque a unidade!')
        }
    }
}

Comanda(400, 1)