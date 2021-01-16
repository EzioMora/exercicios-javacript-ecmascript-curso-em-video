var btnContar = document.querySelector("#contar");
    btnContar.addEventListener("click", contar);

function contar() {
    var inicio = document.querySelector("#txtn1").value;
    var fin = document.querySelector("#txtn2").value;
    var contagem = +(document.querySelector("#txtn3").value);
    var res = document.querySelector("#res");
    var contar = +(inicio)
    res.innerHTML = "Resultado: "

    if (inicio == "") {
        res.innerHTML = "Inicio não denifido, impossivel contar!";
    } else if (fin == "") {
        res.innerHTML = "Fim não denifido, impossivel contar!";
    } else if (contagem == "" || contagem == 0) {
        alert("Passo invalido! Considerando PASSO VALOR: 1");
        contagem = 1;
        if (contar <= fin) {
            for (contar; contar <= fin; contar += +contagem) {
                res.innerHTML += `${contar} <i class="fa fa-arrow-right" id="arrow-right"></i>`
            }
            res.innerHTML += `<i class="fa fa-flag" id="flag-icon"></i>`
        } else {
            for (contar; contar >= fin; contar -= +contagem) {
                res.innerHTML += `${contar} <i class="fa fa-arrow-right" id="arrow-right"></i>`
            }
            res.innerHTML += `<i class="fa fa-flag" id="flag-icon"></i>`
        }
    } else if (contar <= fin) {
        for (contar; contar <= fin; contar += +contagem) {
            res.innerHTML += `${contar} <i class="fa fa-arrow-right" id="arrow-right"></i>`
        }
        res.innerHTML += `<i class="fa fa-flag" id="flag-icon"></i>`
    } else {
        for (contar; contar >= fin; contar -= +contagem) {
            res.innerHTML += `${contar} <i class="fa fa-arrow-right" id="arrow-right"></i>`

        }
        res.innerHTML += `<i class="fa fa-flag" id="flag-icon"></i>`
    }

}