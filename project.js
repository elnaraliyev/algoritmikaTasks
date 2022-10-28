// Task 1
const sentence = ["sense", "make", "all", "will", "This"];
const reverseArray = (sentence) => sentence.reverse();

console.log(reverseArray(sentence));

// Task 2
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
const greetAliens = (aliens) => {
  aliens.forEach((alien) => {
    console.log(
      `Oh powerful ${alien}, we humans offer our unconditional surrender!`
    );
  });
};

greetAliens(aliens);

// Task 3
const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "my room",
  "temporary tattoos",
];
const myStuff = ["sweaters", "skateboards", "family-night", "my room"];
const justCoolStuff = (coolStuff, myStuff) => {
  const commonItems = coolStuff.filter(
    (coolItem) => myStuff.indexOf(coolItem) !== -1
  );

  return commonItems;
};

console.log(justCoolStuff(coolStuff, myStuff));

// Task 4
const meal = [
  { name: "arugula", source: "plant" },
  { name: "tomatoes", source: "plant" },
  { name: "lemon", source: "plant" },
  { name: "olive oil", source: "plant" },
];
const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
];

const isTheDinnerVegeterian = function (meals) {
  let isVegetarian = true;
  for (let meal of meals) {
    if (meal.source !== "plant") {
      isVegetarian = false;
      return isVegetarian;
    }
  }

  return isVegetarian;
};

console.log(isTheDinnerVegeterian(dinner));
console.log(isTheDinnerVegeterian(meal));