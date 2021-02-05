
// Arguments (se refere a todos os argumentos ou parametros da função)
// formato Object
function params(a, b) {
    console.log(arguments)
}
params(5, 3, 2)


// rest operator (...)
// formato Array
function params_rest(number1, ...args) {

// Number1 vai pegar o primeiro valor e o args vai pegar o restante dos parametros
    console.log(number1, args)
}
params_rest(4, 8, 6)


// spread operator
// pode "quebrar" strings, arrays ou numeros em pedaçinhos
const str = 'teste 123'

function logArgs(...args) {
    console.log(args)
}
logArgs(...str)