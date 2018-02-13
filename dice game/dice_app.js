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
  updateRoundObject (roundCount, p1MoneyCounter, p2MoneyCounter, continues, potValue, gameEnd,
      forOrAgainst, forOrAgainstChosen, activePlayer, passivePlayer, message) {
        round.roundCount = roundCount;
        round.p1MoneyCounter = p1MoneyCounter;
        round.p2MoneyCounter = p2MoneyCounter;
        round.continues = continues;
        round.potValue = potValue;
        round.gameEnd = gameEnd;
        round.forOrAgainst = forOrAgainst;
        round.forOrAgainstChosen = forOrAgainstChosen;
        round.activePlayer = activePlayer;
        round.passivePlayer = passivePlayer;
        round.message = message;
  }
  setMessage (messageNumber) {
      round.message = messageNumber;
  }

  calcBet (shooterMoneyCounter, betterMoneyCounter, shooterBet, betterBet, potValue) {
    console.log("(This is filler) - calcbet called")
    // method to calculate new potValue and left and right money counter values
    // before a bet is submitted by the submitBet method
    let newShooterMoneyCounter = shooterMoneyCounter - shooterBet;
    let newBetterMoneyCounter = betterMoneyCounter - betterBet;
    let oldPotValue = Number(potValue);
    let newPotValue = Number(betterBet) + Number(shooterBet) + Number(oldPotValue);
    let newMoneyValues = [newShooterMoneyCounter, newBetterMoneyCounter, newPotValue];
    return newMoneyValues;
  }

  // makes sure passive player is set to correct person
  // activePlayer === 0 ? passivePlayer = 1 : passivePlayer = 0;

  submitBet () {
      // let DOMstrings = ui.getDOMstrings();
      console.log("(This is filler) - submit bet button clicked")
      let betArray = ui.getBettingValues();
      let shooterMoneyCounter = betArray[0];
      let betterMoneyCounter = Number(betArray[1]);
      let shooterBet = Number(betArray[2]);
      let betterBet = Number(betArray[3]);
      let potValue = betArray[4];
      // do calculations with betting info
      let newMoneyValues = round.calcBet(shooterMoneyCounter, betterMoneyCounter,
        shooterBet, betterBet, potValue);
        if (betterBet <= 0 || shooterBet <= 0 && round.forOrAgainstChosen == 0) {
          // "This round, the shooter\'s bet needs to be matched by the other player.
          // Bets must be greater than 0"
          // round is NOT UPDATED UNTIL THE BET IS VALID
          round.setMessage(1);
          ui.updateMessage();
          ui.updateUi();
          ui.displayRollBtn();
        }
        else {
          // if both players can afford bet AND the bets are equal (as always on 1st round)
                if (betterBet <= betterMoneyCounter && betterBet == shooterBet) {
                  // update the relevant values in the Round object
                    round.updateRoundObject((round.roundCount+1),newMoneyValues[0],newMoneyValues[1],0,(newMoneyValues[2]),0,0,0,0,1,0);
                  // set message based on roundCount
                  round.setMessage(2);
                  // update the ui
                  ui.updateMessage();
                  ui.updateUi();
                  ui.displayRollBtn();
                  console.log("triggered")
                }
                // else {
                //   console.log("submit bet second else triggered")
                // }
                else if (betterBet !== shooterBet && round.forOrAgainst == 0) {
                  // if the bets don't match before for/against chosen
                  round.setMessage(3);
                  ui.updateMessage();
                  ui.updateUi();
                }
                // TEST THIS WHEN DICE ROLL & FORORAGAINST SELECTOR IMPLEMENTED
                else if (betterBet !== shooterBet && round.forOrAgainst == 1) {
                round.updateRoundObject((round.roundCount+1),newMoneyValues[0],newMoneyValues[1],0,(newMoneyValues[2]),0,0,0,0,1,0);
                // set message based on roundCount
                round.setMessage(4);
                // update the ui
                ui.updateMessage();
                ui.updateUi();
                ui.displayRollBtn();
                }
                else if (shooterBet > shooterMoneyCounter||betterBet > betterMoneyCounter) {
                  // can't bet more money than you have
                  round.setMessage(5);
                  ui.updateMessage();
                  ui.updateUi();
                }

                //the rest of this needs to be implemented once for/against chooser works

    //     //         else if (bettingTime == 1 && forOrAgainstChosen == 1) {
    //     //           potValue = Number(potValue) + Number(shooterBet);
    //     //           document.querySelector("#pot").textContent = "£" + potValue
    //     //           document.getElementById('#MoneyCounter-' + activePlayer).textContent = "£" + (betterMoneyCounter - betterBet)
    //     //           betterMoneyCounter = (betterMoneyCounter - betterBet)
    //     //           document.querySelector('#notification').innerHTML =
    //     //           "Player 1 doesn't have to match that bet if they don't want to.";
    //     //           //bettingTime = 0
    //     //         }
    //     // else if (betterBet == "0" && forOrAgainstChosen == 1 && forOrAgainst == 1) {
    //     //   document.querySelector('#notification').innerHTML =
    //     //   "The better chose not to bet.";
    //     // }

    }
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
        1: "Bets must be greater than 0.",
        2: "Ok, time to roll the dice!",
        3: "This round, the shooter\'s bet needs to be matched by the other player.",
        4: "Ok, time to roll again.",
        5: "You can't bet more money than you have!",
      }
  }
      returnDOMstrings () {
        return this.DOMstrings
        }
      returnGameMessages () {
        return this.gameMessages
      }

  updateUi () {
        let DOMstrings = this.returnDOMstrings()
        document.querySelector(DOMstrings.pot).textContent = "£" + round.potValue
        // console.log(round.potValue)
        document.querySelector(DOMstrings.moneyCounter + round.activePlayer).textContent = "£" + round.p1MoneyCounter
        document.querySelector(DOMstrings.moneyCounter + round.passivePlayer).textContent = "£" + round.p2MoneyCounter
        console.log("UI updated")
        }
  displayRollBtn() {
    let DOMstrings = this.returnDOMstrings()
        document.querySelector(DOMstrings.rollButton).style.display = 'initial';
  }
    resetGame () {
          let DOMstrings = this.returnDOMstrings()
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
      updateMessage () {
        let DOMstrings = this.returnDOMstrings()
          console.log("Notification updated")
          return document.querySelector(DOMstrings.notificationBox).innerHTML = this.gameMessages[round.message]
        }
      getBettingValues () {
        let DOMstrings = this.returnDOMstrings();
        let shooterMoneyCounter = document.querySelector(DOMstrings.moneyCounter + round.activePlayer).textContent.replace("£","");
        let betterMoneyCounter = document.querySelector(DOMstrings.moneyCounter + round.passivePlayer).textContent.replace("£","");
        let shooterBet = document.querySelector(DOMstrings.leftBetAmount).value;
        let betterBet = document.querySelector(DOMstrings.rightBetAmount).value;
        let potValue = document.querySelector(DOMstrings.pot).textContent.replace("£","");
        let betArray = [shooterMoneyCounter,betterMoneyCounter,shooterBet,betterBet,potValue];
        return betArray;
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
