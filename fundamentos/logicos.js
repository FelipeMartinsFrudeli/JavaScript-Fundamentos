function compras(trabalho1, trabalho2) {
    const comprarsorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabalho2)  // Operador Bitwise xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarsorvete

    return { comprarsorvete, comprarTV50, comprarTV32, manterSaudavel }
}

console.log(compras(false, false))