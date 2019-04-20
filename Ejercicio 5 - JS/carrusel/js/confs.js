var Carrusel = Carrusel || {},
	ProgressBar = ProgressBar || {};
const TIEMPO_INTERVALO_MILESIMAS_SEG = 50;

Carrusel.imagenes = ['images/paisaje1.jpg','images/paisaje2.jpg','images/paisaje3.jpg','images/paisaje4.jpg'];
Carrusel.contador = 0;
Carrusel.animacion = 0;
Carrusel.teclado = { flechaIzquierda: "ArrowLeft", flechaDerecha: "ArrowRight" };

ProgressBar.enPausa = true;
ProgressBar.progreso = 0;
ProgressBar.intervalo;