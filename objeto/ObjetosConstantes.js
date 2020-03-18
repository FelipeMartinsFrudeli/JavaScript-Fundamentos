// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}

// Deixa o Objeto sem possibilidade de variar
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)