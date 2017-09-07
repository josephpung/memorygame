 console.log("Up and running!");

var cards = ["Queen", "King", "Queen", "King"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];
cardsInPlay.push(cardOne);


console.log("User flipped" +" "+ cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped" +" "+ cardTwo);


if (cardsInPlay.length === 2)
{
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else
	{
		alert("Sorry, Try again")
	}

}
