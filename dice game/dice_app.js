//GAME CONTROLLER

class Round {
  constructor (roundCount, p1MoneyCounter, p2MoneyCounter, continues, potValue, gameEnd,
  forOrAgainst, forOrAgainstChosen, activePlayer, passivePlayer, message) {
    this.roundCount = roundCount;
    this.p1MoneyCounter = p1MoneyCounter;
    this.p2MoneyCounter = p2MoneyCounter;
    this.continues = continues;
    this.potValue = potValue;
    this.gameEnd = gameEnd;
    this.forOrAgainst = forOrAgainst;
    this.forOrAgainstChosen = forOrAgainstChosen;
    this.activePlayer = activePlayer;
    this.passivePlayer = passivePlayer;
    this.message = message;
  }
  calcBet () {
    console.log("(This is filler) - calcbet called")
    // method to calculate new potValue and left and right money counter values
    // before a bet is submitted by the submitBet method
    //           betterMoneyCounter = (betterMoneyCounter - betterBet)
  }
  submitBet () {
      console.log("(This is filler) - submit bet button clicked")
    // submitBet method
    // var submitBet = function() {
    //   console.log("Submit bet button worked.");
    //   gameCtrl.calcBet
    //   var DOMstrings = uiCtrl.getDOMstrings();
    //     shooterBet = Number(document.querySelector(DOMstrings.leftBetAmount).value)
    //     // makes sure passive player is set to correct person
    //     // activePlayer === 0 ? passivePlayer = 1 : passivePlayer = 0;
    //     shooterBet = Number(document.querySelector(DOMstrings.leftBetAmount).value)
    //     betterBet = Number(document.querySelector(DOMstrings.rightBetAmount).value)
    //     shooterMoneyCounter = Number(document.querySelector(DOMstrings.rightBetAmount).value)
    //     betterMoneyCounter = Number(document.querySelector(DOMstrings.rightBetAmount).value)
    //     console.log("shooter bet: " + shooterBet)
    //     console.log("better bet: " + betterBet)
    //     if (betterBet <= 0 || shooterBet <= 0 && round.forOrAgainstChosen == 0) {
    //       // "This round, the shooter\'s bet needs to be matched by the other player.
    //       // Bets must be greater than 0"
    //       round.message = 1;
    //       controller.updateMessage()
    //     }
    //     else {
    //             if (betterBet <= betterMoneyCounter && betterBet == shooterBet) {
    //                   round.message = 2;
    //                   round.potValue = round.potValue + Number(betterBet) + Number(shooterBet)
    //                   round.p1MoneyCounter = round.p1MoneyCounter - Number(shooterBet);
    //                   round.p2MoneyCounter = round.p2MoneyCounter - Number(betterBet);
    //                   controller.updateMessage();
    //                   controller.updateUi();
    //                     console.log(round)
    //     //           bettingTime = 0
    //             }
    //             else {
    //               console.log("submit bet second else triggered")
    //             }
    //     //         else if (Number(betterBet) !== Number(shooterBet) && forOrAgainst == 0) {
    //     //           document.querySelector('#notification').innerHTML =
    //     //           "Your bet needs to match Player 1's bet, since you picked For. I'd do it automatically but I"
    //     //           + " don't know any jQuery yet :(";
    //     //         }
    //     //         else if (Number(betterBet) !== Number(shooterBet) && forOrAgainst == 1) {
    //     //           potValue = Number(potValue) + Number(betterBet);
    //     //           document.querySelector("#pot").textContent = "£" + potValue
    //     //           document.getElementById('MoneyCounter' + passivePlayer).textContent = "£" + (betterMoneyCounter - betterBet)
    //     //           betterMoneyCounter = (betterMoneyCounter - betterBet)
    //     //           document.querySelector('.btn-roll').style.display = 'initial';
    //     //           document.querySelector('#notification').innerHTML =
    //     //           "Ok, time to roll again.";
    //     //           bettingTime = 0
    //     //         }
    //     //         else if (betterBet > betterMoneyCounter){
    //     //           document.querySelector('#notification').innerHTML =
    //     //           "You can't bet more money than you have!";
    //     //         }
    //     //         else if (bettingTime == 0) {
    //     //           document.querySelector('#notification').innerHTML =
    //     //           "You can't bet right now.";
    //     //         }
    //     //         else if (betterBet <= 0) {
    //     //           document.querySelector('#notification').innerHTML =
    //     //           "You can't bet negative money.";
    //     //         }
    //     //         else if (bettingTime == 1 && forOrAgainstChosen == 1) {
    //     //           potValue = Number(potValue) + Number(shooterBet);
    //     //           document.querySelector("#pot").textContent = "£" + potValue
    //     //           document.getElementById('#MoneyCounter-' + activePlayer).textContent = "£" + (betterMoneyCounter - betterBet)
    //     //           betterMoneyCounter = (betterMoneyCounter - betterBet)
    //     //           document.querySelector('#notification').innerHTML =
    //     //           "Player 1 doesn't have to match that bet if they don't want to.";
    //     //           //bettingTime = 0
    //     //         }
    //     //       else {
    //     //         bettingTime = 0
    //     //         document.querySelector('#notification').innerHTML =
    //     //         "Ok, time to roll the dice.";
    //     //         document.querySelector('.btn-roll').style.display = 'initial';
    //     //       }}
    //     // else if (betterBet == "0" && forOrAgainstChosen == 1 && forOrAgainst == 1) {
    //     //   document.querySelector('#notification').innerHTML =
    //     //   "The better chose not to bet.";
    //     // }
    //     // else {
    //     //   //nothing
    //     // }
    //   }
    }
  }



