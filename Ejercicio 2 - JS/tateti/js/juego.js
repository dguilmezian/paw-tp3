function Tateti(placeholder, grilla, callback) {

	
	this.placeholder = placeholder;

	// pone la grilla 
	this.paint(grilla);

	
	this.callback = callback;

	// guarda las puntuaciones
	this.resultados = {
		X: 0,
		O: 0
	};

	this.marcas = {
		X: "X",   
		O: "O",  
		c: 0 
	};

	return this;
}

Tateti.prototype.paint = function(grilla) {

	var self = this;

	// crea la grilla segun el parametro pasado (3,4,5,6)
	self.grilla = grilla;

	var html = '<table id="ta-te-ti" align="center">';
	
	for(var i = 0; i < grilla; i++) {
		html += '<tr>';
		for(var j = 0; j < grilla; j++) {
			html+= '<td></td>';
		}
		html += '</tr>';
	}

	html += '</table>';
	
	self.placeholder.innerHTML = html;

	// se encuentran las columnas y se les asigna el evento 
	self.columns = self.placeholder.getElementsByTagName("td");

	for(i = 0; i < this.columns.length; i++) {
		self.columns[i].addEventListener("click", marcador);
	}

	function marcador(e) {
		self.marca(e.target);
	}

};

Tateti.prototype.marca = function(column) {
	if(column.innerHTML) {
		return;
	}
	this.marcas.c++;

	// recuperoo la marca
	var seleccionada = this.marcas.c % 2 === 1 ? this.marcas.X : this.marcas.O;

	// lleno la columna con mi marca
	column.innerHTML = seleccionada;
	column.classList.add(seleccionada);

	// verifica si el jugador es X o O y si gano o no
	if(this.haGanado(seleccionada)) {
		
		if(this.marcas.c % 2 === 1) {
			this.resultados.X++;
		} else {
			this.resultados.O++;
		}
		
		this.callback(seleccionada, this.resultados);
	} else if(this.marcas.c === this.columns.length) {
		
		this.callback("empate");
	}

};


Tateti.prototype.haGanado = function(marca) {

	// se chequea si alguno de los jugadores ganó, primero se chequea horizontal o vertical, luego se chequea diagonales
	var grilla = this.grilla;
	var horizontal_c,
		vertical_c,
		right_to_left_c = 0,
		left_to_right_c = 0;

	for(var i = 0; i < grilla; i++) {
		horizontal_c = vertical_c = 0;
		for(var j = 0; j < grilla; j++) {
			if(this.columns[i * grilla + j].innerHTML == marca) {
				horizontal_c++;
			}
			if(this.columns[j * grilla + i].innerHTML == marca) {
				vertical_c++;
			}

		}
		if(horizontal_c == grilla || vertical_c == grilla) {
			return true;	
		}
		if(this.columns[i * grilla + i].innerHTML == marca) {
			right_to_left_c++;
		}
		if(this.columns[(grilla - 1) * (i+1)].innerHTML == marca) {
			left_to_right_c++;
		}

	} 
	if(right_to_left_c == grilla || left_to_right_c == grilla) {
		return true;	
	}

	return false;
};

Tateti.prototype.limpiar = function() {
	// se limpia toda la grilla para un nuevo partido
	for(var i = 0; i < this.columns.length; i++) {
		this.columns[i].innerHTML = '';
		this.columns[i].classList.remove(this.marcas.X);
		this.columns[i].classList.remove(this.marcas.O);

	}
	this.marcas.c = 0;
};

Tateti.prototype.reiniciar = function() {
	this.limpiar();
	this.resultados = {
		X: 0,
		O: 0
	};
};

var placeholder = document.getElementById("placeholder");

var tateti = new Tateti(placeholder, 3, onResult);

function onResult(resultado, resultados) {
	if(resultado == 'empate') {
		alert("Empate");
	} else {
		alert(resultado + " ganó");
		actualizarMarcadores(resultados.X, resultados.O);
	}
	tateti.limpiar();
}

function actualizarMarcadores(X, O) {
	document.querySelector("#marcador #jugador1").innerHTML = X;
	document.querySelector("#marcador #jugador2").innerHTML = O;	
}

function reiniciar(grilla) {
	tateti.reiniciar();
	actualizarMarcadores(0, 0);
	if(grilla) {
		tateti.paint(grilla);
	}
}