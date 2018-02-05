//GAME CONTROLLER

var gameCtrl = (function() {
// put ALL gameCtrl methods etc in here - this is an ARRAY containing other arrays and methods
// this object is updated each round, so calculations like new Pot Value can be done on the object

// var makeFirstRound = function(){
  var Round = function(roundCount,p1MoneyCounter,p2MoneyCounter,continues,potValue,gameEnd,
  forOrAgainst,forOrAgainstChosen,activePlayer,passivePlayer,message){
    this.roundCount = 0;
    this.p1MoneyCounter = 100;
    this.p2MoneyCounter = 100;
    this.continues = 0;
    this.potValue = 0;
    this.gameEnd = 0;
    this.forOrAgainst = 0;
    this.forOrAgainstChosen = 0;
    this.activePlayer = 0;
    this.passivePlayer = 1;
    // methods that use message get the query selection etc from uiCtrl
    this.message = "m" + message;
}

return {
  makeFirstRound: function() {
    var round = new Round(0,100,100,0,0,0,0,0,0,1,0);
    return round
  },
  // REMEMBER THE COMMA ABOVE! if no comma = unexpected identifier
  submitBet: function() {
    console.log("Submit bet button worked.");
    // var DOMstrings = uiCtrl.getDOMstrings();
    //   shooterBet = Number(document.querySelector(DOMstrings.leftBetAmount).value)
    //   // makes sure passive player is set to correct person
    //   // activePlayer === 0 ? passivePlayer = 1 : passivePlayer = 0;
    //   betterBet = Number(document.querySelector(DOMstrings.rightBetAmount).value)
    //   if (betterBet == "0" && forOrAgainstChosen == 0) {
    //     document.querySelector('#notification').innerHTML =
    //     "You need to type in your bet amount.";
    //   }
    //   else if (bettingTime == 1) {
    //           if (betterBet <= betterMoneyCounter && betterBet == shooterBet) {
    //             potValue = Number(potValue) + Number(betterBet);
    //             document.querySelector("#pot").textContent = "£" + potValue
    //             document.querySelector('#MoneyCounter-' + passivePlayer).textContent = "£" + (betterMoneyCounter - betterBet)
    //             betterMoneyCounter = (betterMoneyCounter - betterBet)
    //             document.querySelector('.btn-roll').style.display = 'initial';
    //             document.querySelector('#notification').innerHTML =
    //             "Ok, time to roll the dice!";
    //             bettingTime = 0
    //           }
    //           else if (Number(betterBet) !== Number(shooterBet) && forOrAgainst == 0) {
    //             document.querySelector('#notification').innerHTML =
    //             "Your bet needs to match Player 1's bet, since you picked For. I'd do it automatically but I"
    //             + " don't know any jQuery yet :(";
    //           }
    //           else if (Number(betterBet) !== Number(shooterBet) && forOrAgainst == 1) {
    //             potValue = Number(potValue) + Number(betterBet);
    //             document.querySelector("#pot").textContent = "£" + potValue
    //             document.getElementById('MoneyCounter' + passivePlayer).textContent = "£" + (betterMoneyCounter - betterBet)
    //             betterMoneyCounter = (betterMoneyCounter - betterBet)
    //             document.querySelector('.btn-roll').style.display = 'initial';
    //             document.querySelector('#notification').innerHTML =
    //             "Ok, time to roll again.";
    //             bettingTime = 0
    //           }
    //           else if (betterBet > betterMoneyCounter){
    //             document.querySelector('#notification').innerHTML =
    //             "You can't bet more money than you have!";
    //           }
    //           else if (bettingTime == 0) {
    //             document.querySelector('#notification').innerHTML =
    //             "You can't bet right now.";
    //           }
    //           else if (betterBet <= 0) {
    //             document.querySelector('#notification').innerHTML =
    //             "You can't bet negative money.";
    //           }
    //           else if (bettingTime == 1 && forOrAgainstChosen == 1) {
    //             potValue = Number(potValue) + Number(shooterBet);
    //             document.querySelector("#pot").textContent = "£" + potValue
    //             document.getElementById('#MoneyCounter-' + activePlayer).textContent = "£" + (betterMoneyCounter - betterBet)
    //             betterMoneyCounter = (betterMoneyCounter - betterBet)
    //             document.querySelector('#notification').innerHTML =
    //             "Player 1 doesn't have to match that bet if they don't want to.";
    //             //bettingTime = 0
    //           }
    //         else {
    //           bettingTime = 0
    //           document.querySelector('#notification').innerHTML =
    //           "Ok, time to roll the dice.";
    //           document.querySelector('.btn-roll').style.display = 'initial';
    //         }}
    //   else if (betterBet == "0" && forOrAgainstChosen == 1 && forOrAgainst == 1) {
    //     document.querySelector('#notification').innerHTML =
    //     "The better chose not to bet.";
    //   }
    //   else {
    //     //nothing
    //   }
    }
  }
  // }

})();

