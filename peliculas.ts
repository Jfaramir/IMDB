import {Proffesional} from './profesionales'

export class Movie {
    public title:string;
    public releaseYear:number
    public actors: Proffesional[];
    public nacionality: string;
    public director: Proffesional;
    public writer: Proffesional;
    public language: string;
    public platform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string[];
    constructor(title:string,releaseYear:number,nacionality:string,genre:string[]) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    
    /**
     * mostrarPeliculas
     */
    public mostrarPeliculas(arrayPeliculas:Movie) {
        var arrayAux:Array<unknown> = [];
        arrayAux.push(arrayPeliculas.title,arrayPeliculas.releaseYear,arrayPeliculas.actors,arrayPeliculas.nacionality,arrayPeliculas.director,arrayPeliculas.writer,arrayPeliculas.language,
                arrayPeliculas.platform,arrayPeliculas.isMCU,arrayPeliculas.mainCharacterName,arrayPeliculas.producer,arrayPeliculas.distributor,arrayPeliculas.genre);

        return arrayPeliculas;
        
    }
    


}