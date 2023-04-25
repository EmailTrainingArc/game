const Character = require("./character");

class Medic extends Character {
    constructor(name) {
        super(name, "medic", 5, 5, 5, 5, 100, 100);
    }
}

module.exports = Medic;