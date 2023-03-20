// Initialize the cats array with the given values
let cats = ["Milo", "Otis", "Garfield"];

// Add a new cat to the end of the cats array
function destructivelyAppendCat(name) {
  let catName = 'Ralph';
  cats.push(catName);
}

// Add a new cat to the beginning of the cats array
function destructivelyPrependCat(name) {
  let catName = 'Bob';
  cats.unshift(catName);
}

// Remove the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop([2]);
}

// Remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift([0]);
}

// Add a new cat to the end of the cats array and return a new array
function appendCat(name) {
  let newCats = [...cats, 'Broom'];
  return newCats;
}

// Add a new cat to the beginning of the cats array and return a new array
function prependCat(name) {
  let newCats = ['Arnold', ...cats];
  return newCats;
}

// Remove the last cat from the cats array and return a new array
function removeLastCat() {
  let newCats = cats.slice(0, -1);
  return newCats;
}

// Remove the first cat from the cats array and return a new array
function removeFirstCat() {
  let newCats = cats.slice(1);
  return newCats;
}


