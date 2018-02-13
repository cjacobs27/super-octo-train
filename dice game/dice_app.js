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

checkGameEndFirstRound(d1,d2) {
    let DOMstrings = ui.returnDOMstrings()
    let firstRoll = d1 + d2
    console.log(firstRoll)
    if (firstRoll == 7 || firstRoll == 11) {
      round.gameend = 1
      // document.querySelector('#notification').classList.remove('label')
      let msg = "<br> Player 1 wins the pot! <br> Hit Continue to SWITCH SIDES and carry on with the game - or New Game to start again."
      ui.updateWinMessage(firstRoll,msg)
      ui.shooterWinsWholePot()
        }
    else if (firstRoll == 2 || firstRoll == 3 || firstRoll == 12) {
      round.gameend = 1
      // document.querySelector('#notification').classList.add('label')
      let msg = "<br> The shooter crapped out! Player 2 wins the pot. <br> Hit Continue to SWITCH SIDES and carry on with the game - or New Game to start again."
      ui.updateWinMessage(firstRoll,msg)
      ui.betterWinsWholePot()
    }
    else {
      // document.querySelector('#notification').classList.add('label')
      let msg = "Point set! <br> Player 2, please choose whether you're For or Against the dice shooter, and make a bet. <br>"+
      "If you choose For and the shooter wins, the shooter has to match your bet and you split the pot with them. <br>"+
      "If you choose Against, the shooter matches your bet but they take the whole pot if they win - or you get the whole pot if they lose."
      ui.updateWinMessage("",msg)
      console.log("Point set")
      let point = firstRoll
      document.querySelector(DOMstrings.point).innerHTML = "POINT SET: " + firstRoll;
      round.updateRoundObject(round.roundCount+1,round.p1MoneyCounter,round.p2MoneyCounter,round.continues,round.potValue,
        round.gameEnd,round.forOrAgainst,round.forOrAgainstChosen,round.activePlayer,round.passivePlayer,round.message);
      ui.forOrAgainstMethod();
      ui.toggleSubmitBtn();
      ui.toggleRollBtn();
      // now the point is set, a second round of betting begins where Better can pick For or Against
      // after that the dice are rolled again, this time calling checkGameEndNextRound()
    }
  }

  // function checkGameEndNextRound(d1,d2) {
  //   let DOMstrings = ui.returnDOMstrings()
  //   document.querySelector(DOMstrings.point).innerHTML.replace("POINT SET:","")
  //   let nextRoll = dice1 + dice2
  //   round++
  //   console.log("roll: " + nextRoll + "forOrAgainst: " + forOrAgainst + "point:" + point)
  //
  //   if (nextRoll == point && forOrAgainst == 1) {
  //     gameend = 1
  //             document.querySelector('#notification').innerHTML = "Point hit. The shooter wins:"
  //             + "<br>" + "The other player bet AGAINST so shooter takes the whole pot, plus an additional 50% of the pot from the other player's cash!" +
  //             "Hit Continue to SWITCH SIDES and carry on with the game - or New Game to start again.";
  //             //shooterWinsWholePot()
  //             //this is the ONLY case when this win condition will happen.
  //             shooterWinsWholePotPlusMore()
  //           }
  //   else if (nextRoll == point && forOrAgainst == 0) {
  //             document.querySelector('#notification').innerHTML = "Point hit. The shooter wins:"
  //             + "<br>" + "Player 2 bet FOR so they split the pot with the shooter!" +
  //             "Hit Continue to SWITCH SIDES and carry on with the game - or New Game to start again.";
  //             splitPot()
  //           }
  //   else if (nextRoll == 7 && nextRoll !== point && forOrAgainst == 1) {
  //           gameend = 1
  //             document.querySelector('#notification').innerHTML = "The shooter loses:"
  //             + "<br>" + "Player 2 bet AGAINST so they take the whole pot!" +
  //             "Hit Continue to SWITCH SIDES and carry on with the game - or New Game to start again.";
  //             betterWinsWholePot()
  //           }
  //   else if (nextRoll == 7 && nextRoll !== point && forOrAgainst == 0) {
  //             document.querySelector('#notification').innerHTML = "The shooter loses:"
  //             + "<br>" + "Player 2 bet FOR so they split the pot with the shooter!" +
  //             "Hit Continue to SWITCH SIDES and carry on with the game - or New Game to start again.";
  //             splitPot()
  //           }
  //   else {
  //     // gameend remains 0
  //           bettingTime = 1
  //           document.querySelector('#notification').classList.remove('label')
  //           document.querySelector('#notification').innerHTML = "Make bets or keep rolling";
  //   }
  // }

  btnRoll() {
    let DOMstrings = ui.returnDOMstrings()
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let d1 = DOMstrings.diceDOM1
    DOMstrings.diceDOM1.src = 'dice-' + dice1 + '.png';
    DOMstrings.diceDOM2.src = 'dice-' + dice2 + '.png';
    console.log(dice1 + "   " + dice2)

    if (round.roundCount == 1) {
      round.checkGameEndFirstRound(dice1,dice2);
    }
    else {
      checkGameEndNextRound();
    }
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
          ui.toggleRollBtn();
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
                  ui.toggleSubmitBtn();
                  ui.toggleRollBtn();
                }
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
                ui.toggleSubmitBtn();
                ui.toggleRollBtn();
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
        submitBetButton: '#btn-bet1',
        diceDOM1: document.querySelector('.dice1'),
        diceDOM2: document.querySelector('.dice2'),
        point: '#point',
        betFor: '#bet-for-or-against-for',
        betAgainst: '#bet-for-or-against-against',
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
  toggleRollBtn() {
    let DOMstrings = this.returnDOMstrings()
        if (document.querySelector(DOMstrings.rollButton).style.display == 'initial') {
          document.querySelector(DOMstrings.rollButton).style.display = 'none';
        }
        else {
          document.querySelector(DOMstrings.rollButton).style.display = 'initial'
        }
  }
  toggleSubmitBtn() {
    let DOMstrings = this.returnDOMstrings()
        if (document.querySelector(DOMstrings.submitBetButton).style.display == 'initial') {
          document.querySelector(DOMstrings.submitBetButton).style.display = 'none';
        }
        else if (document.querySelector(DOMstrings.submitBetButton).style.display == 'none') {
          document.querySelector(DOMstrings.submitBetButton).style.display = 'initial'
        }
      }
    resetGame () {
          let DOMstrings = ui.returnDOMstrings()
          document.querySelector(DOMstrings.moneyCounter + round.activePlayer).textContent = "£" + round.p1MoneyCounter
          document.querySelector(DOMstrings.moneyCounter + round.passivePlayer).textContent = "£" + round.p2MoneyCounter
          document.querySelector(DOMstrings.pot).textContent = "£" + round.potValue

          document.querySelector(DOMstrings.notificationBox).innerHTML = ui.gameMessages[round.message]

          let diceDOM1 = document.querySelector(DOMstrings.dice1)
          let diceDOM2 = document.querySelector(DOMstrings.dice2)
          diceDOM1.src = 'dice-5.png';
          diceDOM2.src = 'dice-5.png';
          document.querySelector(DOMstrings.rollButton).style.display = 'none';
          document.querySelector(DOMstrings.continueButton).style.display = 'none';
          document.querySelector(DOMstrings.forAgainstSelector).style.display = 'none';
          document.querySelector(DOMstrings.submitBetButton).style.display = 'initial';
          // changing it to just the better bet button for now - might remove shooter bet button from HTML too
          // document.querySelector(DOMstrings.leftBetButton).style.display = 'none';
          // just in case .label got added last game
          document.querySelector(DOMstrings.notificationBox).classList.remove('label')
          console.log("New Game button clicked")
        }
      updateMessage () {
        let DOMstrings = this.returnDOMstrings()
          console.log("Notification updated")
          return document.querySelector(DOMstrings.notificationBox).innerHTML = this.gameMessages[round.message]
        }
      updateWinMessage (roll, msg) {
          let DOMstrings = this.returnDOMstrings()
            console.log("Notification updated")
            return document.querySelector(DOMstrings.notificationBox).innerHTML = roll + msg
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
      forOrAgainstMethod() {
        let DOMstrings = this.returnDOMstrings();
        round.forOrAgainstChosen = 1
        document.querySelector(DOMstrings.forAgainstSelector).style.display = 'initial';
        if (document.querySelector(DOMstrings.betFor).checked) {
          // for = 0, against = 1 (for reference)
          round.updateRoundObject(round.roundCount+1,round.p1MoneyCounter,round.p2MoneyCounter,round.continues,round.potValue,
            round.gameEnd,0,1,round.activePlayer,round.passivePlayer,round.message);
        }
        else if (document.querySelector(DOMstrings.betAgainst).checked) {
          round.updateRoundObject(round.roundCount+1,round.p1MoneyCounter,round.p2MoneyCounter,round.continues,round.potValue,
            round.gameEnd,1,1,round.activePlayer,round.passivePlayer,round.message);
        }
        console.log("for or against: " + round.forOrAgainst)
      }
      shooterWinsWholePot() {
        let DOMstrings = this.returnDOMstrings();
        console.log("shooter wins whole pot")
              // ui.shooterWinsWholePot() : update shooter's (p1's) money counter with new total & reset pot
        let potValue = document.querySelector(DOMstrings.pot).textContent.replace("£","")
        let shooterMoneyCounter = Number(potValue) + Number(round.p1MoneyCounter)
        document.querySelector(DOMstrings.moneyCounter + round.activePlayer).textContent = "£" + shooterMoneyCounter
        document.querySelector(DOMstrings.pot).textContent = "£" + "0"
        //make continue button appear
        document.querySelector(DOMstrings.continueButton).style.display = 'initial';
        round.updateRoundObject(round.roundCount+1,shooterMoneyCounter,round.p2MoneyCounter,round.continues,0,
          1,round.forOrAgainst,round.forOrAgainstChosen,round.activePlayer,round.passivePlayer,round.message),
        document.querySelector(DOMstrings.rollButton).style.display = 'none';
        //checkForWinner() (check to see if either has run out of cash)
      }
      betterWinsWholePot() {
        console.log("better wins whole pot")
        let DOMstrings = this.returnDOMstrings();
              // ui.shooterWinsWholePot() : update shooter's (p1's) money counter with new total & reset pot
        let potValue = document.querySelector(DOMstrings.pot).textContent.replace("£","")
        let betterMoneyCounter = Number(potValue) + Number(round.p2MoneyCounter)
        document.querySelector(DOMstrings.moneyCounter + round.passivePlayer).textContent = "£" + betterMoneyCounter
        document.querySelector(DOMstrings.pot).textContent = "£" + "0"
        //make continue button appear
        document.querySelector(DOMstrings.continueButton).style.display = 'initial';
        round.updateRoundObject(round.roundCount+1,round.p1MoneyCounter,betterMoneyCounter,round.continues,0,
          1,round.forOrAgainst,round.forOrAgainstChosen,round.activePlayer,round.passivePlayer,round.message),
        document.querySelector(DOMstrings.rollButton).style.display = 'none';
              //ui.betterWinsWholePot() : update better's (p2's) money counter with new total & reset pot
      }
    continueGame() {
      console.log("Continue clicked")
    }
  };


// APP CONTROLLER (INIT)

function init() {
  console.log("I'm running")

  // set up EVENT LISTENERS
  let DOMstrings = ui.returnDOMstrings();

  // (commented out ones with no methods yet)
  document.querySelector(DOMstrings.rollButton).addEventListener('click', round.btnRoll)
  document.querySelector(DOMstrings.continueButton).addEventListener('click', ui.continueGame)
  document.querySelector(DOMstrings.newGameButton).addEventListener('click', ui.resetGame)
  document.querySelector(DOMstrings.submitBetButton).addEventListener('click', round.submitBet)
  console.log("Event listeners set up")
  ui.resetGame();
  };

let round = new Round(0,100,100,0,0,0,0,0,0,1,0);
let ui = new uiCtrl();

init();
