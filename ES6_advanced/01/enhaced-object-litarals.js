
// primeiro método
var propName = 'teste'
var obj = {};
obj[propName + 'concat'] = 'prop value'

var prop1 = 'prop_teste'

function soma(a,b){
    return a + b;
}

var obj = {
    prop1: prop1,
    soma
}
console.log(obj.soma(1,5))



// short hand para declaração de objs
var propName2 = 'teste2'
var obj2 = {
    [propName2 + 'concat']: 'prop value'
}

var prop2 = 'prop_teste'

var obj2 = {
    prop2,
    soma2(a,b){
        return a + b;
    }
}
console.log(obj2.soma2(1,5))