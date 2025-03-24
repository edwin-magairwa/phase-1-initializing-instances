class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  #dessert;
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }
}

// Example instances
const myBreakfast = new Breakfast("Pancakes", "Coffee");
const myLunch = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
const myDinner = new Dinner("Greek Salad", "Minestrone", "Steak", "Cheesecake");

console.log(myBreakfast);
console.log(myLunch);
console.log(myDinner);