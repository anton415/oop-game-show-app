/**
 * Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * @author Anton Serdyuchenko
 * anton415@gmail.com
 * serdyuchenko.com
 */
 class Phrase {
 	/**
 	 * @param phrase: this is the actual phrase the Phrase object is representing.
 	 */
 	constructor(phrase) {
 		this.phrase = phrase.toLowerCase();
 	}
 	
 	/**
 	 * Add letter placeholders to the display when the game starts.
 	 */
 	addPhraseToDisplay() {
 		const ulElement = document.querySelector('ul');
 		
 		[...this.phrase].forEach(letter => {
 			const textNode = document.createTextNode(letter);
 			const liElement = document.createElement('li');
 			liElement.appendChild(textNode);

 			if(letter != ' ') {
 				liElement.className = 'hide letter ' + letter;
 			} else {
 				liElement.className = 'space';
 			}
 			document.querySelector('ul').appendChild(liElement);
 		});
 	}
 	
 	/**
 	 * Check to see if the letter selected by the player matches a letter in the phrase.
 	 */
 	checkLetter() {
 		
 	}
 	
 	/**
 	 * Reveal the letter(s) on the board that matches the player's selection.
 	 */
 	showMatchedLetter(letter) {
 		const letterElements = document.querySelectorAll('.' + letter);
 		console.log(letterElements);
 		letterElements.forEach(letterElement => {
 			letterElement.className = 'show letter ' + letter;
 		});
 	}
 }
const phrase = new Phrase('hello world');
phrase.addPhraseToDisplay();
phrase.showMatchedLetter('l')
