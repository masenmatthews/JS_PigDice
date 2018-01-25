//biz

function Player() {
  this.playerName = "";
  this.totalScore = 0;
  this.roundScore = [];
    //this.turn = turn;
};

Player.prototype.rollDice = function() {
  var diceValue = Math.floor((Math.random() * 6) + 1);
  if (diceValue === 1) {
    this.roundScore === 0;
  } else {
    this.roundScore.push(diceValue);
    return diceValue;
  }
};

Player.prototype.hold = function() {
  return this.roundScore + this.totalScore;
  alert("Switch players!");
};

Player.prototype.win = function() {
  if (this.totalScore === 100) {
    alert("You win!")
  } else {
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

  $("button#roll1").click(function(event) {
    event.preventDefault();
    var rollOne = player1.rollDice();
    $("ul#player-one-roll").append("<li>" + rollOne + "</li>");
  });

  $("button#hold1").click(function(event) {
    event.preventDefault();
    var holdOne = player1.hold();
    $("ul#player-one-score").append("<li>" + holdOne + "</li>");
  });

  // $("button#roll2").click(function(event) {
  //   event.preventDefault();
  //   var randomNum = generatedNumber();
  //   outputTwoArray.push(randomNum);
  //   $("ul#player-two-roll").append("<li>" + randomNum + "</li>");
  // });
  //

  //
  // $("button#hold2").click(function(event) {
  //   event.preventDefault();
  //   alert("Switch to Player 1!");
  // });
});
