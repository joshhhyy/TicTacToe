$(document).ready(function () {

  var toggleColour = 0;
  var toggleMouse = 0;
  var xWin = 'XXX';
  var oWin = 'OOO';
  var winCount = 0;
  localStorage.xWinCount = localStorage.xWinCount || 0;
  localStorage.oWinCount = localStorage.oWinCount || 0;
  var drawCount = 0;

  $('.xWinCounter p').html(localStorage.xWinCount);
  $('.oWinCounter p').html(localStorage.oWinCount);



// -------------- TURN FUNCTIONS -------------- //

  var fillSquare = function() {
    if ( !$(this).hasClass("selected") ) {
      $(this).addClass("selected");
      if (toggleColour === 0) {
        $(this).html('X')
        toggleColour += 1
        logMove('X', this)
        winCheck('X')
        selectCursor()
      } else {
        $(this).html('O')
        toggleColour -= 1
        logMove('O', this)
        winCheck('O')
        selectCursor()
      }
    }
  }

  var logMove = function(player, that) {
    $('.headPanel p').prepend('<br>Player ' + player + ' has moved onto square: ' + $(that).attr('id') ).fadeOut().fadeIn()
  }

  $('#board').on('click', '.box', fillSquare);

// ------------- OUTCOMES FUNCTIONS ------------- //


  var winCheck = function(player) {
    rowWin(player, xWin);
    rowWin(player, oWin);
    columnWin(player, xWin);
    columnWin(player, oWin);
    diagonalWin(player, xWin)
    diagonalWin(player, oWin)
    if (drawCount === 54) {
      $('h2').html('No one is a winner!').fadeOut().fadeIn();
      winCount += 1
      $('.winCounter p').html(winCount)
    }
  }

  var victoryLog = function (player) {
    $('h2').html('Player ' + player + ' is the winner').fadeOut().fadeIn();
    winCount += 1
    $('.winCounter p').html(winCount)
  }

  var rowWin = function(player, winParameter) {
    if (
        $('#1').html() + $('#2').html() + $('#3').html() === (winParameter) ||
        $('#4').html() + $('#5').html() + $('#6').html() === (winParameter) ||
        $('#7').html() + $('#8').html() + $('#9').html() === (winParameter)
        ) {
      victoryLog(player)
      incrementPlayerWins(player)
      $('#board .box').addClass('selected')
    } else {
      drawCount += 1
    }  
  }

  var columnWin = function(player, winParameter) {
    if (
        $('#1').html() + $('#4').html() + $('#7').html() === (winParameter) ||
        $('#2').html() + $('#5').html() + $('#8').html() === (winParameter) ||
        $('#3').html() + $('#6').html() + $('#9').html() === (winParameter)
        ) {
      victoryLog(player)
      incrementPlayerWins(player)
      $('#board .box').addClass('selected')
    } else {
      drawCount += 1
    }
  }

  var diagonalWin = function(player, winParameter) {
    if (
        $('#1').html() + $('#5').html() + $('#9').html() === (winParameter) ||
        $('#3').html() + $('#5').html() + $('#7').html() === (winParameter)
        ) {
      victoryLog(player)
      incrementPlayerWins(player)
      $('#board .box').addClass('selected')
    } else {
      drawCount += 1
    }
  }

  var incrementPlayerWins = function (player) {
    if (player === 'X') {
      localStorage.xWinCount = parseInt(localStorage.xWinCount) + 1;
      $('.xWinCounter p').html(localStorage.xWinCount)
    } else {
      localStorage.oWinCount = parseInt(localStorage.oWinCount) + 1
      $('.oWinCounter p').html(localStorage.oWinCount)
    }
  }

  var victoryLog = function (player) {
    $('h2').html('Player ' + player + ' is the winner').fadeOut().fadeIn();
    winCount += 1
    $('.winCounter p').html(winCount)
  }


// -------- HIGHLIGHT BOXES & MOUSE CURSOR --------- //

  var selectBox = function() {
    $(this).css({'opacity': 0.7})
  }

  var offBox = function() {
    $(this).css({'opacity': 1})
  }

  var selectCursor = function() {
    if (toggleMouse === 0) {
      $('#board').css({'cursor': 'url(http://i.imgur.com/weu8kXG.png), auto'})
      toggleMouse += 1
    } else {
      $('#board').css({'cursor': 'url(http://i.imgur.com/ltfupkM.png), auto'})
      toggleMouse -= 1
    }
  }

  $('.box').on('mouseover', selectBox)
  $('.box').on('mouseleave', offBox)


// ----------------- RESET GAME -------------------- //

var resetGame = function() {
  $('.box').html('').fadeOut().fadeIn()
  $('h2').html('Commence Battle').fadeOut().fadeIn()
  $('.headPanel p').html('').fadeOut().fadeIn()
  toggleColour = 0
  toggleMouse = 0
  drawCount = 0
  $(".selected").removeClass("selected"); 
}

  $('.resetGame').on('click', resetGame)  







});