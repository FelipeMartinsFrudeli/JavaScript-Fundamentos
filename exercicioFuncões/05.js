
function formatarMoeda(num) {
    console.log(num.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
}

formatarMoeda(1000.47)