import { Proffesional } from './profesionales';
import {Movie} from './peliculas';
<<<<<<< HEAD
var fs = require ('fs');
=======
import { table } from 'console';

var fs = require('fs');
/* var readline = require('readline'); */

>>>>>>> ad07c838da8c2939384c012e4214309bb9f15764
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

    public nuevaPelicula() {
        
        var preguntas = ["Titulo de la pelicula ","Año de lanzamiento ","Nacionalidad de la pelicula ","Genero de la pelicula ","Nombre del actor ","Edad ","Genero ","Peso ","Altura ",
            "Color de pelo ","Color de ojos ","Raza ","Retirado?¿ (true/false) ","Nacionalidad ","Numero de oscars ","Profesion ","Nombre del director ","Edad ","Genero ","Peso ","Altura ",
            "Color de pelo ","Color de ojos ","Raza ","Retirado?¿ (true/false) ","Nacionalidad ","Numero de oscars ","Profesion ","Nombre del escritor ","Edad ","Genero ","Peso ","Altura ",
            "Color de pelo ","Color de ojos ","Raza ","Retirado?¿ (true/false) ","Nacionalidad ","Numero de oscars ","Profesion ","Idioma ","Plataforma ","del MCU (true/false) ",
            "Nombre del protagonista ","Productora ","Distribuidora "];
        var respuestas = [];
        var newPelicula: Movie; 
        var newActor: Proffesional;
        var newDirector: Proffesional;
        var newEscritor: Proffesional;
        var first:boolean = true;
        var last:boolean = false;

        function pregunta(i:number) {
            process.stdout.write(preguntas[i]);
        }

        if (first == true) {
            pregunta(0);
            first = false;
        }

        process.stdin.on('data',function respuesta(data:unknown) {
            
            respuestas.push(data.toString().trim());

            if (respuestas.length < preguntas.length) {
                pregunta(respuestas.length);
            } else {
                last = true;
                newPelicula = new Movie(respuestas[0],parseInt(respuestas[1]),respuestas[2],respuestas[3]);
                newActor = new Proffesional(respuestas[4],parseInt(respuestas[5]),respuestas[6],parseInt(respuestas[7]),parseInt(respuestas[8]),respuestas[9],respuestas[10],respuestas[11],
                    true,respuestas[13],parseInt(respuestas[14]),respuestas[15]);
                newDirector = new Proffesional(respuestas[16],parseInt(respuestas[17]),respuestas[18],parseInt(respuestas[19]),parseInt(respuestas[20]),respuestas[21],respuestas[22],
                respuestas[23],true,respuestas[25],parseInt(respuestas[26]),respuestas[27]);
                newEscritor = new Proffesional(respuestas[28],parseInt(respuestas[29]),respuestas[30],parseInt(respuestas[31]),parseInt(respuestas[32]),respuestas[33],respuestas[34],
                respuestas[35],true,respuestas[37],parseInt(respuestas[38]),respuestas[39]);
                newPelicula.actors = [newActor];
                newPelicula.director = newDirector;
                newPelicula.writer = newDirector;
                newPelicula.language = respuestas[40];
                newPelicula.platform = respuestas[41];
                newPelicula.isMCU = false;
                newPelicula.mainCharacterName = respuestas[43];
                newPelicula.producer = respuestas[44];
                newPelicula.distributor = respuestas[45];

                var arrayPeliculas:Movie[] = [newPelicula];

                var imdb : Imdb;
                var imdbAux : Imdb[];
                imdb = (JSON.parse(fs.readFileSync("imdbBBDD.json")));

                var addImdb = new Imdb(arrayPeliculas);
                
                imdbAux  = [imdb,addImdb];
                
                var json = JSON.stringify(imdbAux);

                console.log(json);

                fs.writeFileSync('imdbBBDD.json', json);

                process.exit();
            }
        })
    }
}

