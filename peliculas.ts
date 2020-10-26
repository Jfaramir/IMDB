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
    constructor(title?:string,releaseYear?:number,nacionality?:string,genre?:string[]) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    
    
    public mostrarPeliculas() {
        let myArray : unknown [] = [];
        myArray.push(this.title, this.releaseYear,this.actors,this.nacionality,this.director,this.writer,this.language,this.platform,this.isMCU,this.mainCharacterName,
            this.producer,this.distributor,this.genre);
        console.log(myArray); 

    }

}