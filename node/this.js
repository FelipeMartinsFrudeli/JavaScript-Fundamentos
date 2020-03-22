console.log(this === global)  // False
console.log(this === module)  // False

console.log(this === module.exports) // True
console.log(this === exports) // True

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === module.exports) // False
    console.log(this === global) // True
}

logThis()