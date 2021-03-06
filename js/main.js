 console.log("Up and running!");
var points = 0;
var cards = [
{
	rank : "queen",
	suit : "hearts",
	cardImage : "images/queen-of-hearts.png"
},

{
	rank : "queen",
	suit : "diamonds",
	cardImage : "images/queen-of-diamonds.png"
},
{
	rank : "king",
	suit : "hearts",
	cardImage : "images/king-of-hearts.png"
},

{
	rank : "king",
	suit : "diamonds",
	cardImage : "images/king-of-diamonds.png"
}
];
/////////////////////////////////CARD MATCH CHECK ////////////////////////////////////////////
var cardsInPlay = [];
var checkForMatch = function ()
{	
	
	
	if (cardsInPlay.length === 2)
{

	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
		points += 1;  // add points if match found
		
	}
	else
	{
		alert("Sorry, Try again");
	}
	
}
document.getElementById("gameScore").innerHTML = points; //update gameScore div with new points

};
///////////////////////////////// CARD FLIP ////////////////////////////////////////////
var flipCard = function ()
{

var cardID = this.getAttribute("data-id"); // link cardID to position of card clicked, in turn choosing the card in the intial array

cardsInPlay.push(cards[cardID].rank); //push rank to cardsInPlay array

console.log("User flipped "+ cards[cardID].rank);///console logs for events
console.log(cards[cardID].cardImage);
console.log(cards[cardID].suit);

this.setAttribute("src",cards[cardID].cardImage); // set image source to selected image front



checkForMatch();

};

////////////////////// CARD IMAGE CREATION //////////////////////

var createBoard = function () {

	for (var i = 0; i <cards.length; i++)
	{
		var cardElement = document.createElement('img');  // Assign images to cardElement to hold them
		cardElement.setAttribute("src","images/back.png"); // set attribute for back of cards
		cardElement.setAttribute("data-id",i); // set attribute for data ID to link each card to card in cards array.
		cardElement.addEventListener('click', flipCard); // set on click event
		document.getElementById("game-board").appendChild(cardElement); // add card to game-board element via appendChild 
		
	}
};

createBoard();

/////////////////////////// RESET BUTTON /////////////////////////////////

var resetGame = function ()
{	
	var images = document.getElementsByTagName('img'); //create variable to hold existing images
	var l = images.length; // Assign variable due to liveNodes. Unable to use usual method of .length
    for (var i = 0; i < l; i++)
 {
    images[0].parentNode.removeChild(images[0]); //delete 1st image in variable list
}
	createBoard(); // restart initial card setup
	cardsInPlay = []; //reset card check array
	
};

document.getElementsByTagName("button")[0].addEventListener('click', resetGame);







