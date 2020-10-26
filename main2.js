"use strict";
exports.__esModule = true;
var peliculas_1 = require("./peliculas");
var preguntas = ["¿Cuál es el nombre de la película?", "¿De qué año es?", "¿De dónde es la película? (Nacionalidad)", "¿Cuál es el género?", "Pertenece a otro género? Escribelo o escribe ´no`", "Pertenece a otro género? Escribelo o escribe ´no`"];
var respuestas = [];
function pregunta(i) {
    process.stdout.write(preguntas[i]);
}
process.stdin.on("data", function (data) {
    respuestas.push(data.toString().trim());
    if (respuestas.length < preguntas.length) {
        pregunta(respuestas.length);
        for (var i = 3; i < respuestas.length; i++) {
            if (respuestas[i] === "no") {
                process.exit();
            }
        }
    }
    else {
        process.exit();
    }
});
function crearMovie() {
    var nuevaMovie = new peliculas_1.Movie();
    var siguePreguntando = true;
    for (var i = 0; i < respuestas.length; i++) {
        if (i == 0) {
            nuevaMovie.title = respuestas[i];
        }
        else if (i == 1) {
            nuevaMovie.releaseYear = parseInt(respuestas[i]);
        }
        else if (i == 2) {
            nuevaMovie.nacionality = respuestas[i];
        }
        else if (i > 2 && siguePreguntando) {
            nuevaMovie.genre.push(respuestas[i]);
            if (respuestas[i] === "no") {
                siguePreguntando = false;
            }
        }
    }
    return nuevaMovie;
}
function newMovie() {
    pregunta(0);
    crearMovie();
    console.log(respuestas);
}
newMovie();
