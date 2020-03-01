
const Pessoa = {
    nome: 'Ana',
    idade: 50,
    endereco: {
        rua: 'Vale de ouro',
        numero: 123
    }
}

const { nome: n, idade: i, endereco: { numero: num } } = Pessoa
console.log(n, i, num)


const [n1, n2, n3, n4 = 10] = [1, 10, 53]
console.log(n1, n2, n3, n4)


const [, [, nota]] = [[8, 9, 8], [7, 6, 5]]
console.log(nota)