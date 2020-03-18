// Object.preventExtensions
const Produtos = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensivel:', Object.isExtensible(Produtos))

Produtos.nome = 'Borracha'
Produtos.desc = 'Borracha escolar'
delete Produtos.tag
console.log(Produtos)


// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


// Object.freeze = selado + valores constantes