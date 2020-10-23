"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.mostrarPeliculas = function () {
        var myArray = [];
        myArray.push(this.title, this.releaseYear, this.actors, this.nacionality, this.director, this.writer, this.language, this.platform, this.isMCU, this.mainCharacterName, this.producer, this.distributor, this.genre);
        console.log(myArray);
    };
    return Movie;
}());
exports.Movie = Movie;
