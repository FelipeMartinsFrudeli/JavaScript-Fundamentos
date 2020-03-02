const notas = [7.9, 4.6, 9.3, 2.5]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29
}

for(let atributo in pessoa) {
    console.log(`${atributo}:  ${pessoa[atributo]}`)
}