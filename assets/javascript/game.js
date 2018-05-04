//Crystal game with random number
//Create variables for 4 crystals, losses, wins, randomNumber,
var randomNumber;
var loss = 0;
var win = 0;
var previous = 0;

var resetAndstart = function () {
    
    $(".crystals").empty();

    var images = ["assets/images/biggie.jpeg", "assets/images/eazy.jpeg", "assets/images/nas.jpeg", "assets/images/tupac.jpeg"]
    
    randomNumber = Math.floor(Math.random() * 69) + 30;
    
    $("#result").html("Random Number: " + randomNumber);
    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 11) + 1;
        var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "data-random": random
        });
        crystal.css({
            "background-image":"url(" + images[i] + ")",
            "background-size":"cover"
        });
        $(".crystals").append(crystal);
    }
    $("#previous").html("Total Score:" + previous);
}
resetAndstart();

//event delegation

$(document).on('click',".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: "+ previous);
    console.log(previous);
    
    if (previous > randomNumber) {
        
        loss++;
        
        $("#loss").html("You Loss" + loss);
        
        previous = 0;
        
        resetAndstart();
    }
    else if (previous === randomNumber) {
        win++
        $("#win").html("You Win" + win);
        previous = 0
        resetAndstart();
    }   
});

//Crystal will be given a random number from 1 to 12
//Generate a new number after a win or loss
