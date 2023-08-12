//Part One
console.log('Part 1: Espresso Machine Class Constructor');

class MakeEspressoMachine {
  constructor(name, model, color, price) {
    this.name = name
    this.model = model
    this.color = color
    this.price = price
  }

  description() {
    console.log(`${this.name} Espresso Machine, model: ${this.model} in ${this.color} is priced at $${this.price} plus tax.`);
  }

  shipTag() {
    console.log(`${this.model} Espresso Machine manufactured by ${this.name} in the color: ${this.color} will arrive in 3 business days.`);
  }

  warranty() {
    console.log(`Model: ${this.model} made by ${this.name} has a 5 year, limited warranty on parts and repairs. Call 1-800-Espreso or e-mail: ${this.name}-warranty@${this.name}.com`);
  }
}

let gaggia = new MakeEspressoMachine('Gaggia', 'T-100', 'red', 399);
console.log(gaggia);
gaggia.description();
gaggia.warranty();
gaggia.shipTag();

//Part Two: OOP
console.log(`Part Two: Convert code to OOP`);
//Procedural Programming example to covert
let hourlyRate = 250;
let hours = 160;
let taxRate = 0.35;

function calculateProfit(rate, numOfHours, taxes) {
  return rate * numOfHours * (1 - taxes);
}

let profit = calculateProfit(hourlyRate, hours, taxRate);
console.log(profit);

//Add More Functionality
function holdForTaxes(profitMade) {
  return hourlyRate * hours - profitMade;
}

let taxesHeld = holdForTaxes(profit);
console.log(taxesHeld);
console.log('class Constructor: Wages to replace Procedural code above');

//Class Constructor to replace Procedural Code OOP: Encapsulation
console.log('OOP Pillar One: Encapsulation')
class Wages {
  constructor(hourlyRate, hours, taxRate) {
    this.hourlyRate = hourlyRate
    this.hours = hours
    this.taxRate = taxRate
  }

  calculateProfit() {
    return this.hourlyRate * this.hours * (1 - this.taxRate);
   
  }
  holdForTaxes(fn) {
    return this.hourlyRate * this.hours - this.calculateProfit();
  }
}

//Add EmployeeA
let employeeA = new Wages(250, 160, 0.35);

//Add Employee profit and taxes message
console.log(employeeA);

console.log(`Employee profit: $${employeeA.calculateProfit()} and employeeA will need to hold $${employeeA.holdForTaxes()} for taxes`);
//change tax rate later in code
employeeA.taxRate = 0.25;
console.log(employeeA);
console.log(`Profit: ${employeeA.calculateProfit()} & Taxes: ${employeeA.holdForTaxes()}`);
//change hours later in code
employeeA.hours = 80;
console.log(employeeA);
console.log(`Profit: ${employeeA.calculateProfit()} & Taxes: ${employeeA.holdForTaxes()}`);

//Part Three OOP: Abstraction
//hide hourly rate/profit 
console.log('OOP Pillar One: Abstraction');
console.log('Useable Properties Method abstracted from view with local vars');
class AgencyContractor {
  constructor(hourlyRate, hours, taxRate) {
    this.hours = hours
    this.taxRate = taxRate
    let rate = hourlyRate
    let calculateProfit = function() {
      return rate * this.hours * (1 - this.taxRate);
    }
    
    this.invoiceClient = function() {
      return `Your invoice total is $${rate * this.hours}`
    }
  }
}

let jen = new AgencyContractor(250, 160, 0.35);
console.log( jen );
console.log( jen.invoiceClient() );
//Undefined Examples
console.log( jen.hourlyRate );
console.log(jen.rate); 
console.log( jen.calculateProfit ); 
console.log( jen.holdForTaxes ); 
//TypeError examples
//console.log( jen.calculateProfit() );
//console.log( jen.holdForTaxes() );

console.log(`Cohort1 Class 26`);
console.log('Part One OOP');
console.log(`Inheritance extends Parent class to Child class `);

class Animal1 {
  constructor(name, type) {
    this.name = name
    this.type = type
  }
  speak() {
    console.log(`${this.name} makes a Sound`);
  }
}

class Dog1 extends Animal1 {
  constructor(name, type, breed, sound) {
    super(name, type)
    this.breed = breed
    this.sound = sound
  }

  speak() {
    super.speak()
    console.log(`The sound is a ${this.sound}!`);
  }
}

let boxer = new Dog1('Moe', 'Dog', 'Boxer', 'Woof, Woof Bark' );
console.log(boxer);
boxer.speak();


//Create A Farm:
// Parent Animal Class
class Animal {
  constructor(type, name, sex, food, location, sound) {
    this.type = type
    this.name = name
    this.sex = sex
    this.food = food
    this.location = location
    this.sound = sound
  }
  speak() {
    console.log(`${this.name} is a ${this.type} who makes a '${this.sound}' sound to speak.`);
  }
  details() {
    console.log(`${this.name} is a ${this.sex} ${this.type} who lives in the ${this.location} and is fed ${this.food} daily.`);
  }
}
//Dog Child Class
class Dog extends Animal {
  constructor(type, name, sex, food, location, sound, coat, breed) {
    super(type, name, sex, food, location, sound)
    this.coat = coat
    this.breed = breed
  }
  speak() {
    super.speak()
  }
  details() {
    super.details()
    console.log(`${this.name} is a ${this.breed} breed with a ${this.coat} coat.`);
  }
}
// Bird Child Class
class Bird extends Animal {
  constructor(type, name, sex, food, location, sound, domOrWild, species, color ) {
    super(type, name, sex, food, location, sound)
    this.domOrWild = domOrWild
    this.species = species
    this.color = color
  }
  speak() {
    super.speak();
  }
  details() {
    super.details();
    console.log(`${this.name} is a ${this.domOrWild} ${this.species} with ${this.color}. `)
  }
}

// build individual animals
let moe = new Dog('dog', 'Moe', 'male', 'kibble & freshly cooked chicken with sweet potatoes', 'house', 'Woof Woof', 'short-haired, brindle', 'Boxer' );
console.log(moe);
moe.speak();
moe.details();

let fluffy = new Bird('bird', 'Fluffy', 'female', 'birdseed, nuts and fresh fruit', 'house in a cage', 'Tweet Tweet', 'domesticated', 'Parakeet', 'green and yellow feathers');
console.log(fluffy);
fluffy.speak();
fluffy.details();