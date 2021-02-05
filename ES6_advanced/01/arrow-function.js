/*

Primeira forma de declarar um função:

*   function log(value){
*      console.log(value)
*   }
*   log('teste1')


Segunda forma:

*   var log = function(value){
*      console.log(value)
*   };
*   log('teste2')


Terçeira forma (arrow function):

- Não suporta ou não funciona com hoisting e construtores
- Aceita retorno de objetos

*   var log = (value) => value
*   console.log(log('teste3'))

OU

*   var log = (value) => {
*       console.log(value)    
*   }
*   log('teste3')

*/