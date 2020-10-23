import {Proffesional} from './profesionales';
import {Movie} from './peliculas';
import {Imdb} from './imdb';

var actor1 = new Proffesional("Keanu Reeves",56,"Masculino",77,180,"Negro","Café","Caucásico",false,["Canadiense", "Australiano"],0,"Actor");
var actor2 = new Proffesional("Adam Sandler",54,"Masculino",75,177,"Negro","Verdoso","Caucásico",false,["Estadounidense", "Uruguayo"],0,"Actor");
var actor3 = new Proffesional("Noriyuki Morita",73,"Masculino",70,160,"Negro","Marrones","Asiatico",true,["Estadounidense"],0,"Actor");
var director1 = new Proffesional("Mel Gibson",64,"Masculino",78,177,"Negro","Azul","Caucásico",false,["Estadounidense"],2,"Director");
var escritor1 = new Proffesional("Joanne Rowling",55,"Femenino",65,165,"Rubio","verdoso","Caucásico",false,["Britanica"],0,"Escritora");

var movie = new Movie("Jhon Wick",2014,"Estadounidense",["Accion"]);
movie.actors = [actor1,actor2,actor3];
movie.director = director1;
movie.writer = escritor1;
movie.language = "Ingles";
movie.platform = "Netflix";
movie.isMCU = false;
movie.mainCharacterName = "Jhon Wick";
movie.producer = "MJW Films";
movie.distributor = "Summit Entertainment";

var movie2 = new Movie("Pixels",2015,"Estadounidense",["Fantasia","comedia"]);
movie2.actors = [actor1,actor2,actor3];
movie2.director = director1;
movie2.writer = escritor1;
movie2.language = "Ingles";
movie2.platform = "HBO";
movie2.isMCU = false;
movie2.mainCharacterName = "Sam Brenner";
movie2.producer = "Happy Madison Productions";
movie2.distributor = "Columbia Pictures";

var movie3 = new Movie("Avengers:Endgame",2019,"Estadounidense",["Superheroes","Accion","Ciencia Ficcion"]);
movie3.actors = [actor1,actor2,actor3];
movie3.director = director1;
movie3.writer = escritor1;
movie3.language = "Ingles";
movie3.platform = "Disney+";
movie3.isMCU = true;
movie3.mainCharacterName = "Tony Stark";
movie3.producer = "Marvel Studios";
movie3.distributor = "Walt Disney Studios Motion Pictures";

var movie4 = new Movie("Las aventuras de Tadeo Jones",2012,"Española",["Animacion","Aventura","Comedia","Infantil"]);
movie4.actors = [actor1,actor2,actor3];
movie4.director = director1;
movie4.writer = escritor1;
movie4.language = "Español";
movie4.platform = "Amazon Prime";
movie4.isMCU = false;
movie4.mainCharacterName = "Tadeo Jones";
movie4.producer = "El Toro Pictures";
movie4.distributor = "Paramount Pictures";


//console.log(movie.mostrarPeliculas(movie));

const arrayMovies:Movie[] = [movie,movie2,movie3,movie4]; 


console.log(actor1.mostrarProffesional());
console.log(actor2.mostrarProffesional());
console.log(actor3.mostrarProffesional());
console.log(director1.mostrarProffesional());
console.log(escritor1.mostrarProffesional());

var imdb = new Imdb(arrayMovies);


//  console.log(imdb.peliculas);
