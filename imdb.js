"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var profesionales_1 = require("./profesionales");
var peliculas_1 = require("./peliculas");
var fs = require('fs');
/* var readline = require('readline'); */
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.escribirEnFicherJSON = function (nombreFichero) {
        fs.writeFileSync(nombreFichero, JSON.stringify(this.peliculas));
    };
    Imdb.prototype.obtenertInstanciaIMDB = function (nombreFichero) {
        var imdb2;
        return imdb2 = (JSON.parse(fs.readFileSync(nombreFichero)));
    };
    Imdb.prototype.nuevaPelicula = function (bbdd) {
        var preguntas = ["Titulo de la pelicula ", "Año de lanzamiento ", "Nacionalidad de la pelicula ", "Genero de la pelicula ", "Nombre del actor ", "Edad ", "Genero ", "Peso ", "Altura ",
            "Color de pelo ", "Color de ojos ", "Raza ", "Retirado?¿ (true/false) ", "Nacionalidad ", "Numero de oscars ", "Profesion ", "Nombre del director ", "Edad ", "Genero ", "Peso ", "Altura ",
            "Color de pelo ", "Color de ojos ", "Raza ", "Retirado?¿ (true/false) ", "Nacionalidad ", "Numero de oscars ", "Profesion ", "Nombre del escritor ", "Edad ", "Genero ", "Peso ", "Altura ",
            "Color de pelo ", "Color de ojos ", "Raza ", "Retirado?¿ (true/false) ", "Nacionalidad ", "Numero de oscars ", "Profesion ", "Idioma ", "Plataforma ", "del MCU (true/false) ",
            "Nombre del protagonista ", "Productora ", "Distribuidora "];
        var respuestas = [];
        var newPelicula;
        var newActor;
        var newDirector;
        var newEscritor;
        var first = true;
        var last = false;
        var nombreFichero = bbdd;
        function pregunta(i) {
            process.stdout.write(preguntas[i]);
        }
        if (first == true) {
            pregunta(0);
            first = false;
        }
        process.stdin.on('data', function respuesta(data) {
            respuestas.push(data.toString().trim());
            if (respuestas.length < preguntas.length) {
                pregunta(respuestas.length);
            }
            else {
                last = true;
                newPelicula = new peliculas_1.Movie(respuestas[0], parseInt(respuestas[1]), respuestas[2], respuestas[3]);
                newActor = new profesionales_1.Proffesional(respuestas[4], parseInt(respuestas[5]), respuestas[6], parseInt(respuestas[7]), parseInt(respuestas[8]), respuestas[9], respuestas[10], respuestas[11], true, respuestas[13], parseInt(respuestas[14]), respuestas[15]);
                newDirector = new profesionales_1.Proffesional(respuestas[16], parseInt(respuestas[17]), respuestas[18], parseInt(respuestas[19]), parseInt(respuestas[20]), respuestas[21], respuestas[22], respuestas[23], true, respuestas[25], parseInt(respuestas[26]), respuestas[27]);
                newEscritor = new profesionales_1.Proffesional(respuestas[28], parseInt(respuestas[29]), respuestas[30], parseInt(respuestas[31]), parseInt(respuestas[32]), respuestas[33], respuestas[34], respuestas[35], true, respuestas[37], parseInt(respuestas[38]), respuestas[39]);
                newPelicula.actors = [newActor];
                newPelicula.director = newDirector;
                newPelicula.writer = newDirector;
                newPelicula.language = respuestas[40];
                newPelicula.platform = respuestas[41];
                newPelicula.isMCU = false;
                newPelicula.mainCharacterName = respuestas[43];
                newPelicula.producer = respuestas[44];
                newPelicula.distributor = respuestas[45];
                var arrayPeliculas = [newPelicula];
                var imdb;
                var imdbAux;
                imdb = (JSON.parse(fs.readFileSync(nombreFichero)));
                var addImdb = new Imdb(arrayPeliculas);
                imdbAux = [imdb, addImdb];
                var json = JSON.stringify(imdbAux);
                console.log(json);
                fs.writeFileSync(nombreFichero, json);
                process.exit();
            }
        });
    };
    return Imdb;
}());
exports.Imdb = Imdb;
