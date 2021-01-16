// Calcular o factorial de forma recursiva ou recurção, a recurção acontece quando uma função se chama a ela mesma.


function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(5))