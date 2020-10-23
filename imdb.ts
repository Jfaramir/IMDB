import {Movie} from './peliculas';
import {Proffesional} from './profesionales';

export class Imdb {
    public peliculas:Movie[]
    constructor(peliculas:Movie[]) {
        this.peliculas = peliculas;
    }
}