/* 
Condicionais aninhadas

var idade = 16;

if (idade < 16) {
  console.log('Não pode votar');
} else {
    if (idade >= 16 && idade < 18) {
      console.log('Voto opcional');
    } else {
        if (idade > 18) {
          console.log('Voto obrigatorio')
        }
    }
    
} */

/* Da seguinte forma podemos economizar bloco de codigo
utilizando o else if */
var idade = 22

if (idade < 16) {
  console.log('Não vota') /* como a idade é maio que 16 a condição 
  seria false*/

} else if (idade < 18 || idade > 65) { 
  console.log('Voto Opcional') /*Aqui tambem como a idade
  é maior que 18 e menor que 65 não se cumple a condição 
  então é false, o bloco é ignorado e passariamos ao seguinte*/

} else {
  console.log('Voto Obrigatorio')
} /* Aqui comoa idade é maior que 16 e 18 e menor que 65 se
executa nosso ultimo bloco de codigo */