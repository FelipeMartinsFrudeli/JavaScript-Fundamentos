

class product {}
console.log(typeof product)


function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 5))