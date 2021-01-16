//Identicando sim o valor é par ou impoar realizando um chamado pra minha função com um parametro definido que executara minha ação e retornara um valor pra meu chamado que vai ser almacenado em uma variavel.

function parimp(n) {
    if (n % 2 == 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

let res = parimp(3);

console.log(res);