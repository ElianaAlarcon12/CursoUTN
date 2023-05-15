const nombres = [];

function mostrarMensaje() {
  event?.preventDefault();

  const nombre = document.getElementById('nombre').value;

  nombres.push(nombre);

  let mensaje = '';

  if (nombre === 'Voldemort') {
    for (let index = 0; index < nombres.length; index++) {
      mensaje += ' ';
      mensaje += nombres[index];
    }

    alert(mensaje);
  }
}
