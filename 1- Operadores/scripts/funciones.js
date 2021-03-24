function sumar() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  document.getElementById("resultado").innerHTML = x + y;
  validar();
}

function restar() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  document.getElementById("resultado").innerHTML = x - y;
  validar();
}

function multiplicar() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  document.getElementById("resultado").innerHTML = x * y;
  validar();
}

function dividir() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  document.getElementById("resultado").innerHTML = x / y;
  validar();
}

function potencia() {
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  document.getElementById("resultado").innerHTML = Math.pow(x, y);
  validar();
}

function limpiar() {
  document.getElementById("formulario").reset();
}

function validar() {
  numero1 = document.getElementById("num1").value;
  numero2 = document.getElementById("num2").value;
  if (numero1.length == 0 || numero2.length == 0) {
    alert("Debes completar los 2 campos");
  }
}
