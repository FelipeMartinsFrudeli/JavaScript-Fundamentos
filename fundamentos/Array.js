const valores = [10.3, 7.8, 0.9]

valores[10] = 10
console.log(valores[2])
console.log(valores)

delete valores[0]
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

