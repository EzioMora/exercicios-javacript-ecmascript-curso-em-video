// Praticando iterar e organizar arrays

// iterando uma array com for

let array = [1, 2, 3, 4]

for (let pos = 0 ; pos <= array.length - 1 ; pos++) {
    console.log(array[pos])
} 

let names = ["Enrique", "Alfredo", "Javier", "Acevedo"];
names.sort()
names.push("Ezio")

for (let saludo = 0 ; saludo <= names.length - 1 ; saludo++ ) {
    console.log(`Olá ${names[saludo]}`);
}

// iterando uma array com for each in
for (let pos in names) {
    console.log(names[pos]);
}

// organizando uma array númerica
let numbers = [5,3,1,4,2];

numbers.sort(function (a, b) { 
    console.log(a, b, a - b);
    return b - a;
 }
)

console.log(numbers);
