/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = new Game();
document.getElementById('btn__reset').addEventListener('click', () => {
	game = new Game();
	game.startGame();
});
// get all key elements
const keyElements = document.querySelectorAll('.key');
// add eventListener to all key elements
keyElements.forEach(keyElement => {
 	keyElement.addEventListener('click', () => {
 		game.handleInteraction(keyElement);
 	});
});
