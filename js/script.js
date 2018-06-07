// global variables
var colors = [
  '#3C989E', '#5DB5A4', '#F4CDA5', '#F57A82', '#E37B40', '#5E005E', '#AB2F52', '#41733F'
];
// New array that holds 2 copies of each color code from colors array
var moreColors = colors.concat(colors);
//Function to shuffle items in array based on Fisher–Yates shuffle
// https://bost.ocks.org/mike/shuffle/ was helpful
function shuffle(array) {

  for (var i = array.length - 1; i > 0; i--) {

    // Pick a remaining element…
    var randomIndex = Math.floor(Math.random() * i);
    var itemAtIndex = array[randomIndex];

    // And swap it with the current element.
    array[randomIndex] = array[i];
    array[i] = itemAtIndex;
  }

  return array;
}
// Shuffle the order of colors in array
var randomColors = shuffle(moreColors);
var squares = [];


function assignColors() {
  for (let i = 0; i < squares.length; i++) {
    $(squares[i]).css('background-color', randomColors[i]);
  }
}

function flipSquare() {
  
  // click on square and change the color
  $('.col').click(function () {
    //Set random colors for each square
    $(this).css("background-color", );
  });
}
// if/else statement so that only 1 square has color visible at a time
// in flipSquare: select color from randomColors when click on square happens



// function checkForMatch() {
  // Check for matching colors when two squares are "flipped"

// }

// win conditions
//  two colored divs need to match exactly 
//  Solitaire Mode
//  Player vs. Player Mode
//  Player vs. AI Mode

$(document).ready(function () {
  // Initialize Materialize components
  M.AutoInit();

  flipSquare();

  //default audio/background music?

  // Button Clicks

  // Solitaire Button Click
  $('#solitaire').click(function () {
    // Set game to play alone
    // Display Solitaire rules
    $('p').text("Click to turn over any two squares. If the two squares match, you win! If they don't match, click another square. Repeat as many times as you want!");
    // $('.modal').modal('open');
  });

  // PvP Button Click
  $('#twoPlayers').click(function () {
    // Set game to play against another player
    // Display PvP rules
    $('p').text("Player 1 starts: Click to turn over any two squares. If the two squares match, you win! If they don't match, Player 2 takes a turn to click two squares. Repeat as many times as you want!");
  });

  // PvAi Button Click
  $('#computer').click(function () {
    // Set game to play against computer/ai
    // Display PvAi rules
    $('p').text("Click to turn over any two squares. If the two squares match, you win! If they don't match, the computer takes a turn to click two squares. Repeat as many times as you want!");
  });

  // Reset Button
  $('#autorenew').click(function () {
    $('.col').css('background-color', '');
    // randomColors needs to refresh when this button is clicked!
  });

});
