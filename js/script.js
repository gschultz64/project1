// global variables

var moves = 0;
var moveArray = [];
// colors available for the game board
var colors = [
  '#3C989E', '#5DB5A4', '#F4CDA5', '#F57A82', '#E37B40', '#5E005E', '#AB2F52', '#41733F'
];
// New array that holds 2 copies of each color code from colors array
var moreColors = colors.concat(colors);
// var moreColors = ['#3C989E', '#5DB5A4', '#F4CDA5', '#F57A82', '#E37B40', '#5E005E', '#AB2F52', '#41733F', 
// '#3C989E', '#5DB5A4', '#F4CDA5', '#F57A82', '#E37B40', '#5E005E', '#AB2F52', '#41733F']

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
// Shuffle the order of colors in array moreColors and put in new array randomColors
var randomColors = shuffle(moreColors);
// array to hold ids of each div with class "col"
var squares = ['#0', '#1', '#2', '#3', '#4', '#5', '#6', '#7',
  '#8', '#9', '#10', '#11', '#12', '#13', '#14', '#15'];

// When player clicks on a square, change the background color to one of randomColors 
function clickAction() {
  if ($(this).css("background-color") != 'rgba(0, 0, 0, 0)') {
    return;
  }
  if (moves % 2 === 0) {
    for (let i = 0; i < squares.length; i++) {
      $(squares[i]).css("background-color", '');
    }
  }
  var parsedId = parseInt(this.id);
  $(this).css("background-color", randomColors[parsedId]);
  console.log("box " + squares[parsedId] + " is " + randomColors[parsedId]);
  countMoves(randomColors[parsedId]);
  $('.moves').text(moves);
  checkForMatch();
}

// count player moves
function countMoves(color) {
  moves++;
  moveArray.push(color);
  console.log(moveArray)
}

function flipSquare() {
  for (let i = 0; i < squares.length; i++) {
    // click on square
    $(squares[i]).on('click', clickAction);
  }
}

function takeTurn() {
  if (moves % 2 === 0) {
    if ($('.turn').text() == 'Player 1') {
      $('.turn').text('Player 2').removeClass('blue').addClass('yellow');
    } else if ($('.turn').text() == 'Player 2') {
      $('.turn').text('Player 1').removeClass('yellow').addClass('blue');
    }
  }
}

function checkForMatch() {
  // // Check for matching colors when two squares are "flipped"
  if (moves % 2 === 0) {
    // console.log(this);
    if (moveArray[moveArray.length - 1] == moveArray[moveArray.length - 2]) {
      $('.turn').append(' You won!');
    } else {
      $('.turn').append(" Try again.");
    }
  } takeTurn();
}



// add disabled class to colors after match



$(document).ready(function () {
  // Initialize Materialize components
  M.AutoInit();
  // countMoves();
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
  // Reset Button
  $('#autorenew').click(function () {
    $('.col').css('background-color', '');
    shuffle(randomColors);
    moves = 0;
    $('.moves').text(moves);
    $('.turn').text('Player 1').removeClass('yellow').addClass('blue');
  });
});
// win conditions
//  two colored divs need to match exactly 
// when colors are matched, remove from randomColors? or keep them active and unclickable
//  Solitaire Mode
//  Player vs. Player Mode