document.addEventListener('DOMContentLoaded', function() {
  var propietarioCheckbox = document.getElementById('propietario');
  var enviarButton = document.getElementById('enviar');
  var terceroCheckbox = document.getElementById('tercero');
  var confidentialInfoForm = document.getElementById('confidential-info-form');
  var correoInput = document.getElementById('correo');
  var telefonoInput = document.getElementById('telefono');

  enviarButton.disabled = !propietarioCheckbox.checked;

  propietarioCheckbox.addEventListener('change', function() {
    enviarButton.disabled = !this.checked;
  });

  terceroCheckbox.addEventListener('change', function() {
    confidentialInfoForm.style.display = this.checked ? 'block' : 'none';
  });

  function validar() {
    var correo = correoInput.value;
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

    if (!expresion.test(correo)) {
      alert("Ingrese un correo ");
      return false;
    }

    var telefono = telefonoInput.value;
    if (telefono.length !== 10 || isNaN(telefono)) {
      alert("Ingrese un numero de telefono");
      return false;
    }

    var boton = document.getElementById('enviar');
    boton.disabled = true;
    boton.value = 'Enviando datos';
    this.form.submit();
    return true;
  }

  function borrarform() {
    document.getElementById("name").value = '';
    document.getElementById("descrip").value = '';
    document.getElementById("precio").value = '';
  }

  enviarButton.addEventListener('click', validar);
});
