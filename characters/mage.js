// part of hw6
const Character = require ("./character");
const fireball = require("../spells/fireball"); // '../' means 'go back one folder'

class Mage extends Character {
    constructor(name) {
        super(name, "mage", 2, 3, 5, 7, 50, 200);
        this.spells = [];
        this.spells.push(fireball);
    }
}

module.exports = Mage;
