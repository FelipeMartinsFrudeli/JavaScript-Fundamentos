const escola = 'Coder'

// mostra a quinta letra da palavra pois ele comaça do 0
console.log(escola.charAt(4))

// valor em unicode
console.log(escola.charCodeAt(3))

// esta funcao procura o numero 'e' na palavra
console.log(escola.indexOf('e'))

// nao mostra certa parte da palavra
console.log(escola.substring(2))

// concatenação em java script 
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

// muda algo de tal posição
console.log(escola.replace(3, 'a'))