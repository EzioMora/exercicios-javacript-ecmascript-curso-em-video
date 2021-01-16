let num = [1,2,3,4,5];
/* Impressão dos valores de uma Array de forma crescente

for (let i = 0  ; i < num.length ; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`) ;
} 

*/

/* Impressão dos valores de uma Array de forma decrecente

for (let i = num.length - 1; i >= 0 ; i--) {
    console.log(`A posição ${i} tem o valor ${num[i]}`) ;
} 

*/
// ^^ Este codigo é chamado de forma tradicional de percurso em vectores, o que chamamos de percurso para exibição do vector

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) ;
}