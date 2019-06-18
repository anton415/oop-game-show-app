/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game {
 	/**
 	 * @missed: used to track the number of missed guesses by the player.
 	 * @phrases: an array of five Phrase objects to use with the game.
 	 * @activePhrase: This is the Phrase object that's currently in play.
 	 */
 	constructor(missed = 0, phrases, activePhrase = null) {
 		this.missed = missed;
 		this.phrases = phrases;
 		this.activePhrase = activePhrase;
 	}
 	
 	/**
 	 * Hides the start screen overlay, calls the
 	 * getRandomPhrase() method, and sets the activePhrase property
 	 * with the chosen phrase. It also adds that phrase to the board by
 	 * calling the addPhraseToDisplay() method on the active Phrase
 	 * object.
 	 */
 	startGame() {
 		document.getElementById('overlay').style = 'visibility: hidden';
 		this.activePhrase = this.getRandomPhrase();
 		const phrase = new Phrase(this.activePhrase);
 		phrase.addPhraseToDisplay();
 	}
 	
 	/**
 	 * Method randomly retrieves one of the
 	 * phrases stored in the phrases array and returns it.
 	 */
 	getRandomPhrase() {
 		return this.phrases[0];
 	}
 	
 	/**
 	 * Method controls most of the game
 	 * logic. It checks to see if the button clicked by the player matches a
 	 * letter in the phrase, and then directs the game based on a correct
 	 * or incorrect guess.
 	 */
 	handleInteraction() {
 	
 	}
 	
 	/**
 	 * Method removes a life from the scoreboard, by
 	 * replacing one of the liveHeart.png images with a lostHeart.png
 	 * image (found in the images folder) and increments the missed
 	 * property. If the player has five missed guesses,
 	 * then end the game by calling the gameOver() method.
 	 */
 	removeLife() {
 	
 	}
 	
 	/**
 	 * Method checks to see if the player has
 	 * revealed all of the letters in the active phrase.
 	 */
 	checkForWin() {
 	
 	}
 	
 	/**
 	 * Method displays the original start screen overlay,
 	 * and depending on the outcome of the game, updates the overlay.
 	 */
 	gameOver() {
 	
 	}
 }
