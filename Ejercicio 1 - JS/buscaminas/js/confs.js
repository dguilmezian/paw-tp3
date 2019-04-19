var Juego = Juego || {};

Juego.estado = { cerrado: 0, abierto: 1, bandera: 2, pregunta: 3, mina: 4 };
Juego.clic = { izquierdo: 1, derecho: 3 };
Juego.enJuego = true;
Juego.dificultadActual = 0;
Juego.dificultad = [	{ tableroAlto: 8, tableroAncho: 8, cantidadMinas: 10 }, 
						{ tableroAlto: 16, tableroAncho: 16, cantidadMinas: 40 },
						{ tableroAlto: 16, tableroAncho: 30, cantidadMinas: 99 }
					];