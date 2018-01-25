//biz
var diceValue = function() {
  return Math.floor((Math.random() * 6) + 1);
};

function Player(turn) {
  this.playerName = "";
  this.totalScore = 0;
  this.roundScore = 0;
  this.roll = 0;
  this.turn = turn;
};

Player.prototype.rollDice = function() {
  if (this.roll === 1) {
    this.roundScore === 0;
    alert("Switch players!");
  } else {
    return this.roundScore + this.totalScore;
  }
};

Player.prototype.hold = function() {
  return this.totalScore = this.roundScore + this.totalScore;
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

  var newPlayer = new Player(player1, player2)

  var player1 = "";
  var player2 = "";

  $("form#name-input").submit(function(event) {
    event.preventDefault();

    player1 = $("input#name1").val();
    player2 = $("input#name2").val();

    $("#welcome-message").text("Welcome to Pig Dice, " + player1 + " and " + player2 + "!");
    $("form#name-input").hide();
    $("#game-interface").fadeIn();
  });


  $("button#roll1").click(function(event) {
    event.preventDefault();
    var rollOne = player1.rollDice();
    console.log(rollDice());
    $("ul#player-one-roll").append("<li>" + randomNum + "</li>");
  });

  // $("button#roll2").click(function(event) {
  //   event.preventDefault();
  //   var randomNum = generatedNumber();
  //   outputTwoArray.push(randomNum);
  //   $("ul#player-two-roll").append("<li>" + randomNum + "</li>");
  // });
  //
  // $("button#hold1").click(function(event) {
  //   event.preventDefault();
  //   alert("Switch to Player 2!");
  // });
  //
  // $("button#hold2").click(function(event) {
  //   event.preventDefault();
  //   alert("Switch to Player 1!");
  // });
});
