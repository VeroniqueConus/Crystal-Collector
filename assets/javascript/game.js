//Variables
var gameStats = {
  wins: 0,
  losses: 0,
  totalScore: 0, //player's accumulated gem values from clicks
  targetNumber: 0 //player's goal number to hit
};
var crystals = {
  blueGem: {
    value: 0
  },
  greyGem: {
    value: 0
  },
  pinkGem: {
    value: 0
  },
  greenGem: {
    value: 0
  }
};

$(document).ready(function() {
    startTheGame();
  });
  
function getTargetNumber() {
  // a random number is generated
  gameStats.targetNumber = Math.floor(Math.random() * 121);
  $("#targetNumber").html(gameStats.targetNumber);
  console.log(targetNumber);
}

function crystalValues() {
  // give crystals values
  $.each(["blueGem", "greyGem", "pinkGem", "greenGem"], function(index, value) {
    crystalValue(value);
  });
}

function startTheGame() {
  gameStats.totalScore = 0;
  $("#totalScore").html(gameStats.totalScore);
  getTargetNumber();
  crystalValues();
}

function crystalValue(whichCrystal) {
  crystals[whichCrystal].element = $("#" + whichCrystal);
  crystals[whichCrystal].element.off("click").on("click", function() {
    guessMade(whichCrystal);
  });
  crystals[whichCrystal].value = Math.floor(Math.random() * 12) + 1;
}

function guessMade(whichCrystal) {
  var addedValues = crystals[whichCrystal].value;
  gameStats.totalScore += addedValues;
  $("#totalScore").html(gameStats.totalScore);
  compareScore();
}

function compareScore() {
  //check player's totalScore against the targetNumber
  if (gameStats.totalScore > gameStats.targetNumber) {
    console.log("You lose :(");
    plusLoss(); //if player goes over, note as a loss
  } else if (gameStats.totalScore === gameStats.targetNumber) {
    console.log("You win :)");
    plusWin(); //if player's totalScore equals targetNumber, note as a win
  }

  function plusWin() {
    gameStats.wins += 1;
    $("#wins").html(gameStats.wins);
    startTheGame();
  }

  function plusLoss() {
    gameStats.losses += 1;
    $("#losses").html(gameStats.losses);
    startTheGame();
  }
}
