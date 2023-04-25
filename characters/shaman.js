const Pet = require("./pet");
const Character = require("./character");
const thunderfury = require("../weapons/thunderfury");
const lightheal = require("../spells/lightheal");

class Shaman extends Character{
    constructor (name) {
        super(name, "shaman", 6, 8, 3, 6, 100, 100);
        this.pets = [];
        const leopold = new Pet("Leopold", 4);
        this.pets.push(leopold);
        this.weapons.push(thunderfury);
        this.spells.push(lightheal);
    }
}

module.exports = Shaman;