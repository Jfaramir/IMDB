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
        return arrayPeliculas;
    };
    return Movie;
}());
exports.Movie = Movie;
