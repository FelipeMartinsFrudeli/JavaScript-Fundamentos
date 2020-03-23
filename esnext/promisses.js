function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            reject('Ops aconteceu algo inesperado!')
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Promisse!')
    .then(frase => frase.concat('!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(error => console.log(error))