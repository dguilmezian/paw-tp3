var tablero = document.getElementById("tablero"),
    matrizTablero = [],
    matrizEstado = [],
    posicionMinas = [];

function inicializarJuego() {
  for(var i = 0; i < Juego.dificultad[Juego.dificultadActual].tableroAlto; i++){
    matrizEstado[i] = [];
    matrizTablero[i] = [];
    for(var j = 0; j < Juego.dificultad[Juego.dificultadActual].tableroAncho; j++){
      matrizEstado[i][j] = Juego.estado.cerrado;
      matrizTablero[i][j] = 0;
      var item = document.createElement("div");
      item.id = i + "-" + j;
      item.onclick = function(){
        actualizar(event)
      };
      item.oncontextmenu = function(){
        actualizar(event);
        return false;
      };             
      item.className = "cerrado";  
      tablero.appendChild(item);
    }
  }
  generarMinas();
  minasAlrededor();
}

function generarMinas(){
  var fil = 0;
  var col = 0;

  fil = Math.floor((Math.random() * Juego.dificultad[Juego.dificultadActual].tableroAlto));
  col = Math.floor((Math.random() * Juego.dificultad[Juego.dificultadActual].tableroAncho));

  for(var i = 0; i < Juego.dificultad[Juego.dificultadActual].cantidadMinas; i++){
    while (matrizTablero[fil][col] == "*"){
      fil = Math.floor((Math.random() * Juego.dificultad[Juego.dificultadActual].tableroAlto));
      col = Math.floor((Math.random() * Juego.dificultad[Juego.dificultadActual].tableroAncho));
    }
    matrizTablero[fil][col] = "*";   
    posicionMinas
    posicionMinas[i] = [];
    posicionMinas[i][0] = fil;
    posicionMinas[i][1] = col;
  }
}

function minasAlrededor(){
  for(var i = 0; i < Juego.dificultad[Juego.dificultadActual].tableroAlto; i++){
    for(var j = 0; j < Juego.dificultad[Juego.dificultadActual].tableroAncho; j++){                
      if(matrizTablero[i][j] == "*"){
        if(i == 0 && j == 0){
          colocaNumeroMinas(i, j, i + 1, j + 1);
        }
        else if (i == 0 && (j > 0 && j < (Juego.dificultad[Juego.dificultadActual].tableroAncho - 1))) {
          colocaNumeroMinas(i, j - 1, i + 1, j + 1);
        }
        else if(i == 0 && j == (Juego.dificultad[Juego.dificultadActual].tableroAncho - 1)){
          colocaNumeroMinas(i, j - 1, i + 1, j);
        }
        else if(j == (Juego.dificultad[Juego.dificultadActual].tableroAncho - 1) && (i > 0 && i < (Juego.dificultad[Juego.dificultadActual].tableroAlto - 1))){
          colocaNumeroMinas(i - 1, j - 1, i + 1, j);
        }
        else if(i == (Juego.dificultad[Juego.dificultadActual].tableroAlto - 1) && j == (Juego.dificultad[Juego.dificultadActual].tableroAncho - 1)){
          colocaNumeroMinas(i - 1, j - 1, i, j);
        }
        else if(i == (Juego.dificultad[Juego.dificultadActual].tableroAlto - 1) && (j > 0 && j < (Juego.dificultad[Juego.dificultadActual].tableroAncho - 1))){
          colocaNumeroMinas(i - 1, j - 1, i, j + 1);
        }
        else if(i == (Juego.dificultad[Juego.dificultadActual].tableroAlto - 1) && j == 0){
          colocaNumeroMinas(i - 1, j, i, j + 1);
        }
        else if(j == 0 && (i > 0 && i < (Juego.dificultad[Juego.dificultadActual].tableroAlto - 1))){
          colocaNumeroMinas(i - 1, j, i + 1, j + 1);
        }else{
          colocaNumeroMinas(i - 1, j - 1, i + 1, j + 1);
        }
      }
    }
  }
}

function colocaNumeroMinas(vari,varj,fini,finj){
  for(var i = vari; i <= fini; i++){
    for(var j = varj; j <= finj; j++){                 
      if(matrizTablero[i][j] != "*"){
        matrizTablero[i][j] = (parseInt(matrizTablero[i][j])+1);                  
      }
    }
  }
}

