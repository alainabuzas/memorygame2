console.log("Up and running!");

var cards = [
	{ 
		"rank": "queen",
		"suit": "hearts",
		"cardImage": "images/queen-of-hearts.png"
	},
	{
		"rank": "queen",
		"suit": "diamonds",
		"cardImage": "images/queen-of-diamonds.png"
	}, 
	{ 
		"rank": "king",
		"suit": "king of hearts",
		"cardImage": "images/king-of-hearts.png"
	}, 
	{
		"rank": "king",
		"suit": "king of diamonds",
		"cardImage": "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match! Refresh the page to play again!");
  } else {
      alert("Sorry, no match! Refresh the page to try again.");
  } 
};

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	} 
};

var createBoard = function () {
	for (var i=0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.setAttribute('class', 'space-fix');
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard ();
