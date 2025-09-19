// console.log('Bienvenido');
var lienzo = document.getElementById("lienzo");
var cd = lienzo.getContext("2d");

function exhibirLineas() {
  var x = 0;
  cd.clearRect(0, 0, lienzo.width, lienzo.height); // limpiar canvas antes de dibujar

  while (x < 400) {
    cd.beginPath();
    cd.moveTo(x, 0);
    cd.lineTo(400, 300 - x);
    cd.stroke();
    x = x + 10;
  }
}
