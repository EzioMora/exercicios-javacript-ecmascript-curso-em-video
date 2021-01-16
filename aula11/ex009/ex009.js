// Crianção de condicional composta
var pais = document.querySelector('#txtpais');
var res = document.querySelector('#res');
var btnVerificar = document.querySelector('#btnVerificar');
    btnVerificar.addEventListener('click' , verificar)

function verificar() {
  if (pais.value  == 'Brasil') {
    res.innerHTML = '<p>Você mora no <strong>Brasil!</strong></p>'
} else {
    res.innerHTML = '<p>Você mora no <strong>Estrangeiro!</strong></p>'
}
}