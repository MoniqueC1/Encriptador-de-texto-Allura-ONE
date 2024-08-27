let mensajeUsuario = document.querySelector('.text-area');
let noMensaje = document.querySelector('.sin-mensaje');
let resultadoEncriptado = document.querySelector('.text-encriptado');

function validarMensaje(mensaje) {
  mensaje = mensaje.toLowerCase();
  mensaje = mensaje.replace(/[^a-z\s]/g, '');
  return mensaje;
}


function botonEncriptador () {
  let mensaje = validarMensaje(mensajeUsuario.value); // Validate the input
  let mensajeEncriptado = encriptarMensaje(mensaje);
  resultadoEncriptado.value = mensajeEncriptado;
  mensajeUsuario.value = '';

  document.querySelector('.sin-mensaje').style.display = "none";
  document.querySelector('.mensaje-no-encontrado').style.display = "none";
  document.querySelector('.boton-para-copiar').style.display="block";
  document.querySelector('.text-encriptado').style.display= 'block';
  
  }
  


function botonDesencriptar() {
  let mensaje = validarMensaje(mensajeUsuario.value); // Validate the input
  let mensajeDesencriptado = desencriptarMensaje(mensaje);
  resultadoEncriptado.value = mensajeDesencriptado;
  mensajeUsuario.value = '';
  document.querySelector('.sin-mensaje').style.display = "none";
  document.querySelector('.mensaje-no-encontrado').style.display = "none";
  document.querySelector('.boton-para-copiar').style.display="block";
  document.querySelector('.text-encriptado').style.display= 'block';

}

function encriptarMensaje (valorUsuario) {
    let letrasAEncriptar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
      valorUsuario = valorUsuario.toLowerCase();

      for (let i= 0; i < letrasAEncriptar.length; i++) {
        if(valorUsuario.includes((letrasAEncriptar[i][0]))) {
            valorUsuario = valorUsuario.replaceAll(letrasAEncriptar[i][0], letrasAEncriptar[i][1])
        }
      }
      return valorUsuario
}


function desencriptarMensaje (valorDesencriptado) {
  let letrasAEncriptar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  valorDesencriptado = valorDesencriptado.toLowerCase();

    for (let i= 0; i < letrasAEncriptar.length; i++) {
      if(valorDesencriptado.includes((letrasAEncriptar[i][1]))) {
        valorDesencriptado = valorDesencriptado.replaceAll(letrasAEncriptar[i][1], letrasAEncriptar[i][0])
      }
    }
    return valorDesencriptado
}
function copiarResultado() {
 
  navigator.clipboard.writeText(resultadoEncriptado.value)
    .then(() => {
      alert("Texto copiado al portapapeles!");
    })
    .catch(err => {
      console.error("Error al copiar el texto: ", err);
    });
}
function validarEntrada(mensaje) {
  mensaje = mensaje.toLowerCase();

  mensaje = mensaje.replace(/[^a-z\s]/g, '');

  return mensaje;
}