// UI CONTROLLER

class uiCtrl {
  constructor(DOMstrings, gameMessages) {
    this.DOMstrings = {
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
      },
      this.gameMessages = {
        0: "Please flip a coin to decide who's Player 1 (who rolls the dice in the first round), then ante up",
        1: "This round, the shooter\'s bet needs to be matched by the other player. Bets must be greater than 0.",
        2: "Ok, time to roll the dice!",
      }
  }
      returnDOMstrings () {
        return this.DOMstrings
        }
      returnGameMessages () {
        return this.gameMessages
      }
  // updateUi (round.potValue, round.activePlayer, round.passivePlayer, round.leftMoneyCounter,
  //     round.rightMoneyCounter) {
  updateUi () {
        document.querySelector(DOMstrings.pot).textContent = "£" + round.potValue;
        document.querySelector(DOMstrings.moneyCounter + round.activePlayer).textContent = "£" + round.leftMoneyCounter
        document.querySelector(DOMstrings.moneyCounter + round.passivePlayer).textContent = "£" + round.rightMoneyCounter
          document.querySelector(DOMstrings.rollButton).style.display = 'initial';
          console.log("UI updated")
        }
    // resetGame (round.potValue, round.activePlayer, round.passivePlayer, round.leftMoneyCounter,
    //     round.rightMoneyCounter, round.showRollButton) {
    resetGame () {
          let DOMstrings = this.returnDOMstrings()
          // let round =
          document.querySelector(DOMstrings.moneyCounter + round.activePlayer).textContent = "£" + round.p1MoneyCounter
          document.querySelector(DOMstrings.moneyCounter + round.passivePlayer).textContent = "£" + round.p2MoneyCounter
          document.querySelector(DOMstrings.pot).textContent = "£" + round.potValue

          document.querySelector(DOMstrings.notificationBox).innerHTML = this.gameMessages[round.message]

          let diceDOM1 = document.querySelector(DOMstrings.dice1)
          let diceDOM2 = document.querySelector(DOMstrings.dice2)
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
        }
      // updateMessage (round.message) {
          updateMessage () {
          console.log("Notification updated")
          // this returns whatever the round message property has been set to
          // so updateMessage needs to be called every time message changes
          return document.querySelector(DOMstrings.notificationBox).innerHTML = this.gameMessages[round.message]
        }
  };


// APP CONTROLLER (INIT)

function init() {
  console.log("I'm running")

  // set up EVENT LISTENERS
  let DOMstrings = ui.returnDOMstrings();

  // (commented out ones with no methods yet)
  // document.querySelector(DOMstrings.rollButton).addEventListener('click', btnRoll)
  // document.querySelector(DOMstrings.continueButton).addEventListener('click', continueGame)
  document.querySelector(DOMstrings.newGameButton).addEventListener('click', ui.resetGame)
  // document.querySelector(DOMstrings.leftBetButton).addEventListener('click', submitShooterBet)
  document.querySelector(DOMstrings.rightBetButton).addEventListener('click', round.submitBet)
  console.log("Event listeners set up")
  ui.resetGame();
  };

let round = new Round(0,100,100,0,0,0,0,0,0,1,0);
let ui = new uiCtrl();

init();
