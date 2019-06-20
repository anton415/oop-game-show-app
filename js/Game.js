/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game {
 	/**
 	 * @missed: used to track the number of missed guesses by the player.
 	 * @phrases: an array of five Phrase objects to use with the game.
 	 * @activePhrase: This is the Phrase object that's currently in play.
 	 */
 	constructor(missed = 0, phrases = ['hello world', 'hi there', 'game over', 'test me', 'OOP game'], activePhrase = null) {
 		this.missed = missed;
 		this.phrases = phrases;
 		this.activePhrase = activePhrase;
 		this.handleInteraction();
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
 		document.getElementById('overlay').className = 'start';

 		this.activePhrase = new Phrase(this.getRandomPhrase());
 		this.activePhrase.addPhraseToDisplay();
 	}
 	
 	/**
 	 * Method randomly retrieves one of the
 	 * phrases stored in the phrases array and returns it.
 	 */
 	getRandomPhrase() {
 		return this.phrases[Math.floor(Math.random() * this.phrases.length)];
 	}
 	
 	/**
 	 * Method controls most of the game
 	 * logic. It checks to see if the button clicked by the player matches a
 	 * letter in the phrase, and then directs the game based on a correct
 	 * or incorrect guess.
 	 */
 	handleInteraction() {
 		// get all key elements
 		const keyElements = document.querySelectorAll('.key');
 		// add eventListener to all key elements
 		keyElements.forEach(keyElement => {
 			keyElement.addEventListener('click', () => {
 				
 				if(this.activePhrase.checkLetter(keyElement.textContent)) {
 					this.activePhrase.showMatchedLetter(keyElement.textContent);
 					keyElement.className = 'chosen';
 				} else {
 					this.removeLife();
 					keyElement.className = 'wrong';
 				}
 				if(this.missed === 5) {
 					this.gameOver();
 				} else {
 					this.checkForWin();
 				}
 			});
 		});
 	}
 	
 	/**
 	 * Method removes a life from the scoreboard, by
 	 * replacing one of the liveHeart.png images with a lostHeart.png
 	 * image (found in the images folder) and increments the missed
 	 * property. If the player has five missed guesses,
 	 * then end the game by calling the gameOver() method.
 	 */
 	removeLife() {
 		let liveHearts = document.querySelectorAll('img');
 		let liveHeart = liveHearts[this.missed];
 		liveHeart.src = 'images/lostHeart.png';
 		
 		this.missed++;
 	}
 	
 	/**
 	 * Method checks to see if the player has
 	 * revealed all of the letters in the active phrase.
 	 */
 	checkForWin() {
 		let countOfHideLetters = document.querySelectorAll('.hide').length;
 		if(countOfHideLetters == 0) {
 			document.getElementById('overlay').className = 'win';
 			document.getElementById('overlay').style = 'visibility: visible';
 			
 			this.resetPhraseFromBoard();
 			this.resetHearts();
 			this.resetAllChosenLetters();
 			this.resetMainParameters();
 		}
 	}
 	
 	/**
 	 * Method displays the original start screen overlay,
 	 * and depending on the outcome of the game, updates the overlay.
 	 */
 	gameOver() {
 	 	document.getElementById('overlay').className = 'lose';
 		document.getElementById('overlay').style = 'visibility: visible';
 		
		this.resetPhraseFromBoard();
 		this.resetHearts();
 		this.resetAllChosenLetters();
 		this.resetMainParameters();
 	}
 	
 	/**
 	 * Reset phrase from board.
 	 */
 	resetPhraseFromBoard() {
 	 	const ulElement = document.querySelector('ul');
 		while(ulElement.firstChild) {
 			ulElement.removeChild(ulElement.firstChild);
 		}
 	}
 	
 	/**
 	 * Reset hearts.
 	 */
 	resetHearts() {
 	 	const allHearts = document.querySelectorAll('img');
 		allHearts.forEach(heart => {
 			heart.src =  'images/liveHeart.png';
 		});
 	}
 	
 	/**
 	 * Reset All Chosen Letters.
 	 */
 	resetAllChosenLetters() {
 		let keyElements = document.querySelectorAll('.chosen');
 		keyElements.forEach((keyElement) => {
 			keyElement.className = '';
 		});
 		
 		keyElements = document.querySelectorAll('.wrong');
 		keyElements.forEach((keyElement) => {
 			keyElement.className = '';
 		});
 	}
 	
 	resetMainParameters() {
 		this.missed = 0;
 	}
 	
 }
