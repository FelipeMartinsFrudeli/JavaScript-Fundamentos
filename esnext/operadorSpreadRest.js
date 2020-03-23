// Operador ... rest(juntar) / spread(espalhar)
// usar spread com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 3240.80 }
const clone = { ativo : true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)