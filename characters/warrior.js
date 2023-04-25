const Character = require("./character");
const Sword = require("../weapons/sword"); // "sword" can be upper or lower case when imported but it must match the function below

class Warrior extends Character { //it's programming standard to capitalize the first letter of a class
    constructor (name) {
        super(name, "warrior", 5, 5, 5, 5, 100, 100);
        this.weapons = [],
        this.weapons.push(Sword);
    }
}

module.exports = Warrior; //make sure that this function is at the bottom of the file
