function TratarErro(erro) {
    throw new Error('...')
}

function imprimirNomeEmCaps(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        TratarErro(e)
    }
}

const obj = { nome: 'Pedro'}
imprimirNomeEmCaps(obj)