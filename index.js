import { print } from './js/lib.js';
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
const dog = {
   species: 'dog',
   name: 'Ozzy',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'Woof-woof!',
};

const cat = {
   species: 'cat',
   name: 'Debbie',
   gender: 'female',
   legs: 4,
   hands: 0,
   saying: 'Meeeow!',
};

const women = {
   species: 'human',
   name: 'Gwen',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: 'Hi there!'
};

const man = {
   species: 'human',
   name: 'David',
   gender: 'male',
   legs: 2,
   hands: 2,
   saying: 'What\'s up?'
};

const catWomen = {
   species: 'cat-human',
   name: 'Dita',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: cat.saying
};

// ======== OUTPUT ========

const inhabitants = [dog, cat, women, man, catWomen]
const inhabitantsKeys = ['species', 'name', 'gender', 'legs', 'hands', 'saying']
const inhabitantsInfo = []

inhabitants.map(inhabitant => {
   inhabitantsInfo.push(
      [inhabitantsKeys.map(key => inhabitant[key]).join('; ')]
   )
})

inhabitantsInfo.forEach(inhabitantInfo => print(inhabitantInfo))
