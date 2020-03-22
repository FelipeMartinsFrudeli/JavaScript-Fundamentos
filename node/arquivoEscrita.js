const fs = require('fs')

const produtos = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produtos), err => {
    console.log(err || 'Arquivo salvo!')
})