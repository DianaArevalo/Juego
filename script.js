let numeroAzar = Math.floor(Math.random() * 100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

// esta accion se va a ejecutar cuando se clickee el boton comprobar
function chequearResultado() {
    intentos++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor introduce un numero valido entre 1 y 100'
        mensaje.style.color = 'red'
        return
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = 'FELICIDADES! Haz adivinado el numero!';
        mensaje.style.color = 'green'
        numeroEntrada.disabled = true;
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'El numero es mas arriba';
        mensaje.style.color = 'blue';
    } else {
        mensaje.textContent = 'El numero es mas abajo';
        mensaje.style.color = 'black'
    }

}