// Calcular o factorail de um numero

// 5| = 5 x 4 x 3 x 2 x 1 = 120

function factorial(n) {
    let fat = 1 ;
    for (let c = n ; c > 1 ; c--) {
        fat *= c;
    }
    return fat
}

console.log(factorial(5))

// Calcular o factorial de forma recursiva ou recurção, a recurção acontece quando uma função se chama a ela mesma.
