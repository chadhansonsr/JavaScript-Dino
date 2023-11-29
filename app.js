// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}
// Create Dino Objects
const path = require('path');
const fs = require('fs');

const getDinoJson = () => {
  const dinoData = fs.readFileSync(path.join(__dirname, 'dino.json'));
  const jsonData = JSON.parse(dinoData);
  const dinosArray = jsonData.Dinos.map(dino => {
    let { species, weight, height, diet, where, when, fact } = dino;
    return new Dino(species, weight, height, diet, where, when, fact);
  });
  return dinosArray;
};

// Create Human Object
function Human(name, weight, height, diet) {
    this.species = name;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
}

const human = new Human();


// Use IIFE to get human data from form


// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array
const generateTiles = async () => {
    const dinosArray = await getDinoJson();
    dinosArray.forEach(dino => {

    });
};
    // Add tiles to DOM
generateTiles();
// Remove form from screen


// On button click, prepare and display infographic
