// par nome / valor

const saudacao = 'ola' // contexto lexico 1

function exec() {
    const saudacao = 'falaa'  // constexto lexico 2
    return saudacao
}


//  Objetos são grupos aninhados de pares nome/valor 
const cliente = {
    nome: 'Pedro',
    idade: '22',
    endereço: {
        rua: 'vale de ouro',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)