# oop-game-show-app
OOP Game Show App. Project 4 from Treehouse. Full Stack Javascript learning path.

----
## Description
In this project, I create a browser-based, word guessing game: "Phrase Hunter." I use JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

Using JavaScript, I create two JavaScript classes with specific properties and methods. I create a Game class for managing the game, and a Phrase class to help with creating an array of Phrase objects.

My code choose a random phrase, split the phrase into letters, and put those letters onto the gameboard.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, my programming disable that letter on the onscreen keyboard.

----
## Live version
[OOP game show app](https://serdyuchenko.com/oop-game-show-app/)

----
## Instruction for run project
Open file:
```sh
index.html
```

----
## Code Comments
Code comments have been added explaining how the functions work.
