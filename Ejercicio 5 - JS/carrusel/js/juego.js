var imagenes = document.querySelector(".imagenes"),
	items = document.querySelector(".items"),
	bar = document.getElementById("bar");

document.addEventListener("DOMContentLoaded", function () {
	cargarImagenes();
	cargarItems();
	visualizarImagen();
 });

function cargarImagenes() {
	for(var i = 0; i < Carrusel.imagenes.length; i++){
		var imagen = document.createElement("img");
		imagen.id = i;
		imagen.src = Carrusel.imagenes[i];
		imagen.classList.add("imagen");
		if(Carrusel.animacion == 0){
			imagen.classList.add("animacion-transparencia");
		}else if(Carrusel.animacion == 1){
			if(i % 2 == 0){
				imagen.classList.add("animacion-top");
			}else{
				imagen.classList.add("animacion-bottom");
			}
		}else if(Carrusel.animacion == 2){
			imagen.classList.add("animacion-escala");
		}
		imagenes.appendChild(imagen);
	}
}

function cargarItems() {
	items.classList.add("items");
	for(var i = 0; i < Carrusel.imagenes.length; i++){
		var item = document.createElement("button");
		item.innerHTML = i + 1;
		item.id = "item-" + i;
		item.setAttribute("data-img", i);
		item.addEventListener("click", obtenerImagenDeItem);
		item.classList.add("item");
		items.appendChild(item);
	}
}

function obtenerImagenDeItem(event) {
	startProgressbar();
	Carrusel.contador = event.target.getAttribute("data-img");
	visualizarImagen();
}

function visualizarImagen() {
	var imagen = document.getElementById(Carrusel.contador);
	var item = document.getElementById("item-" + Carrusel.contador);
	var imagenes = document.getElementsByClassName("imagen");
	var items = document.getElementsByClassName("item");
	for (i = 0; i < imagenes.length; i++) {
	      imagenes[i].style.display = "none";  
	}
	for (i = 0; i < items.length; i++) {
	    items[i].classList.remove("active");
	}
	imagen.style.display = "block";  
	item.classList.add("active");
}

function avanzar() {
	if((parseInt(Carrusel.contador) + 1) >= Carrusel.imagenes.length){
		Carrusel.contador = 0;
	}else{
		Carrusel.contador++;
	}
	visualizarImagen();
}

function retroceder() {
	if((parseInt(Carrusel.contador) - 1) < 0){
		Carrusel.contador = Carrusel.imagenes.length - 1;
	}else{
		Carrusel.contador--;
	}
	visualizarImagen();
}

function play() {
	var btnRetroceder = document.getElementById("retroceder"),
		btnAvanzar = document.getElementById("avanzar"),
		btnPlay = document.getElementById("play"),
		btnStop = document.getElementById("stop");
	
	ProgressBar.enPause = false;
	startProgressbar();
    
    btnAvanzar.setAttribute('disabled', true);
    btnRetroceder.setAttribute('disabled', true);
    btnPlay.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');
}

function stop() {
	resetProgressbar();
	var btnRetroceder = document.getElementById("retroceder"),
		btnAvanzar = document.getElementById("avanzar"),
		btnPlay = document.getElementById("play"),
		btnStop = document.getElementById("stop");
	
	ProgressBar.enPause = true;
	resetProgressbar();
    
    btnAvanzar.removeAttribute('disabled');
    btnRetroceder.removeAttribute('disabled');
    btnPlay.removeAttribute('disabled');
    btnStop.setAttribute('disabled', true);
}

function cambiarAnimacion() {
	if((parseInt(Carrusel.animacion) + 1) > 2){
		Carrusel.animacion = 0;
	}else{
		Carrusel.animacion++;
	}
	imagenes.innerHTML = "";
	items.innerHTML = "";
	cargarImagenes();
	cargarItems();
	visualizarImagen();

}

document.addEventListener("keyup", function(event) {
	startProgressbar();
	if(event.code == Carrusel.teclado.flechaIzquierda){
		retroceder();
	}else if(event.code == Carrusel.teclado.flechaDerecha){
		avanzar();
	}
});

function startProgressbar() {
	resetProgressbar();
	ProgressBar.progreso = 0;
    ProgressBar.intervalo = setInterval(interval, TIEMPO_INTERVALO_MILESIMAS_SEG);
}

function interval() {
    if (ProgressBar.enPause === false) {
    	ProgressBar.progreso += 1;
      	bar.style.width = ProgressBar.progreso + "%";
      	if (ProgressBar.progreso >= 100) {
      		avanzar();
        	startProgressbar();
      	}
    }
}

function resetProgressbar() {
	bar.style.width = "0%";
    clearTimeout(ProgressBar.intervalo);
}
