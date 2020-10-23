import {Movie} from './peliculas';
var fs = require('fs');
export class Imdb {
    public peliculas:Movie[]
    constructor(peliculas:Movie[]) {
        this.peliculas = peliculas;
    }
    public escribirEnFicherJSON( nombreFichero : string ) {
        fs.writeFileSync( nombreFichero, JSON.stringify( this.peliculas) );
    } 
    public obtenertInstanciaIMDB( nombreFichero : string) {
      var imdb2 : Imdb;
        return  imdb2 = (JSON.parse(fs.readFileSync(nombreFichero)));   
    }
}
