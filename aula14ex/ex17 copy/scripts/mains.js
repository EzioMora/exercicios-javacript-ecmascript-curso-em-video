var btn_calc = document.querySelector("#btn-calcular");
btn_calc.addEventListener("click", calcular);

function calcular() {
    let num = document.querySelector("#txtn1").value;
    let tab = document.querySelector("#sel-tab");
    let n = +(num);

    tab.innerText = 'Digite um número acima';

    if (num.length == 0) {
        alert('[ERRO!] Não foi detectado o número!');
        tab.innerHTML = "<option>Digite um número acima</option>F"
    } else {
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement("option");
            item.text = ` ${n} x ${c} = ${n * c} `;
            item.value = `tab${c}`;
            tab.appendChild(item);
        }
    }


}
