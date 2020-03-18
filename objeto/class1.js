class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinacero {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let ValorConsolidado = 0
        this.lancamentos.forEach(l => {
            ValorConsolidado += l.valor
        })
        return ValorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const contaLuz = new Lancamento('Luz', -280)

const contas = new CicloFinacero(6, 2018)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())