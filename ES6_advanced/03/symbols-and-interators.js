// Symbols (identificador unico e propriedades privadas)

const uniqueID = Symbol();
console.log(uniqueID)

const obj = {
    [uniqueID]: 'id1'
}
console.log(obj) 

// well know simbols
Symbol.iterator
Symbol.split
Symbol.toStringTag



// Método Velho

const arr = [1,2,3]
const it = arr[Symbol.iterator]()

// Exemplo com while
while (true) {
    let {value, done} = it.next()
    
    console.log(value)
    if (done){
        break
    }
}

/* 
// 1
console.log(it.next())

// 2
console.log(it.next())

// 3
console.log(it.next())

// Undefined (done: true)
console.log(it.next())
*/



// Método novo 
//  for "of" é para ver os valores,
// já o for "in" é para ver o index
for (let value of arr) {
    console.log(value)
}



// separação dos valores no console
console.log(" ")



// Fazendo for of em objetos

const obj2 = {
    values: [1,2,3,4],
    [Symbol.iterator](){
        let i = 0;

        return {
            next: () => {
                i++

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

// funciona tanto com o for como o spread
for (let value of obj2){
    console.log(value)
}

console.log(" ")

const arr2 = [...obj2]
console.log(arr2)