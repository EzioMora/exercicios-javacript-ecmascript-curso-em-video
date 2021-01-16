var btn_calc = document.querySelector("#btn-calcular");
btn_calc.addEventListener("click" , calcular);

function calcular() {
    var n1 = document.querySelector("#txtn1").value;
    var res = document.querySelector(".res-wrapper");
    var multiplicador = 1
    
    res.innerText = 'Caixa de Resultado';

    if (n1 == "") {
        alert('[ERRO!] Não foi detectado o número!');
    } else { 
        while (multiplicador <= 10) {
            resultado = +(n1) * multiplicador;
            res.innerHTML += `<table><tr><td>${n1} x ${multiplicador} = ${resultado}</td></tr></table>`;
            multiplicador++;
        }
    }
        
    
}
res.innerText += 'Caixa de Resultado';
