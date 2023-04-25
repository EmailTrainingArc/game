// First let's import our character class into this file
const Character = require("./character");

// Polymorphism: keeps things really clean/organized and DRY (don't repeat yourself)
class Gambler extends Character { // this is saying our gambler extends from a parent class 'Character'
    constructor(name) {
        super(name, "gambler", 5, 5, 5, 5, 100, 100); // super calls the constructor of the parent class, in this case 'Character'
    }
}

module.exports = Gambler;