function Carro(velocidadeMAX = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0

    // Metodo publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMAX){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMAX
        }
    }

    // Metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

// ( Velocidade/350, Delta/20 )
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())