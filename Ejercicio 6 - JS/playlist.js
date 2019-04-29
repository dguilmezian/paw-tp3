var reproductor = document.getElementById("reproductor");
links = reproductor.getElementsByTagName('a');


//TODO agregar videos y que se genere html (mepa que no se puede)
var html="<li><a href='Videos/'";

for (var i = 0; i < links.length; i++) {
  links[i].onclick = manejador;
}
function manejador(e) {
  e.preventDefault();
  destino = this.getAttribute("href");
  archivo = destino.substr(0, destino.lastIndexOf('.')) || destino;
  video = document.querySelector("#reproductor video");
  video.removeAttribute('poster');
  source = document.querySelectorAll("#reproductor video source");
  source[0].src = archivo + ".mp4";
  video.load();
  video.play();
}

