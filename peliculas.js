"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    /**
     * mostrarPeliculas
     */
    Movie.prototype.mostrarPeliculas = function (arrayPeliculas) {
        var arrayAux = [];
        arrayAux.push(arrayPeliculas.title, arrayPeliculas.releaseYear, arrayPeliculas.actors, arrayPeliculas.nacionality, arrayPeliculas.director, arrayPeliculas.writer, arrayPeliculas.language, arrayPeliculas.platform, arrayPeliculas.isMCU, arrayPeliculas.mainCharacterName, arrayPeliculas.producer, arrayPeliculas.distributor, arrayPeliculas.genre);
        return arrayPeliculas;
    };
    return Movie;
}());
exports.Movie = Movie;
