function Verificacion() {
  var propietarioCheckbox = document.getElementById('propietario');
  var enviarButton = document.getElementById('enviar');
  enviarButton.disabled = !propietarioCheckbox.checked;
}
window.addEventListener('DOMContentLoaded', function() {
  var propietarioCheckbox = document.getElementById('propietario');
  var enviarButton = document.getElementById('enviar');
  enviarButton.disabled = !propietarioCheckbox.checked;
  propietarioCheckbox.addEventListener('change', function() {
    Verificacion();
  });
});
function Mostrar() {
  var terceroCheckbox = document.getElementById('tercero');
  var confidentialInfoForm = document.getElementById('confidential-info-form');
  if (terceroCheckbox.checked) {
    confidentialInfoForm.style.display = 'block';
  } else {
    confidentialInfoForm.style.display = 'none';
  }
}
function validar() {
  var correo = document.getElementById('correo').value;
  var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
  if (!expresion.test(correo)) {
    alert("Ingrese un correo valido");
    return false;
  }
  var telefono = document.getElementById('telefono').value;
  if (telefono.length !== 10 || isNaN(telefono)) {
    alert("Ingrese un telefono válido de 10 dígitos");
    return false;
  }
  var boton = document.getElementById('enviar');
  boton.disabled = true;
  boton.value = 'Enviando datos........';
  this.form.submit();
  return true;
}
function borrarform() {
    document.getElementById("name").value = '';
    document.getElementById("descrip").value = '';
    document.getElementById("precio").value = '';
  }