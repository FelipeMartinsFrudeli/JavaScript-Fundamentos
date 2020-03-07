function notas(nota, precision) {
    if(nota > 100) {
        console.log('Nota invalida!');
        return notas;
    } if(nota < 0) {
        console.log('Nota invalida!');
        return notas;
    }

    if(nota >= 36){
        let factor = Math.pow(5, precision);
        let tempNumber = nota * factor;
        let roundedTempNumber = Math.round(tempNumber);

        console.log("Aprovado!")
        console.log(`Passou com a nota de: ${roundedTempNumber / factor}!`)
    }

    if(nota < 36) {
        console.log("Reprovado!")
        console.log(`Reprovou com a nota de: ${nota}!`)
    }
}

notas(100, -1)