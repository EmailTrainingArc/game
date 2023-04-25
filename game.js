// this is where our game logic is going to go
// we will put the mechanics of our game here, and slowly
// build it over the next few lessons

// i want to create a new warlock in my game
// the warlock 'factory' is not located in this file
// the actual warlock itself SHOULD be located in this file, it's the game!

// How should I go about getting the warlcok class from the other file?
// We can't just do const warlock = new Warlock(); because it's not defined yet

const Warlock = require("./characters/warlock");
const Warrior = require("./characters/warrior")
// "./" means the same as 'in this directory' (specifically "./" refers to the root folder 'Game')
// similar to how 'cd ..' means to go back in the terminal or how 'code .' means to open the current folder
const Shaman = require("./characters/shaman");
const Mage = require("./characters/mage");
// require is another built-in function, calls in another file to the current one
const Gambler = require("./characters/gambler");
const Paladin = require("./characters/paladin");
const Medic = require("./characters/medic")
// It's time we add structure and organize our files in a recognizable and replicateable manner
// Because that is what we will need to do in the real world, it helps with finding bugs

const warlock = new Warlock("bogart");
console.log(warlock);

const warrior = new Warrior("bob");
console.log(warrior);

const shaman = new Shaman("gogocons");
console.log(shaman);

const mage = new Mage("pothead");
console.log(mage);

const pepe = new Gambler("pepe");
console.log(pepe);

const kennyG = new Paladin("ken griffin");
console.log(kennyG);

const rC = new Medic("stonkmedic");
console.log(rC);

shaman.level_up();
console.log(shaman);

mage.level_up();
console.log(mage);

shaman.summon_pet("Leopold");
console.log(shaman);

warlock.summon_pet("imp");
console.log(warlock);

console.log(shaman.get_damage());

console.log(warlock.get_damage());


// we have now created one of each class, and each of them have their own seperate files
// we can export anything from a file even strings, but 'module.exports' goes hand in hand with the 'class' f(x).

