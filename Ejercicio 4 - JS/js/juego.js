var i = 0;
var respuestasCorrectas = 0;
iniciar(0);
function iniciar(index) {
    document.getElementById("question").innerHTML = jsonData["preguntas"][index]["pregunta"];
    document.getElementById("opcion1").innerHTML = jsonData["preguntas"][index]["respuestas"][0];
    document.getElementById("opcion2").innerHTML = jsonData["preguntas"][index]["respuestas"][1];
    document.getElementById("opcion3").innerHTML = jsonData["preguntas"][index]["respuestas"][2];
    document.getElementById("opcion4").innerHTML = jsonData["preguntas"][index]["respuestas"][3];
}

function verRespuesta() {
    if (document.getElementById("o1").checked && jsonData["preguntas"][i]["respuestas"][0] == jsonData["preguntas"][i]["correctas"][0]) {
        respuestasCorrectas++;
    }
    if (document.getElementById("o2").checked && jsonData["preguntas"][i]["respuestas"][1] == jsonData["preguntas"][i]["correctas"][0]) {
        respuestasCorrectas++;
    }
    if (document.getElementById("o3").checked && jsonData["preguntas"][i]["respuestas"][2] == jsonData["preguntas"][i]["correctas"][0]) {
        respuestasCorrectas++;
    }
    if (document.getElementById("o4").checked && jsonData["preguntas"][i]["respuestas"][3] == jsonData["preguntas"][i]["correctas"][0]) {
        respuestasCorrectas++;
    }
    i++;
    if (jsonData["cantidadPreguntas"] ==i) {
        document.write("<body style='background-color:#348322;'>");
        document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>Su Puntuación : " + respuestasCorrectas + "</div>");
        document.write("</body>");
    }
    iniciar(i);
}