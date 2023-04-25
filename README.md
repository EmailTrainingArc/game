Game

In our game, you can choose a class, level up, cast spells, and attack mobs until you.
You should be able to play it in the terminal. We're setting up the boiler plate first (like rough draft of fights)

We're going to keep this basic, simple.

#DAY 1 OF GAME

I want to be able to level up a character, and increase its stats.

I want the stats of each character to include:

Level
Attack
Defense
Magic
Speed
Health
Mana

In our game, 10 is a very strong stat, the max to start with. 1 is the lowest.
These are the boundaries we are going to define.

Health and mana are different. They have no bounds.

Mage is a high mana, high magic but low HP/attack character that starts with a Fireball spell.

Shaman is a mid-range allrounder that starts with a Fire Elemental Pet and the weapon Thunderfury and Light Heal.

Warlock is a high HP, weak character that will deal most of it's damage with summons and starts with an Imp pet.

## Game Rules

Our game logic dictates a character's damage is calculated using this algorithm:

- If a character has an activePet, then we take the activePet's damage as a starting value and add it to the character's magic damage
- If a character is casting a spell, then we take the spell's damage and add it to the character's magic damage.
- If a character has neither an activePet nor a spell, we will add their weapon's damage to the character's attack damage.

## Pet Logic

A character can have an array of pets, but they can only have a single active pet. They have to summon the pet.
