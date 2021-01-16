var msg = document.getElementById('msg');
var img = document.getElementById('imagen');
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são as ${hora} horas.`;
    window.addEventListener('load', carregar)

function carregar() {
    if (hora >= 0 && hora < 12) {
        img.src = "manha.png";
        document.body.style.background = '#ceb989'
    } else if (hora >= 12 && hora < 18) {
        img.src = "tarde.png";
        document.body.style.background = '#dd917d'
} else {
        img.src = "noite.png";
        document.body.style.background = '#102636'
}
}
