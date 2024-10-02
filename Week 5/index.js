const numbers = [1, 2, 10, 12, -3, 4];

// function numberSort(a, b) {
//     // if(a < b) {
//     //     return -1
//     // } else if(a === b) {
//     //     return 0
//     // } else if(a > b) {
//     //     return 1
//     // }
//     return a - b
// }

const numberCopy = [...numbers];

// numbers.sort(numberSort)
numberCopy.sort((a, b) => a - b);

numbers.filter((value) => value > 0);

numbers.map((value) => value / 2);

numbers.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

class Animal {
  constructor(name, habitat, color) {
    this.name = name;
    this.habitat = habitat;
    this.color = color;
  }

  sayHi() {
    console.log(
      `Hi! My name is ${this.name}, I live in a ${this.habitat} and my color is ${this.color}.`
    );
  }
}

const rufus = new Animal("Rufus", "house", "golden")
const msPuff = new Animal("Ms. Puff", "ocean", "white and brown")

msPuff.sayHi()
rufus.sayHi()

const spongebob = {
    name: "SpongeBob SquarePants",
    habitat: "Pineapple",
    color: "Yellow",
    sayHi: () => {
        console.log(
            `Hi! My name is SpongeBob, I live in a Pineapple and my color is yellow.`
          );
    }
}

spongebob.name = "Patrick"

const property = "color"

spongebob[property]

