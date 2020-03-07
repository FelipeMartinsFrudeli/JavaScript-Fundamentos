

function triangulo(ladoA, ladoB, ladoC) {
 
        // Equilatero
        if(ladoA == ladoB) {
            if(ladoC == ladoB){
                if(ladoA == ladoC) {
                    console.log('O triango é equilatero!')
                }
            }
        }

        // Escaleno
        if(ladoA != ladoB) {
            if(ladoB != ladoC) {
                if(ladoC != ladoA) {
                    console.log('O triangulo é escaleno!')
                }
            }
        }

        // Isoceles
        if(ladoA == ladoB) {
            if(ladoB != ladoC){
                console.log('O triango é isosceles!')
                }
            }if(ladoC == ladoB){
                if(ladoB != ladoA){
                    console.log('O triango é isosceles!')
                    }
                }if(ladoA == ladoC) {
                    if(ladoC != ladoB){
                    console.log('O triango é isosceles!')
                    }
                }
}

triangulo(10, 10, 10)