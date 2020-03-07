
function Investir(capital, tempo) {
    
    let juros = 0.007

    const calcularTempo = tempo + juros

    const Total = calcularTempo * capital

    console.log(`Seu rendimento total foi de:`, Total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
}


// 51 Reais / 1 mes
Investir(51, 0.1)