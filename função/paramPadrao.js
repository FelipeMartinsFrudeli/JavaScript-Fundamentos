// estrategia 1 para tornar um valor padrao
function soma1(a, b ,c) {
    a = a || 1 
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3, 4 para tornar um valor padrao 
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? a : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))


// estrategia para tornar padrao do es2015
function es2015(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(es2015(), es2015(3), es2015(1, 2, 3), es2015(0, 0, 0))