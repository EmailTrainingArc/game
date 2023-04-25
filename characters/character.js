// What if there was a way that we could add attributes to every character
// without manually adding the object property and value to each character?

// First, let's make another folder called 'characters' in our 'game' folder aka root folder
// then we can use class and constructor to act as a template for the stats of each character
// by importing './character' to each character file, and using the 'extends' and 'super' f(x)'s
 
class Character {
    constructor(name, className, attack, defense, speed, magic, health, mana) {
        this.name = name;
        this.className = className
        this.level = 1;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.magic = magic;
        this.health = health;
        this.mana = mana;
        this.spells = [];
        this.weapons = [];
        this.activePet = null; // means there's nothing there or returns false;
    }
    level_up() {
        this.level = this.level + 1;
        if (this.className === "shaman") {
            console.log( "leveling up " + this.className);
            this.attack = this.attack + 3;
            this.health = this.health + 11;
            this.mana = this.mana + 2;
        } else if (this.className === "mage") {
            console.log( "leveling up " + this.className);
            this.mana = this.mana + 17;
            this.magic = this.magic + 1;
        } else if (this.className === "warlock") {
            console.log( "leveling up " + this.className);
            this.health = this.health + 29;
            this.mana = this.mana + 11;
            this.speed = this.speed + 5;
        } else if (this.className === "warrior") {
            console.log( "leveling up " + this.className);
            this.defense = this.defense + 15;
            this.attack = this.attack + 20;
        } else if (this.className === "medic") {
            console.log( "leveling up " + this.className);
           this.speed = this.speed + 10;
           this.defense = this.defense + 10;
           this.health = this.health + 30;
        } else if (this.className === "paladin") {
            console.log( "leveling up " + this.className);
            this.health = this.health + 5;
            this.defense = this.defense + 10;
            this.attack = this.attack + 3;
            this.magic = this.magic + 4;
            this.mana = this.mana + 8;
        } else if (this.className === "gambler") {
            console.log( "leveling up " + this.className);
            this.speed = this.speed + 25;
            this.mana = this.mana + 8;
            this.magic = this.magic + 8;
        }
    }
    get_damage() {
        // i need a way to keep track of a user's active pet. If they have one, we get the pets damage, and add it
        // to the character's magic damage.
        if(this.activePet) {
            const petDamage = this.activePet.damage;
            const attackDamage = this.magic;
            return petDamage + attackDamage;
        }
    }
    summon_pet(petName) {
        // if we have a pet in our this.pets array, that matches the name passed in as an argument to this function,
        // and will let us summon it
        // we can loop over the pets we have, in order to find the pet we want to summon
        for(let i=0; i < this.pets.length; i++) {
            const pet = this.pets[i]; // this pet is is equal to to an individual pet element in our pet array
            if(pet.name === petName) {
                this.activePet = pet; // this function will summon our pet, putting it in our active pets
            }
        }
    }
}

// using this funciton we can go back and change what we did for HW 6 by removing the attributes
// that are common among every character

module.exports = Character;