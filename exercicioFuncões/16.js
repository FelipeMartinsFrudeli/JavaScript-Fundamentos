
function Calc(num1, operacao, num2) {

    if(num1){
        if(num2){

        } else{
            console.log('Numero invalido!')
        }
    }


    switch(operacao) {
        case '+':
            console.log(num1 + num2)
        break;

        case '-':
            console.log(num1 - num2)
        break;

        case '*':
            console.log(num1 * num2)
        break;

        case '/':
            console.log(num1 / num2)
        break;

        default: console.log('Expresão invalida!')
    }
}

// Numero, Expresão, Numero
Calc(10, '/', 10)