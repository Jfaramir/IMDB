"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var fs = require('fs');
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
    return Imdb;
}());
exports.Imdb = Imdb;
