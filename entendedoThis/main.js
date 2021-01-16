function outerScope() {
    console.log(this);
}

var o = { // accesando ao scopo do elemento sem arrows functionns mediante uma variavel declarada no scopo acima
    m: outerScope,

    n: function () {
        console.log(this);

        let that = this;
        function inside() {
            console.log(that);
        }

        inside();
    },
};

o.n();


// var o = { // accesando com o segundo this no scopo do elemento "o" com ajuda de arrow function
//     m: outerScope,

//     n: function () {
//         console.log(this);

//         (() => { // arrow function
//             console.log(this);
//         })();    
//     }
// };

// o.n();

// var o = { // demostração de como o segundo this não pode acceder ao scopo globa do elemento o            devido a que
             // a que esta dentro de uma função que esta dentro de uma outra função o que não percebe o contexto externo
//     m: outerScope,

//     n: function () {
//         console.log(this);

//         function inside() {
//             console.log(this);
//         }

//         inside();
    
//     },


// };

// o.n();


// let el = document.getElementById("btn-submit");
// el.addEventListener("click", function () { console.log(this); });

