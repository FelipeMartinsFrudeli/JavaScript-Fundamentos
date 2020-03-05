function Pessoa(nome) {

    //Para o acesso global
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}

const Diego = new Pessoa('Diego')
Diego.falar()
console.log(Diego.nome)