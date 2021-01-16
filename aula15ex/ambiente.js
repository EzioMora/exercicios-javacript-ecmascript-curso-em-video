// Criação de uma Array

let num = [5, 8, 2, 9, 3];
num.sort(); /* comando para organizar os valores de forma crescente, se dps da execução for adicionado  
             um outro valor o mesmo não sera organizado de forma crescente, observese no seguinte comando.*/
num.push(1); //.push é utilizado para adicionar um novo valor dentro da Array que ocupara a ultima posição.

console.log(num);
console.log(`O vetor tem ${num.length} posições.`);
console.log(`O primer valor do vetor é ${num[0]}`);

/*

let pos = num.indexOf(9); // Aqui estou buscando a posição do valor 9 e armazenando em uma variavel simple
    console.log(`O valor esta na posição ${pos}`); 
    
*/

let pos = num.indexOf(10); // sim vc colocar um valor que não esta dentro da varaivel vai te retornar -1
    if (pos == -1) {
        console.log("O valor não foi encontrado");
    } else {
        console.log(`O valor esta na posição ${pos}`); 
    }
