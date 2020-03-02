InteiroAleatorio = (min, max) => {
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

let opcao = 0

 do {
    opcao = InteiroAleatorio(-1, 10)
    console.log(`a opcao escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Fim!')