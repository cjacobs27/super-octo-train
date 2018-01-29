//GAME CONTROLLER

var gameCtrl = (function() {
// put ALL gameCtrl methods etc in here - this is an ARRAY containing other arrays and methods
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

      function resetGame(){
        var DOMstrings = uiCtrl.getDOMstrings();
        continues = 0;
        round = 0;
        bettingTime = 1;
        // MoneyCounter-0
        shooterMoneyCounter = 100;
        //MoneyCounter-1
        betterMoneyCounter = 100;
        potValue = 0;
        shooterBet = 0;
        betterBet = 0;
        forOrAgainst = 0;
        forOrAgainstChosen = 0;
        activePlayer = 0;
        passivePlayer = 1;
        gameend = 0;

        document.querySelector(DOMstrings.moneyCounter + activePlayer).textContent = "£" + shooterMoneyCounter
        document.querySelector(DOMstrings.moneyCounter + passivePlayer).textContent = "£" + betterMoneyCounter
        document.querySelector(DOMstrings.pot).textContent = "£" + potValue
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

    function setupEventListeners() {
      var DOMstrings = uiCtrl.getDOMstrings();

      // set up event listeners
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
