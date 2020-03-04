let compararThis = function (param) {
    console.log(this === param)
}

compararThis(global)

const obj = {}
compararThis = compararThis.bind(obj)
compararThis(global)
compararThis(obj)

let compararThisArrow = param => console.log(this === param)
compararThisArrow(global)
compararThisArrow(module.exports)

compararThisArrow = compararThisArrow.bind(obj)
compararThisArrow(obj)
compararThisArrow(module.exports)