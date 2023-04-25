const Character = require("./character");

class Paladin extends Character {
    constructor(name) {
        super(name, "paladin", 5, 5, 5, 5, 100, 100);
    }
}

module.exports = Paladin;