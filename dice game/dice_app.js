//GAME CONTROLLER

var gameCtrl = (function() {
// put ALL gameCtrl methods etc in here - this is an ARRAY containing other arrays and methods
// this object is updated each round, so calculations like new Pot Value can be done on the object

// var makeFirstRound = function(){
  var Round = function(roundCount,p1MoneyCounter,p2MoneyCounter,continues,potValue,gameEnd,
  forOrAgainst,activePlayer,passivePlayer){
    this.roundCount = 0;
    this.p1MoneyCounter = 100;
    this.p2MoneyCounter = 100;
    this.continues = 0;
    this.potValue = 0;
    this.gameEnd = 0;
    this.forOrAgainst = 0;
    this.activePlayer = 0;
    this.passivePlayer = 1;
}

return {
  makeFirstRound: function() {
    var round = new Round(0,100,100,0,0,0,0,0,1);
    return round
  }
  }

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
    // leftBetButton: '#btn-bet0',
    rightBetButton: '#btn-bet1'
  }

return {
  getDOMstrings: function() {
      return DOMstrings;
  }
}

})();

// APP CONTROLLER

var controller = (function(gameCtrl, uiCtrl) {

      var resetGame = function(){
        var DOMstrings = uiCtrl.getDOMstrings();
        var round = gameCtrl.makeFirstRound();

        document.querySelector(DOMstrings.moneyCounter + round.activePlayer).textContent = "£" + round.p1MoneyCounter
        document.querySelector(DOMstrings.moneyCounter + round.passivePlayer).textContent = "£" + round.p2MoneyCounter
        document.querySelector(DOMstrings.pot).textContent = "£" + round.potValue
        document.querySelector(DOMstrings.notificationBox).textContent =
        "Please flip a coin to decide who's Player 1 (who rolls the dice in the first round), then ante up"
        diceDOM1 = document.querySelector(DOMstrings.dice1)
        diceDOM2 = document.querySelector(DOMstrings.dice2)
        diceDOM1.src = 'dice-5.png';
        diceDOM2.src = 'dice-5.png';
        document.querySelector(DOMstrings.rollButton).style.display = 'none';
        document.querySelector(DOMstrings.continueButton).style.display = 'none';
        document.querySelector(DOMstrings.forAgainstSelector).style.display = 'none';
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
      // document.querySelector(DOMstrings.rightBetButton).addEventListener('click', submitBetterBet)
      console.log("Event listeners set up")
    };

  return {
      init: function() {
        console.log('Application has started.');
        resetGame();
        setupEventListeners();

      }

}
})(gameCtrl, uiCtrl);

// starts the game
controller.init();
