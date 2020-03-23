const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
        return new Promise((resolve, reject) => {
            http.get(url, res => {
                let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(error) {
                    reject(error)
                }
            })
        })
    })
}


// Recurso do ES8
// Objetivo de simplificar o uso do promises...
let obterAlunos = async() => {
    const TurmaA = await getTurma('A')
    const TurmaB = await getTurma('B')
    const TurmaC = await getTurma('C')
    return [].concat(TurmaA, TurmaB, TurmaC)
} // Retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))