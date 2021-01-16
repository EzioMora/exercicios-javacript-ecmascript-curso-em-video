var vel = document.getElementById('txtvel');
var btnCalcular = document.getElementById('btnCalcular');
var res = document.getElementById('res');
  btnCalcular.addEventListener('click' , calcular)

function calcular() {
  vel = +(vel.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h</strong></p>`
  if (vel > 60) {
    res.innerHTML += `<p>Esta acima do limite de <strong>60 Km/h. MULTADO!</strong></p>`
  }
    res.innerHTML += `<p><strong>Dirija sempre utilizando o cinto de segurança.</strong></p>`
  
}
