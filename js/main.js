 console.log("Up and running!");

var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];
var checkForMatch = function ()
{

if (cardsInPlay.length === 2)
{
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else
	{
		alert("Sorry, Try again");
	}

}

};

var flipCard = function (cardID)
{

console.log("User flipped "+ cards[cardID]);
cardsInPlay.push(cardID);
checkForMatch();

};

flipCard(0);
flipCard(2);
