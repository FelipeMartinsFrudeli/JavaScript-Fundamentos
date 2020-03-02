function soBoaNoticia(nota) {

    if(nota >= 7) {
        console.log('aprovado com ' + nota)
    }
}

soBoaNoticia(8.3)

function soSeForVerdade(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

soSeForVerdade()
soSeForVerdade(null)
soSeForVerdade(undefined)
soSeForVerdade(NaN)
soSeForVerdade('')
soSeForVerdade(0)
soSeForVerdade(-1)
soSeForVerdade(' ')
soSeForVerdade('?')
soSeForVerdade([])
soSeForVerdade([1, 2])
soSeForVerdade({})