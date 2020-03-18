const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObj() {}
console.log(typeof Object, typeof MeuObj)
console.log(typeof __proto__)