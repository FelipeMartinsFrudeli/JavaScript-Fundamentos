

const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}
imprimirResultado(10)


// CUIDADO COM O PONTO E VIRGULA (LINGUAGEM FRACAMENTE TIPADA)

const imprimirResultadoAB = function(nota) {
    if(nota >= 7) {
        console.log('A')
    } else; {
        console.log('B')
    }
}
imprimirResultadoAB(8)
