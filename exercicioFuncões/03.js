numero = 15
potencia = 2

function calcular(){
    
    let resultado = 1;

    for (let i = 0; i < potencia; i++){
        resultado *= numero;
    }

    console.log("O resultado é "+ resultado);
}

calcular();