let num = document.querySelector("input#form-text-number");
let btn_add = document.querySelector("input#btn-add");
let lista = document.querySelector("select.added-items-wrapper");
let btn_finish = document.querySelector("input#btn-finish");
let res = document.querySelector("p.res-finish-wrapper");
let valores = [];
    btn_add.addEventListener("click", add);
    btn_finish.addEventListener("click", finish);

function isNumero(n) {
    if( +(n) >= 1 && +(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, i) {
    if ( i.indexOf(+(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function add() {
    if ( isNumero(num.value) && !inLista(num.value, valores) ) {
        valores.push(+(num.value));
        let item = document.createElement("option");
            item.text = `Valor ${num.value} adicionado`;
            lista.appendChild(item);
            res.innerHTML = "";

    } else {
        alert("Valor invaido ou já se encontra na lista");
    }
    num.value = ""
    num.focus()
}

function finish() {
    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar!")
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0
        let media = 0

        for (let pos in valores) {

            soma += valores[pos];
            
            if( valores[pos] > maior ) {
                maior = valores[pos];
            }
            if (valores[pos] < menor ) {
                menor = valores[pos];
            }
        
        }
        
        media = soma / tot;
        res.innerHTML = "";
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`; 
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`;
        res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`;
    }
}