const ImprimirSoma = function(a, b) {
    console.log(a + b)
}

ImprimirSoma(2, 3)

// Arrow Function 
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno Implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))