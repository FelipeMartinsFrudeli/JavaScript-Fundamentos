const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma = e => e + 10
const multiplicacao = e => e * 2
const monetario = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma).map(multiplicacao).map(monetario)
console.log(resultado)