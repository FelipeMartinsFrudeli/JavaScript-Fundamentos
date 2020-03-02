Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimir = function (nota) {
    if (nota.entre(9,10)) {
        console.log('Quadro de honra!')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado!')
    } else if (nota.entre(5, 6.99)) {
        console.log('Recuperação!')
    } else if (nota.entre(0, 4.99)) {
        console.log('Reprovado!')
    } else {
        console.log('Nota invalida!')
    }

    console.log('fim')
}

imprimir(10)