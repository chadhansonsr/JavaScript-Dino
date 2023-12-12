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
  const response = await fetch('dino.json');
  const jsonData = await response.json();
  const dinosArray = [];

  if (jsonData && jsonData.Dinos) {
    for (let i = 0; i < 9; i++) {
      const dino = jsonData.Dinos[i];
      if (dino) {
        let { species, weight, height, diet, where, when, fact } = dino;
        let image = `images/${species.toLowerCase()}.png`;
        dinosArray.push(new Dino(species, weight, height, diet, where, when, fact, image));
      }
    }
  }

  return dinosArray;
}

// Create Human Object
function Human(name, weight, height, diet) {
  this.species = name;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
}

const human = new Human();

// Create IIFE to get human data from form
(() => {
  const form = document.getElementById('dino-compare');
  const compareButton = document.getElementById('btn');

  compareButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const weightInput = document.getElementById('weight');
    const feetInput = document.getElementById('feet');
    const inchesInput = document.getElementById('inches');
    const dietInput = document.getElementById('diet');

    const name = nameInput.value;
    const weight = parseInt(weightInput.value);
    const height = parseInt(feetInput.value) * 12 + parseInt(inchesInput.value);
    const diet = dietInput.value;

    human.species = name;
    human.weight = weight;
    human.height = height;
    human.diet = diet;

    form.reset();
    removeForm();

    displayInfo();
  });
})();

// Create Dino Compare Method for weight
Dino.prototype.compareWeight = function() {
  const dinoWeight = this.weight;
  const weightDifference = dinoWeight - human.weight;

  if (weightDifference > 0) {
    return `The ${this.species} weighs ${weightDifference} pounds more than the human.`;
  } else if (weightDifference < 0) {
    return `The human weighs ${Math.abs(weightDifference)} pounds more than the ${this.species}.`;
  } else {
    return `The ${this.species} and the human weigh the same.`;
  }
};

// Create Dino Compare Method for height
Dino.prototype.compareHeight = function() {
  const dinoHeight = this.height;
  const heightDifference = dinoHeight - human.height;

  if (heightDifference > 0) {
    return `The ${this.species} is ${heightDifference} inches taller than the human.`;
  } else if (heightDifference < 0) {
    return `The human is ${Math.abs(heightDifference)} inches taller than the ${this.species}.`;
  } else {
    return `The ${this.species} and the human are the same height.`;
  }
};

// Create Dino Compare Method for diet
Dino.prototype.compareDiet = function() {
  const dinoDiet = this.diet;
  const humanDiet = human.diet;

  if (dinoDiet === humanDiet) {
    return `The ${this.species} has the same diet as the human.`;
  } else {
    return `The ${this.species} has a different diet than the human.`;
  }
};

// Generate Tiles for each Dino in Array
const generateTiles = async () => {
  const dinosArray = await getDinoJson();
  const gridContainer = document.getElementById("grid");

  // Clear the grid container
  gridContainer.innerHTML = "";

  const humanTile = document.createElement("div");
  humanTile.classList.add("grid-item", "human");

  const humanHeaderElement = document.createElement("h3");
  humanHeaderElement.textContent = human.species; // Display the human name
  humanTile.appendChild(humanHeaderElement);

  const humanImageElement = document.createElement("img");
  humanImageElement.src = "images/human.png";
  humanTile.appendChild(humanImageElement);

  const humanFactElement = document.createElement("p");
  humanFactElement.textContent = "";
  humanTile.appendChild(humanFactElement);

  const middleIndex = Math.floor(dinosArray.length / 2);

  dinosArray.forEach((dino, index) => {
    const tile = document.createElement("div");
    tile.classList.add("grid-item");

    const nameElement = document.createElement("h3");
    nameElement.textContent = dino.species;
    tile.appendChild(nameElement);

    const imageElement = document.createElement("img");
    imageElement.src = dino.image;
    tile.appendChild(imageElement);

    // Display a random fact or comparison
    const factElement = document.createElement("p");
    factElement.textContent = getRandomFact(dino); 
    tile.appendChild(factElement);

    if (index === middleIndex) {
      gridContainer.appendChild(humanTile);
    }

    gridContainer.appendChild(tile);
  });
};

// Generate random number for fact/comparison determination
function getRandomFact(dino) {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return dino.fact;
    case 1:
      return dino.compareWeight();
    case 2:
      return dino.compareHeight();
    default:
      return dino.fact;
  }
}

// Remove form from screen
function removeForm() {
  const form = document.querySelector("#dino-compare");
  form.style.display = "none";
}

// On button click, prepare and display infographic
async function displayInfo() {
  generateTiles();
  removeForm();
}
