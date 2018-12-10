//variables
var randomNumber = 0;
var wins = 0;
var losses = 0;
var images = ["assets/images/blue%20crystal.png","assets/images/green%20crystal.jpeg","assets/images/red%20crystal.ico","assets/images/yellow%20crystal.png"];

//display random number in number generater function
function number(min, max) {
    randomNumber = Math.floor(Math.random() * ((max - min) + 1) + min);
    return randomNumber;
}

// Calling function called number to append random number
$(".random-number").append(number(120, 19));

//when user clicks on image, the stored number will display
var counter = 0;
$(".crystal-image").on("click", function() {
    counter = counter + 1;
    alert("new score: " + counter);
    $("#guessesremaing").text(userScore);

    if (counter === randomNumber) {
        alert("You Win!");
    }
    else if(counter >= randomNumber) {
        alert("You lose!");
    }
});



var numberOptions = [5, 6, 7, 8, 9, 10, 11, 12,]
 
// Create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOption.length; i++) {
    var crystalimage = $("<img>");
    crystalimage.addClass("crystal-image");

// Each crystal will be given a src link to the crystal image.
crystalimage.attr("src", "assets/images/blue%20crystal.png", "assets/images/green%20crystal.jpeg", "assets/images/red%20crystal.ico", "assets/images/yellow%20crystal.png");

// Each image crystal will be given a data attribut called data-crystalValue.
// This data will be set equal to the array value.
crystalimage.attr("data-crystalValue", numberOptions[i]);

// Each crystal-image with classes/Attributes will be added to the page.
$("#crystals").append(crystalimage);

// This will apply to all 4 images all the page.


}
    
//score will display and add in the score area



//when user matches the random number the user wins




//wehn the user goes over the random number, user loses. the game reserts and a new random number is displayed