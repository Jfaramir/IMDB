"use strict";
exports.__esModule = true;
exports.Proffesional = void 0;
var Proffesional = /** @class */ (function () {
    function Proffesional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumbers, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumbers = oscarNumbers;
        this.profession = profession;
    }
    Proffesional.prototype.mostrarProffesional = function () {
        var myArray = [];
        myArray.push(this.name, this.age, this.genre, this.weight, this.height, this.hairColor, this.eyeColor, this.race, this.isRetired, this.nationality, this.oscarNumbers, this.profession);
        console.log(myArray);
    };
    return Proffesional;
}());
exports.Proffesional = Proffesional;