function actualizar(event){ 
  var posicion = event.target.id.split("-");
  var fil = posicion[0],
      col = posicion[1]; 
  if (Juego.enJuego){
    if(event.which == Juego.clic.izquierdo){
      if(matrizTablero[fil][col] == "*"){
        matrizEstado[fil][col] = Juego.estado.mina;
        mostrarMinas();
        alert("Perdiste");
        Juego.enJuego = false;
      }else{
          var celda = document.getElementById(event.target.id);
          var item = document.createElement("p");
          item.textContent = matrizTablero[fil][col]; 
          celda.appendChild(item);
          celda.className = "abierto";
          matrizEstado[fil][col] = Juego.estado.abierto;
          if(matrizTablero[fil][col] == 0){
            abrir(fil,col);
          }
      }
    }else if(event.which == Juego.clic.derecho){
      if(matrizEstado[fil][col] != Juego.estado.abierto && matrizEstado[fil][col] != Juego.estado.mina){
        if(matrizEstado[fil][col] == Juego.estado.cerrado){
          matrizEstado[fil][col] = Juego.estado.bandera;
          var celda = document.getElementById(event.target.id);
          celda.className = "bandera";
        }else if(matrizEstado[fil][col] == Juego.estado.bandera){
          matrizEstado[fil][col] = Juego.estado.pregunta;
          var celda = document.getElementById(event.target.id);
          celda.className = "pregunta";
        }else if(matrizEstado[fil][col] == Juego.estado.pregunta){
          matrizEstado[fil][col] = Juego.estado.cerrado;
          var celda = document.getElementById(event.target.id);
          celda.className = "cerrado";
        }
      }
    }
  } 
}

function obtenerVecinos(x, y, xLimit, yLimit){
  var cont = 0, neighbours = [];
  for(var i = -1; i<=1; i++){
    for(var j = -1; j<=1; j++){
      if (j == 0 && i == 0) continue;
      var _x = parseInt(x)+parseInt(i), _y = parseInt(y)+parseInt(j);
      if(_x >= 0 && _y >= 0 && _x < xLimit && _y < yLimit){
        neighbours[cont] = [];
        neighbours[cont][0] = _x;
        neighbours[cont][1] = _y;
        cont++;
      }
    }
  }
  return neighbours;
}

function abrir(x, y){
  var queue = [];
  queue.push(x);
  queue.push(y);
  while(queue.length > 0){
    var _x = queue.shift();
    var _y = queue.shift();
    var nMines = matrizTablero[_x][_y];
    if (nMines == 0){
      var neighbours = obtenerVecinos(_x, _y, Juego.dificultad[Juego.dificultadActual].tableroAlto, Juego.dificultad[Juego.dificultadActual].tableroAncho);
      for (var i = 0; i < neighbours.length; i++){
        var nX = neighbours[i][0];
        var nY = neighbours[i][1];
        if(matrizEstado[nX][nY] == Juego.estado.cerrado){
          queue.push(nX);
          queue.push(nY);
        }
      }
    }
    matrizEstado[_x][_y] = Juego.estado.abierto;
    var celda = document.getElementById(_x +"-"+_y);
    if(!celda.hasChildNodes()){
      var item = document.createElement("p");
      item.textContent = matrizTablero[_x][_y]; 
      celda.appendChild(item);
    }
    celda.className = "abierto"
  }
}

inicializarJuego();

function mostrarMinas(){
  var x, y;
  for (var i = 0; i < Juego.dificultad[Juego.dificultadActual].cantidadMinas; i++){
    var x = posicionMinas[i][0];
    var y = posicionMinas[i][1];
    matrizEstado[x][y] = Juego.estado.mina;
    var item = document.getElementById(x + "-" + y);
    item.className = "mina";
    item.style.backgroundImage = "url(images/bomba.png)";
  }
}

function iniciarJuegoFacil(){
  limpiarTablero();
  Juego.enJuego = true;
  Juego.dificultadActual = 0;
  tablero.className = "tableroFacil";
  inicializarJuego();
}

function iniciarJuegoMedio(){
  limpiarTablero();
  Juego.enJuego = true;
  Juego.dificultadActual = 1;
  tablero.className = "tableroMedio";
  inicializarJuego();
}

function iniciarJuegoDificil(){
  limpiarTablero();
  Juego.enJuego = true;
  Juego.dificultadActual = 2;
  tablero.className = "tableroDificil";
  inicializarJuego();
}


function limpiarTablero() {
  tablero.innerHTML = "";
  matrizTablero = [];
  matrizEstado = [];
  posicionMinas = [];
}