var btnContar = document.querySelector("#contar");
    btnContar.addEventListener("click", contar);

function contar() {
    
    let ini = document.querySelector("#txti").value;
    let fin = document.querySelector("#txtf").value;
    let passo = document.querySelector("#txtp").value;
    let res = document.querySelector("#res");
    let i = +(ini);
    let f = +(fin);
    let p = +(passo);
    
    if (ini.length == 0 || fin.length == 0 || passo.length == 0) {
        res.innerHTML = "Impossivel contar!";
    } else {

        if (p <= 0) {
            alert("[ERRO!] Passo Invalido! CONSIDERANDO PASSO 1!");
            p = 1;
        }
        res.innerHTML = "Contando: ";
        
        if (i <= f) { // Contagem Crescente
            for (let c = i ; c <= f ; c += p) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        } else { // Contagem Decrescente
            for (let c = i ; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }   
 }
            
    
    
    
    
    
    
    
    
    
            /* if (inicio == "") {
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
            } */