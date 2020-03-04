const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

// Arrow function simplifica o evento
fabricantes.forEach(fabricante2 => console.log(fabricante2))