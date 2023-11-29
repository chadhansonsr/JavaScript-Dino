const fs = require('fs');

// Create Dino Objects
const getDinoJson = () => {
  const dinoData = fs.readFileSync('./dino.json');
  const jsonData = JSON.parse(dinoData);
  const dinosArray = jsonData.Dinos.map(dino => {
    let { species, weight, height, diet, where, when, fact } = dino;
    return new Dino(species, weight, height, diet, where, when, fact);
  });
  return dinosArray;
};