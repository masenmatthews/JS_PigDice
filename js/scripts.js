//biz
function Players(name1, name2) {
  this.name1 = name1;
  this.name2 = name2;
}

function Game(turnTotal, totalScore) {
  this.turnTotal = turnTotal;
  this.totalScore = totalScore;
}

var generatedNumber = function() {
 var genNum = Math.floor((Math.random() * 6) + 1);
 // var genNumArray = genNum.push();
 // console.log(genNumArray);
 return genNum;
}

//ui
$(document).ready(function() {
  var outputOneArray = [];
  var outputTwoArray = [];

  $("form#name-input").submit(function(event) {
    event.preventDefault();

    var name1 = $("input#name1").val();
    var name2 = $("input#name2").val();

    newPlayers = new Players(name1, name2);

    $("#welcome-message").text("Welcome to Pig Dice, " + name1 + " and " + name2 + "!");
    $("form#name-input").hide();
    $("#game-interface").fadeIn();
  });

  $("button#roll1").click(function(event) {
    event.preventDefault();
    var randomNum = generatedNumber();
    outputOneArray.push(randomNum);
    console.log(outputOneArray);
    $("ul#player-one-roll").append("<li>" + randomNum + "</li>");
  });

  $("button#roll2").click(function(event) {
    event.preventDefault();
    var randomNum = generatedNumber();
    outputTwoArray.push(randomNum);
    console.log(outputTwoArray);
    $("ul#player-two-roll").append("<li>" + randomNum + "</li>");
  });




});



//var randomNumberBetween1and6 =

  //});
// });
