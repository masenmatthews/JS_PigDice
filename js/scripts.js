//biz
function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.roundScore = 0;
}

Player.prototype.score = function() {
  return this.round +
}

var player1 = new Player()


var rollDice = function() {
 var genNum = Math.floor((Math.random() * 6) + 1);
 if (genNum === 1) {
   alert("Switch players!");
 } else {
 return genNum;
 }
};

// var rollSum = function() {
//   for (var i = 0, i <= outputOneArray.length, i++)

//ui
$(document).ready(function() {
  var outputOneArray = [];
  var outputTwoArray = [];

  $("form#name-input").submit(function(event) {
    event.preventDefault();

    var name1 = $("input#name1").val();
    var name2 = $("input#name2").val();

    newPlayer = new Player(name1, name2);

    $("#welcome-message").text("Welcome to Pig Dice, " + name1 + " and " + name2 + "!");
    $("form#name-input").hide();
    $("#game-interface").fadeIn();
  });

  $("button#roll1").click(function(event) {
    event.preventDefault();
    var randomNum = generatedNumber();
    outputOneArray.push(randomNum);
    $("ul#player-one-roll").append("<li>" + randomNum + "</li>");
  });

  $("button#roll2").click(function(event) {
    event.preventDefault();
    var randomNum = generatedNumber();
    outputTwoArray.push(randomNum);
    $("ul#player-two-roll").append("<li>" + randomNum + "</li>");
  });

  $("button#hold1").click(function(event) {
    event.preventDefault();
    alert("Switch to Player 2!");
  });

  $("button#hold2").click(function(event) {
    event.preventDefault();
    alert("Switch to Player 1!");
  });
});

  //newGame = new Game(turnTotal, totalScore)

//   for (var i = 0; i < outputOneArray.length; i++) {
//     for (sum += outputOneArray[i]); {
//     console.log(outputOneArray);
//   }
// };





//var randomNumberBetween1and6 =

  //});
// });
