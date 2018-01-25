//biz

function Player(turn) {
  this.playerName = "";
  this.totalScore = 0;
  this.roundScore = [];
  this.turn = turn;
};

Player.prototype.rollDice = function() {
  var diceValue = Math.floor((Math.random() * 6) + 1);
  if (diceValue === 1) {

    alert("Next player's turn!");
    //this.roundScore === 0;
  } else {
    this.roundScore.push(diceValue);
    console.log(this.roundScore);
    return diceValue;
  }
};

Player.prototype.hold = function() {
  var sum = this.roundScore.reduce((total, amount) => total + amount);
  this.totalScore += sum;
};

// Player.prototype.turn = function() {
//
// };

Player.prototype.win = function() {
  if (this.totalScore >= 100) {
    alert("You win!");
  } else {
    return this.totalScore;
  }
};

//ui
$(document).ready(function() {

  var player1 = new Player(name1);
  var player2 = new Player(name2);

  $("form#name-input").submit(function(event) {
    event.preventDefault();

    name1 = $("input#name1").val();
    name2 = $("input#name2").val();

    $("#welcome-message").text("Welcome to Pig Dice, " + name1 + " and " + name2 + "!");
    $("form#name-input").hide();
    $("#game-interface").fadeIn();
  });

  $("button#roll1").click(function() {
    var rollOne = player1.rollDice();
    $("ul#player-one-roll").text(rollOne);
  });

  $("button#hold1").click(function() {
    player1.hold();
    $("ul#player-one-score").text(player1.totalScore);
    player1.win();
  });

  $("button#roll2").click(function() {
    var rollTwo = player2.rollDice();
    $("ul#player-two-roll").text(rollTwo);
  });

  $("button#hold2").click(function() {
    player2.hold();
    $("ul#player-two-score").text(player2.totalScore);
  });

    // if (diceValue === 1) {
    // $(".well").hide();
    //   // this.roundScore === 0;
    // }

});
