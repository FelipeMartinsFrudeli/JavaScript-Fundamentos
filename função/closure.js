// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variaveis externas a função 

// contexto lexico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function Dentro() {
        return x 
    }
    return Dentro
}

const minhaFunção = fora()
console.log(minhaFunção())