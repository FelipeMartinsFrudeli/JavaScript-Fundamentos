
// Generators

function* hello() {
    console.log('Hello')
    yield 1;

    console.log('From')
    const value = yield 3;

    console.log("Function", value)
    yield;

    console.log("End")
}
const it = hello();

console.log(it.next())
console.log(it.next())
console.log(it.next('!'))  
console.log(it.next())



// objetos iteraveis com generator

const obj = {
    value: [1,2,3,4],
    *[Symbol.iterator]() {
        for(let i = 0; i < this.value.length; i++){
            yield this.value[i];
        }
    }
}
for (let value of obj) {
    console.log(value)
}