class Spell {
    constructor(name, power, mana) {
        this.name = name;
        this.level = 1;
        this.power = power;
        this.mana = mana;
    }
}
// we want to be an architech and make things easier for us down the road and avoid overengineering things
module.exports = Spell;
