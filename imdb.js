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
    Imdb.prototype.nuevaPelicula = function () {
        /* var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Titulo", function(answer) {
            console.log("Thank you for your valuable feedback:", answer);rl.close();}
        
        ); */
        var preguntas = ["Titulo de la pelicula", "Año de lanzamiento", "nacionalidad de la pelicula", "genero de la pelicula", "nombre de actor", "edad", "genero", "peso", "altura", "color de pelo",
            "color de ojos", "raza", "esta retirado?¿(true/false)", "nacionalidad", "numero de oscars", "profesion", "nombre de director", "edad", "genero", "peso", "altura", "color de pelo",
            "color de ojos", "raza", "esta retirado?¿(true/false)", "nacionalidad", "numero de oscars", "profesion", "nombre de escritor", "edad", "genero", "peso", "altura", "color de pelo",
            "color de ojos", "raza", "esta retirado?¿(true/false)", "nacionalidad", "numero de oscars", "profesion", "lenguaje", "plataforma", "del MCU(true/false)", "Nombre del protagonista",
            "productora", "distribuidora"];
        var respuestas = [];
        function pregunta(n) {
            process.stdout.write(preguntas[n]);
        }
        //returns true
        function getBoolean(value) {
            switch (value) {
                case "true":
                    return true;
                default:
                    return false;
            }
        }
        pregunta(0);
        process.stdin.on('data', function (data) {
            if (data.valueOf() == "string") {
                respuestas.push(data.toString().trim());
            }
            else if (data.valueOf() == "number") {
                respuestas.push(parseInt(data.toString()));
            }
            else if (data.valueOf() == "boolean") {
                respuestas.push(data.toString().toLowerCase());
            }
            if (respuestas.length < preguntas.length) {
                pregunta(respuestas.length);
            }
            else {
                var pelicula = new peliculas_1.Movie(respuestas[0].toString(), parseInt(respuestas[1].toString()), respuestas[2].toString(), respuestas[3].toString());
                var actor = new profesionales_1.Proffesional(respuestas[4].toString(), parseInt(respuestas[5].toString()), respuestas[6].toString(), parseInt(respuestas[7].toString()), parseInt(respuestas[8].toString()), respuestas[9].toString(), respuestas[10].toString(), respuestas[11].toString(), getBoolean(respuestas[12].toString()), respuestas[13].toString(), parseInt(respuestas[14].toString()), respuestas[15].toString());
                var director1 = new profesionales_1.Proffesional(respuestas[16].toString(), parseInt(respuestas[17].toString()), respuestas[18].toString(), parseInt(respuestas[19].toString()), parseInt(respuestas[20].toString()), respuestas[21].toString(), respuestas[22].toString(), respuestas[23].toString(), getBoolean(respuestas[24].toString()), respuestas[25].toString(), parseInt(respuestas[26].toString()), respuestas[27].toString());
                var escritor1 = new profesionales_1.Proffesional(respuestas[28].toString(), parseInt(respuestas[29].toString()), respuestas[30].toString(), parseInt(respuestas[31].toString()), parseInt(respuestas[32].toString()), respuestas[33].toString(), respuestas[34].toString(), respuestas[35].toString(), getBoolean(respuestas[36].toString()), respuestas[37].toString(), parseInt(respuestas[38].toString()), respuestas[39].toString());
                pelicula.actors = [actor];
                pelicula.director = director1;
                pelicula.writer = escritor1;
                pelicula.language = respuestas[40].toString();
                pelicula.platform = respuestas[41].toString();
                pelicula.isMCU = getBoolean(respuestas[42].toString());
                pelicula.mainCharacterName = respuestas[43].toString();
                pelicula.producer = respuestas[44].toString();
                pelicula.distributor = respuestas[45].toString();
                process.exit();
            }
        });
    };
    return Imdb;
}());
exports.Imdb = Imdb;
