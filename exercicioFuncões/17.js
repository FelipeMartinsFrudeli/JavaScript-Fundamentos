
function PromoverFuncionario(Salario, aumento) {

    if(aumento == 'A') {

        let Porcentagem = 10

        const AumentoA = parseFloat(Salario*(Porcentagem/100));
        var Total = parseFloat(Salario) + parseFloat(AumentoA);

        console.log(Total)
    }

    if(aumento == 'B') {

        let Porcentagem = 15

        const AumentoB = parseFloat(Salario*(Porcentagem/100));
        var Total = parseFloat(Salario) + parseFloat(AumentoB);

        console.log(Total)
    }

    if(aumento == 'C') {

        let Porcentagem = 20

        const AumentoC = parseFloat(Salario*(Porcentagem/100));
        var Total = parseFloat(Salario) + parseFloat(AumentoC);

        console.log(Total)
    }
}

PromoverFuncionario(1250, 'C')