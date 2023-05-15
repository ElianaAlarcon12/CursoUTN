const mostrarMensaje = () => {
  // const { value: numero } = document?.getElementById('numero');
  // const { value: mensaje } = document?.getElementById('mensaje');

  const numero = document.getElementById('numero').value;
  const mensaje = document.getElementById('mensaje').value;

  for (let index = 0; index < numero; index++) {
    alert(mensaje);
  }
};
