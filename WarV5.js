var makeDeck = function() {
    var deck =[];
    
    var suits = ["Diamonds", "Hearts", "Clubs", "Spades"];
    var suitIndex = 0;
    while (suitIndex < suits.length){
        var currentSuit = suits[suitIndex];

//        console.log("Current suit : "+currentSuit)
        var rankCounter = 2;
        while (rankCounter <= 14) {
            var cardName = rankCounter;
            if(cardName == 11 ){
                cardName = "Jack"
            }else if(cardName == 12) {
                cardName = "Queen"
            }else if(cardName == 13){
                cardName = "King"
            }else if (cardName == 14){
                cardName = "Ace"
            }
            var card = {
                name: cardName,
                suit: currentSuit,
                rank: rankCounter
            };
//            console.log("rank : "+rankCounter);
            deck.push(card);
            rankCounter = rankCounter + 1;
        }

        suitIndex=suitIndex+1;
    }
    return deck;

};

var addArray = function (fromArray, toArray){
    var index = 0;
    while(index<fromArray.length){
        toArray.unshift(fromArray[index]);
        index = index + 1;
    }
    return toArray
};
var getRandomIndex = function(size){
    return Math.floor(Math.random() * size)
}
var shuffleCards = function (cards){
    var index = 0;

    while(index<cards.length){
        var randomIndex = getRandomIndex(cards.length);
        var currentItem = cards[index];
        var randomItem = cards[randomIndex];
        cards[index] = randomItem;
        cards[randomIndex] = currentItem;
        index = index + 1;
        }
    return cards
    };


var deck = shuffleCards(makeDeck());

var playerHand = deck.splice(0, 26);
var computerHand = deck;

var startRound = function (input) {
var playerCard = playerHand.pop();
var computerCard = computerHand.pop();

    if((playerHand.length ==0) ||(computerHand.length == 0)) {
        console.log("game over: Final score - Player: " + playerHand.length + " Computer: " + computerHand.length)
    } else if (playerCard.rank > computerCard.rank) {
        playerHand.unshift(playerCard);
        playerHand.unshift(computerCard);
        console.log("Player wins with " + playerCard.name + " of " + playerCard.suit + " Computer played the " + computerCard.name + " of " + computerCard.suit + " Player Hand: " + playerHand.length + " Computer Hand: " + computerHand.length)


    } else if (playerCard.rank < computerCard.rank) {
        computerHand.unshift(playerCard);
        computerHand.unshift(computerCard);
        console.log("Computer wins with " + computerCard.name + " of " + computerCard.suit + " Player played the " + playerCard.name + " of " + playerCard.suit + " Player Hand: " + playerHand.length + " Computer Hand: " + computerHand.length)

    } else if (playerCard.rank = computerCard.rank) {
        var warCards = [];
        var warWinnings = [];
        console.log("It's war! Player card is " + playerCard.name + " of " + playerCard.suit + " and computer card is " + computerCard.name + " of " + computerCard.suit);

            var playerFaceDown = playerHand.splice(0, 3);
            var computerFaceDown = computerHand.splice(0, 3);
            var playerFaceUp = playerHand.pop();
            var computerFaceUp = computerHand.pop();

            warCards.push(playerCard);
            warCards.push(computerCard)
            warCards.push(...playerFaceDown);
            warCards.push(...computerFaceDown);
            warCards.push(playerFaceUp);
            warCards.push(computerFaceUp);

             if (playerFaceUp.rank > computerFaceUp.rank) {
                console.log("Player wins the war")
                playerHand = addArray(warCards, playerHand);
                console.log("Player has " + playerFaceUp.name + " of " + playerFaceUp.suit + " and computer played " + computerFaceUp.name + " of " + computerFaceUp.suit + " Player Hand: " + playerHand.length + " Computer Hand: " + computerHand.length)
            } else if (playerFaceUp.rank < computerFaceUp.rank){
                console.log("Computer wins war")
                computerHand = addArray(warCards, computerHand);
                console.log("Computer played " + computerFaceUp.name + " of " + computerFaceUp.suit + " Player played the " + playerFaceUp.name + " of " + playerFaceUp.suit + " Player Hand: " + playerHand.length + " Computer Hand: " + computerHand.length)
            } else if (playerFaceUp == computerFaceUp) {
                console.log("another war condition")
    }
}
};