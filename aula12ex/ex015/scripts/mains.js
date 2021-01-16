var btnVerificar = document.querySelector("#verificar");
    btnVerificar.addEventListener("click", verificar);

function verificar() {
    var formAno = document.querySelector("input#txtAno");
    var formSex = document.getElementsByName("radSex");
    var res = document.querySelector("div#res");
    var data = new Date();
    var ano = data.getFullYear();
    var idade = ano - Number(formAno.value);
    var genero = "";
    var img = document.createElement("img");
        img.setAttribute("id" , "foto");
    
    if (formAno.value == 0 || +(formAno.value) >= ano) {

        alert('[ERRO] Verifique os dados e tente novamente!');
        
        } else if (formSex[0].checked) {
            
            genero = "Homen";
            
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src' , './imagens/foto-bebe-m.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute("src" , "./imagens/foto-jovem-m.png")
            } else if (idade < 50) {
                // adulto
                img.setAttribute("src" , "./imagens/foto-adulto-m.png")

            } else {
                // idoso
                img.setAttribute("src" , "./imagens/foto-idoso-m.png")

            }

            } else if (formSex[1]) {
            
            genero = "Mulher";
            
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute("src" , "./imagens/foto-bebe-f.png")

            } else if (idade < 21) {
                // jovem
                img.setAttribute("src" , "./imagens/foto-jovem-f.png")

            } else if (idade < 50) {
                // adulta
                img.setAttribute("src" , "./imagens/foto-adulto-f.png")

            } else {
                // idoso
                img.setAttribute("src" , "./imagens/foto-idoso-f.png")

            }

        }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos!`;
    //res.innerHTML = "<img src='./imagens/foto-jovem-f.png' />"
    res.appendChild(img);

}