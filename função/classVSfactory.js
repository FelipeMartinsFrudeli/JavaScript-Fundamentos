class Pessoa {
    constructor(nome) {
        this.nome = nome 
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()

const pessoa2 = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa2('Pedro')
p2.falar()