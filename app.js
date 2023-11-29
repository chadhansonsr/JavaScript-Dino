// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact, image) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.image = image;
}
// Create Dino Objects
const getDinoJson = async () => {
  const dinoData = await fetch('dino.json');
  const jsonData = await dinoData.json();
  const dinosArray = jsonData.Dinos.map(dino => {
    let { species, weight, height, diet, where, when, fact } = dino;
    let image = `images/${species.toLowerCase()}.png`;
    return new Dino(species, weight, height, diet, where, when, fact, image);
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
    const gridContainer = document.getElementById("grid");

    dinosArray.forEach(dino => {
      const tile = document.createElement("div");
      tile.classList.add("grid-item");

      const imageElement = document.createElement("img");
      imageElement.src = dino.image;
      tile.appendChild(imageElement);

      const factElement = document.createElement("p");
      factElement.textContent = dino.fact;
      tile.appendChild(factElement);

      gridContainer.appendChild(tile);
    });
};
    // Add tiles to DOM
generateTiles();
// Remove form from screen


// On button click, prepare and display infographic
