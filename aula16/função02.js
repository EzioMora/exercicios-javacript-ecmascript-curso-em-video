// Somando dos parametros

/*

function soma(n1 , n2) {
    return n1 + n2;
}


let resSoma = soma(1 , 2) aqui estamos fazendo um chamado e assignado dos parametros na minha fuction
n1 = 1 e n2 = 2 e vai me retorna a soma do mesmo que sera 3 e sera almacenado na minha variavel resSoma 

*/ 

// exemplo de quando é são colocado dos parametros mas é só definido um parametro

function soma(n1 , n2) {
    return n1 + n2;
}

let res = soma(10); /* observesse que na minha função foram definidos 2 parametros formais mas no meu chamado esta enviando 
                    só um parametro    real '10' que sera assignado no primero parametro formal 'n1', como não foi definido o segundo parametro o JavaScript assignada um undefined o seja valor não definido, na execução de meu codigo não posso somar 10 + undefined isto vai retornar para meu chamado um NaN o não é um numero, para evitar isto eu posso deixar pre-definido uns valores opçionais de que em caso de não ter assinado um parametro real vai considerar o já pre-definido, vamos fazer um exemplo */ 
// console.log(res);

// executando uma função com parametros opçionais pre=definidos

// em caso de não definidir os parametros no meu chamado na execução da function vai utilizar os valores      pre=definidos

function soma1(n1 = 0 , n2 = 0) { 
        return n1 + n2; // return 10 + 0
}

let res1 = soma1(10); // aqui estou assignado no meu n1 o '10' como não definidi meu n2 ele vai considerar o parametro pre-definido no inicio 0

console.log(res1);