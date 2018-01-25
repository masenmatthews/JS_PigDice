//biz
function Player(name, totalScore, roundScore) {
  this.name = name;
  this.totalScore = 0;
  this.roundScore = 0;
}

Player.prototype.rollingDice = function() {
  var genNum = Math.floor((Math.random() * 6) + 1);
  if (genNum === 1) {
    alert("Switch players!");
  } else {
  return genNum;
  }
 };

//ui
$(document).ready(function() {
  $("form#name-input").submit(function(event) {
    event.preventDefault();

    var name1 = $("input#name1").val();
    var name2 = $("input#name2").val();

    newPlayer = new Player(name1, name2);

    $("#welcome-message").text("Welcome to Pig Dice, " + name1 + " and " + name2 + "!");
    $("form#name-input").hide();
    $("#game-interface").fadeIn();
  });

  $("button#roll1").click(rollDice(event)) {
    event.preventDefault();
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

  //});
// });