// UI CONTROLLER

var uiCtrl = (function() {
// put ALL uiCtrl methods etc in here - this is an ARRAY containing other arrays and methods

  var DOMstrings = {
    moneyCounter : '#MoneyCounter-',
    pot: '#pot',
    notificationBox : '#notification',
    dice1 : '.dice1',
    dice2: '.dice2',
    rollButton: '.btn-roll',
    continueButton: '.btn-continue',
    forAgainstSelector: '#for-against',
    newGameButton: '.btn-new',
    leftBetAmount:'#bet-val-0',
    rightBetAmount: '#bet-val-1',
    leftBetButton: '#btn-bet0',
    rightBetButton: '#btn-bet1'
  }

  var gameMessages = {
    m0: document.querySelector(DOMstrings.notificationBox).innerHTML =
    "Please flip a coin to decide who's Player 1 (who rolls the dice in the first round), then ante up",
    m1: document.querySelector(DOMstrings.notificationBox).innerHTML =
    "You need to type in your bet amount."
  }

return {
  getDOMstrings: function() {
      return DOMstrings;
  },
  getGameMessages: function() {
    return gameMessages;
  }
}

})();

// APP CONTROLLER

var controller = (function(gameCtrl, uiCtrl) {

      var resetGame = function(){
        var DOMstrings = uiCtrl.getDOMstrings();
        var gameMessages = uiCtrl.getGameMessages();
        var round = gameCtrl.makeFirstRound();

// a Round object is instantiated (as 'round') by makeFirstRound() below
// as the game progresses the object is updated
        document.querySelector(DOMstrings.moneyCounter + round.activePlayer).textContent = "£" + round.p1MoneyCounter
        document.querySelector(DOMstrings.moneyCounter + round.passivePlayer).textContent = "£" + round.p2MoneyCounter
        document.querySelector(DOMstrings.pot).textContent = "£" + round.potValue
// messages like these could go into a MAP once the app is ready for ES6 (to keep them organised)
        document.querySelector(DOMstrings.notificationBox).innerHTML = gameMessages[round.message]
        // gameMessages.displayMessage(gameMessages[round.message])
        diceDOM1 = document.querySelector(DOMstrings.dice1)
        diceDOM2 = document.querySelector(DOMstrings.dice2)
        diceDOM1.src = 'dice-5.png';
        diceDOM2.src = 'dice-5.png';
        document.querySelector(DOMstrings.rollButton).style.display = 'none';
        document.querySelector(DOMstrings.continueButton).style.display = 'none';
        document.querySelector(DOMstrings.forAgainstSelector).style.display = 'none';
        // changing it to just the better bet button for now - might remove shooter bet button from HTML too
        document.querySelector(DOMstrings.leftBetButton).style.display = 'none';
        // just in case .label got added last game
        document.querySelector(DOMstrings.notificationBox).classList.remove('label')
        console.log("New Game button clicked")
        return DOMstrings
      };

    var setupEventListeners = function () {
      var DOMstrings = uiCtrl.getDOMstrings();

      // set up event listeners (commented out ones with no methods yet)
      // document.querySelector(DOMstrings.rollButton).addEventListener('click', btnRoll)
      // document.querySelector(DOMstrings.continueButton).addEventListener('click', continueGame)
      document.querySelector(DOMstrings.newGameButton).addEventListener('click', controller.init)
      // document.querySelector(DOMstrings.leftBetButton).addEventListener('click', submitShooterBet)
      document.querySelector(DOMstrings.rightBetButton).addEventListener('click', gameCtrl.submitBet)
      console.log("Event listeners set up")
    };

  return {
      init: function() {
        console.log('Application has started.');
        resetGame();
        setupEventListeners();
// future methods: continue, win condition router(?)
      }

}
})(gameCtrl, uiCtrl);

// starts the game
controller.init();
