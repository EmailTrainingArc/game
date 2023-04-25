class Pet {
    constructor(name, damage) {
        this.name = name;
        this.level = 1;
        this.damage = damage;
    }
}

module.exports = Pet;

// this file 'pets.js' should probably be refactored into a 'summons' folder