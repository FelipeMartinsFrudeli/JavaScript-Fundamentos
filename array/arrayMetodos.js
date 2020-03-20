const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Tira o ultimo elemento
console.log(pilotos)

pilotos.push('Verstapen') // Adiciona um elemento
console.log(pilotos)

pilotos.shift() // Tira o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice pode remover e adicionar elementos

// adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1)

// Novo array
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)