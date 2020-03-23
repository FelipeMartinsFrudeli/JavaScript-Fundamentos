// ES8: Object.value / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação literal 
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'bem vindo de volta!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal{}
class Cachorro extends Animal {
    info() {
        return 'Animal doméstico'
    }
}

console.log(new Cachorro().info())