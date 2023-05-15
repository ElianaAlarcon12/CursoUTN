const numeros = [];

function mostrarMensaje() {
  event?.preventDefault();

  const numero = document.getElementById('numero').value;

  numeros.push(numero);

  let mensaje = '';

  if (numero === 'ESC') {
    for (let index = 0; index < numeros.length; index++) {
      mensaje += ' ';

      switch (numeros[index]) {
        case '1':
          mensaje += 'Tomate';

          break;
        case '2':
          mensaje += 'Papa';

          break;
        case '3':
          mensaje += 'Carne';

          break;
        case '4':
          mensaje += 'Pollo';

          break;
        default:
          break;
      }
    }

    alert(mensaje);
  }
}
