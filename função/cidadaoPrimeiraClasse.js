

// Forma literal
function fun1( ) { }


// Armazenando em uma variavel
const fun2 = function ( ) { }


// Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))


// Armazenar em um atributo de objeto
const obj = {}
obj.test = function () { return 'Test' }
console.log(obj.test())


// Passar função como parametro
function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})


// Uma fução pode retornar/conter uma função
function Soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

Soma(2, 3)(4)