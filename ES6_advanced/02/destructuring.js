
// Arrays
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0]
var banana = arr[1]
var orange = arr[2]
// vetor de 2 dimensões
var tomato = arr[3][0]

// Destructuring Assingment
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']]

console.log( apple, apple2, tomato, tomato2 )


// Objects
var [{ name: fruitName }] = arr;

var obj = {
    name2: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['Black', 'Blue']
    }
}

var age = obj.props.age
console.log(obj.name2)

var { 
    props: { 
        age: age2,
        favoriteColors: [color1, color2] 
    } 
} = obj;
console.log(obj)

console.log(color1)