// this file is just going to have the class 'Warlock' in it for the homework
// remember to cd game
const Pet = require("./pet");
const Character = require("./character");

class Warlock extends Character {
    constructor (name) {
        super(name, "warlock", 3, 7, 5, 3, 200, 100); // he's going to have low stats but will be able to summon pets to make up for it
        this.pets = [];
        // every warlock starts with an imp as its first pet!
        const imp = new Pet ("imp", 3);
        this.pets.push(imp);
    }
}

module.exports = Warlock;
// module.exports is a javascript function that allows others to access this file
// otherwise code can only be localized to this file



// *NOTE THE STRUCTURE OF THIS FILE*
// 1. Imports at the top
// 2. Code in the middle
// 3. Exports at the bottom
// *THIS IS ALWAYS A PROGRAMMING STANDARDS*