
// Default (do jeito velho)
function multiply(a, b) {
    if(typeof b === 'undefined'){
        b = 1;
    }
    return a * b;
}
console.log(multiply(5))
console.log(multiply(5, 0))


// Default (do jeito novo)
function multiply_new(a, b = 1){
    return a * b;
}
console.log(multiply(5))
console.log(multiply(5, 0))