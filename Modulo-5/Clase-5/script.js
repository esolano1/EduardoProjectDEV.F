document.getElementById('registroEvento').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío automático del formulario

  // Variables
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  // Validación 1: nombre debe tener al menos 5 caracteres
  if (nombre.length < 5) {
    alert('El nombre debe tener al menos 5 caracteres.');
    return;
  }

  // Validación 2: correo debe terminar en .com o .mx
  if (!correo.endsWith('.com') && !correo.endsWith('.mx')) {
    alert('El correo debe terminar en .com o .mx');
    return;
  }

  // Validación 3: teléfono debe ser numérico y tener 10 dígitos
  if (!/^\d{10}$/.test(telefono)) {
    alert('El teléfono debe contener exactamente 10 dígitos numéricos.');
    return;
  }

  // Validaciones básicas
  if (!nombre || !correo || !telefono || intereses.length === 0 || !horario || !fecha || !hora) {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
  }

  // Si todo está bien
  alert('Registro exitoso. ¡Gracias por registrarte!');
});
