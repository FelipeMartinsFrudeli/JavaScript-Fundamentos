// Usando a notação literal 
const Obj1 = {}
console.log(Obj1)

// Obj em JavaScript
console.log(typeof Object, typeof new Object)
const Obj2 = new Object
Obj2.exemplo = 'Obj2'
console.log(Obj2.exemplo)

// Funções Construtoras
function Produto(nome, preço, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preço * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function Funcionario(Nome, SalarioBase, Faltas) {
    return{
        Nome,
        SalarioBase,
        Faltas,
        getSalario() {
            return (SalarioBase / 30) * (30 - Faltas)
        }
    }
}

const f1 = Funcionario('João', 7980, 4)
const f2 = Funcionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Função JSON que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)