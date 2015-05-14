# Project 0: The Game - Details

### Instructions
 - As per tradition, player X starts first 
 - Click a box to fill it with corresponding player token and pass the turn over to the other player
 - First player to place three tokens in a row either horizontally, vertically or diagonally, wins
 - Draw occurs if no player can accomplish this

---

### Notable Features

 - Boxes highlight on mouseover
 - Custom Google font enabled
 - Each player's move is logged via fadeIn and fadeOut
 - Cursor changes to current player's token to indicate who's turn it currently is (Thanks to Stella Halena)
 - Player's cannot select a box that has been previously selected
 - Player's cannot select a box once the game is over
 - Number of games played in the user's session are logged after a completed game
 - Player X and O's wins are stored within localStorage, allowing them to persist even after refreshing the page
 - Detects whether a draw game has occurred and correctly doesn't allocate a win to either player
 - Clearly displays who the winner is (If there even is one)
 - Simplistic design
 - Detects whether a player has won 3 games in a row
 - Ability to reset the grid once a game has been completed. Resetting the game involves :
    - Wiping player tokens off the grid
    - Removing the logged players moves from previous game
    - Removing the Victory message (or Draw message)
    - Correctly gives the first turn to Player X on the new game
 
---

# Project 0: The Game - End Report
### Overview

**Tic-tac-toe** is the classic game I've chosen to emulate, as part of my first project, through the magic of HTML, CSS and Javascript.

At first glance, the project seemed daunting due to the amount of components required in a successful TTT game. However, after thorough analysis of each element of the project including winning outcomes, placing player tokens on the grid and even UI Styling, the task proved considerably less intimidating and in all honesty, fairly simple.

Despite finding the project fairly simple, specific components forced me to research and discover completely new concepts and ideas that will no doubt prove useful for small-scale projects later on. Things like using 'localStorage' or event handlers, while foreign and confusing during the early stages of the project, I now find easy to understand and use.

---

### Method of Approach

Admittedly I tried briefly tackling the project without any planning, I also started editing the background colour of the game grid and other cosmetic elements. After being overwhelmed with the amount of things to take on I decide to devise a plan to make the project seem less daunting. I decided to: 

 - Using pen and paper, list all the things needed in a functional TTT game (ability to place player tokens, detect a winner etc.)
 - Create a rough sketch of my preferred layout, again using pen and paper
 - Now in Sublime Text, list the important variables and functions, giving meaningful names to each
 - Begin to code each function and test them regularly in Google Chrome

---

### Unsolved Problems

There are a number of features I missed out on completing because of difficulty. While they weren't necessary for a successful TTT game, some things like an unbeatable AI or the ability for the player to customise the grid dimensions proved too difficult to implement as they would've resulted in drastic changes to my existing logic of the game.

With time, however, I feel like I could definitely get these features in my game.
