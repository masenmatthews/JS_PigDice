//biz
function Game(name1, name2) {
  this.name1 = name1;
  this.name2 = name2;
}

// function Dice(side1, side2, side3, side4, side5, side6) {
//   this.side1 = side1;
//   this.side2 = side2;
//   this.side3 = side3;
//   this.side4 = side4;
//   this.side5 = side5;
//   this.side6 = side6;
// }

function roll () {
  var num = Math.floor(Math.random() * (6 - 0 + 1));
}

//ui
$(document).ready(function() {
  $("form#name-input").submit(function(event) {
    event.preventDefault();

    var name1 = $("input#name1").val();
    var name2 = $("input#name2").val();

    newGame = new Game(name1, name2);

    $("#welcome-message").text("Welcome to Pig Dice, " + name1 + " and " + name2 + "!");
    $("form#name-input").hide();
    $("#game-interface").fadeIn();
  });

  $("button.roll").click(function()) {
      event.preventDefault();
  });
});


//var randomNumberBetween1and6 =

  //});
// });
