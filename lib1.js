// lib1.js
// http://localhost/pwasd25/index.html?n=1&d=4

// Obtener parámetros de la URL
const params = new URLSearchParams(window.location.search);
const n = params.get('n');
const d = params.get('d');

// Clase Quickchart
class Quickchart {
  constructor(d) {
    this.d = d;
  }

  crearCadunos() {
    let cadunos = "";
    for (let i = 0; i < this.d; i++) {
      cadunos += "1,";
    }
    // Eliminar la última coma
    cadunos = cadunos.slice(0, -1);
    return cadunos;
  }

  generarSrcImg() {
    let url = "https://quickchart.io/chart?cht=p3&chd=t:" + this.crearCadunos() +
              "&chs=500x250&chl=" + "1/".repeat(this.d).slice(0, -1);
    return url;
  }
}

// Crear instancia y mostrar imagen
const q = new Quickchart(d);
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';
