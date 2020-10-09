function generarGato() {
  let imagen = document.createElement("img");
  let divContenedor2 = document.getElementById("contenedor-2");
  imagen.src = "gato.jpg";
  divContenedor2.appendChild(imagen); // Inserta un nuevo nodo a la estructura
}
