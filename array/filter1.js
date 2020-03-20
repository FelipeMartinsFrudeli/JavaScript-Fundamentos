const produtos = [
    {nome: 'Nootbok', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 3199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]
console.log(produtos.filter(function(p) {
    return p.preco > 500 && p.fragil == true
}))