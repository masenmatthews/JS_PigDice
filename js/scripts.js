//biz
function Game(name1, name2) {
  this.name1 = name1;
  this.name2 = name2;
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
});
