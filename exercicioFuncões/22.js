
function JurosAnuidade(mes, plano) {

if(mes <= 12) {
    if(mes >= 1) {
        if(plano == 'Completo') {

            let preço = 1400
            let Porcentagem = 5

            const AumentoMes = parseFloat(mes*(Porcentagem/100));
            const TotalMes = parseFloat(mes) + parseFloat(AumentoMes);

            const AumentoPreço = parseFloat(preço*(TotalMes/100));
            const Total = parseFloat(preço) + parseFloat(AumentoPreço);

            console.log(Total)
            } else{
                console.log('Plano invalido!')
            }
        } else{
            console.log('Mes invalido!')
        }
    } else{
        console.log('Mes invalido!')
    }
}

JurosAnuidade(12, 'Completo')