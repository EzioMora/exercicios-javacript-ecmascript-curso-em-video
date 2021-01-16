var res = document.querySelector("p.res-finish-wrapper");
var btn_add = document.querySelector("#btn-add");
var added_items_list = document.querySelector(".added-items-wrapper")
var btn_finish = document.querySelector("#btn-finish");
var not_replay = []
var list_value = []
    btn_add.addEventListener("click", add);
    btn_finish.addEventListener("click", finish);

function add() {

    var txtn1 = document.querySelector("#form-text-number");
    var i_replay = not_replay.indexOf(txtn1.value);

    if (txtn1.value < 1 || not_replay[i_replay] == txtn1.value || txtn1.value > 100) {

        alert("Valor invalido ou já encontrado na lista");
    
    } else {

        var item_value = document.createElement("option");
            item_value.text = `Valor ${txtn1.value} Adicionado`;
            added_items_list.appendChild(item_value);
            not_replay.push(txtn1.value);
            list_value.push(+(txtn1.value));
            res.innerText = "Analisando...";
    }

    txtn1.value = "";
    txtn1.focus();

}

function finish() {

    if (list_value.length == 0) {

        alert("[ERROR!] Inserte um número para ser analisado!");
    
    } else {

        var max = list_value.length - 1
            list_value.sort()

        /*
        var soma = 0
            for(let i in list_value) {
                soma += +(list_value[i])
                } 
        */
        
        var soma = 0
        for (let pos = 0; pos < list_value.length; pos++) {
            soma += +(list_value[pos]);
        }
        
        res.innerHTML = `Ao todo, temos ${list_value.length} números cadastrados`;
        res.innerHTML += `<p>O maior valor informado foi ${list_value[max]}</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${list_value[0]}</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `A media dos valores digitados é ${soma / list_value.length}`;

    }
}