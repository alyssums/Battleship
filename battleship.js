// Grid from 0 - 6, ship.length = 3, so starting point has to be between 0 - 4
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var guessed = [];

// Check if the current guess has already been guessed
function alreadyGuessed() {
  for (var i = 0; i < guessed.length; i++) {
    if (guessed[i] == guess) {
      return true;
    }
  }
}

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! Enter a number from 0 - 6:");
  if (guess < 0 || guess > 6) {
    alert("Please enter a number from 0 - 6");
  } else {
    var isGuessed = alreadyGuessed();
    guesses = guesses + 1;
    guessed.push(guess); // add guess to array
    if (guess == location1 || guess == location2 || guess == location3) {
      if (isGuessed) {
        alert("You've already guessed " + guess);
      } else {
        hits = hits + 1;
        alert("HIT!");
        if (hits == 3) {
          isSunk = true;
          alert("You sunk my battleship!");
        }
      }
    } else {
      alert("MISS!");
    }
  }
}

var stats = ("You made " + guesses + " guesses which means your accuracy was " + (3/guesses));

document.getElementById('stats').innerHTML = (stats);
