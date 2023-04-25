// class Fireball extends Spell {
//     constructor(name, damage, mana) {
//         super(name, damage, mana);
//     }
// }

// module.exports = Fireball;


// *** WE GOT RID OF THE ABOVE BC WE DON'T NEED A CLASS FOR EACH SPELL BC IT OVERCOMPLICATES THINGS ***
// INSTEAD...

const Spell = require("./spells");

const fireball = new Spell("Fireball", 5, 20);

module.exports = fireball; // we'll need to import this function for our mage
