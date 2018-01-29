/*
GAME RULES:

- The game has 2 players & 2 dice always rolled together.
a 7 or an 11 means the roller 'passes', 2, 3 or 12 means they 'crap out'
one player rolls for that game based on who gets higher in an initial die roll.
the other player will bet against them
The player shooting the dice is the first to bet and the other players must
at least match his bet before the game can continue.
If the shooter neither passes nor craps out on the first roll, then the number
rolled becomes the "point." Now, the only two values that matter on the roll
are that point value and 7.
The player must continue rolling until either the point or 7 is reached. All
bets that the shooter would "pass" (FOR/shooter wins) are now bets that the shooter will re-roll
the value of the point before rolling a 7, and all bets to the contrary are
bets that 7 will be rolled first. (ie betting the shooter will either win or lose)
If the game goes to point, as soon as the shooter rolls the point or 7, the
game is over and the bets are awarded accordingly.
- BETTING:
- betting begins before the roller is decided. If 2, 3 or 12 is rolled on first play roll,
the other player wins the initial bet money

*/


var activePlayer, passivePlayer, round, bettingTime, dice1, dice2, diceDOM1, diceDOM2, gameend,
firstRoll, nextRoll, point, potValue, shooterBet, betterBet, shooterMoneyCounter,
forOrAgainst, forOrAgainstChosen, betterMoneyCounter, continues;

function switchActivePassivePlayer() {
  if (activePlayer === 0) {
    passivePlayer = 1;
  }
  else if (activePlayer === 1) {
    passivePlayer = 0;
  }
  else {
    //nothing
  }
}

function init() {
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
  // document.getElementById('#MoneyCounter-'+ activePlayer).textContent = "£" + shooterMoneyCounter
  // document.getElementById('#MoneyCounter-' + passivePlayer).textContent = "£" + betterMoneyCounter
  document.querySelector('#MoneyCounter-' + activePlayer).textContent = "£" + shooterMoneyCounter
  document.querySelector('#MoneyCounter-' + passivePlayer).textContent = "£" + betterMoneyCounter
  document.getElementById('pot').textContent = "£" + potValue
  document.querySelector('#notification').textContent =
  "Please flip a coin to decide who's Player 1 (who rolls the dice in the first round), then ante up"
  diceDOM1 = document.querySelector(".dice1")
  diceDOM2 = document.querySelector(".dice2")
  diceDOM1.src = 'dice-5.png';
  diceDOM2.src = 'dice-5.png';
  document.querySelector('.btn-roll').style.display = 'none';
  document.querySelector('.btn-continue').style.display = 'none';
  document.querySelector('#for-against').style.display = 'none';
  // just in case .label got added last game
  document.querySelector('#notification').classList.remove('label')
   gameend = 0;
 }

init()

function timeToBet() {
  bettingTime = 1
  if (point > 0 && forOrAgainstChosen == 0) {
    document.querySelector('.btn-roll').style.display = 'none';
    document.querySelector('#notification').classList.add("explanation")
    document.querySelector('#notification').innerHTML =
    "Time for Better to pick For or Against & up the ante a second time:" + "<br>" +
    "For means Better wagers that Shooter will win by rolling the Point number." +
    " Shooter has to be able to match this bet." +
    " (If Shooter rolls the point, the pot is split 50/50.)" +
    "<br>" + "Against means Better wagers that Shooter will lose by rolling a 7,"
    + "Shooter doesn't have to match but Better keeps the whole pot if Shooter loses.";
    forOrAgainstMethod()
  }
  else if (bettingTime = 1 && forOrAgainstChosen == 1) {
    document.querySelector('#notification').innerHTML =
    "Either player can raise their bet now if they want without having to match the other, " +
    "if not just hit Roll Dice to continue";
  }
 else {
   //pass
 }
}

// now if it's betting time we want the submit bet buttons to work, if not then they should do nothing

// function submitShooterBet() {
//   shooterBet = Number(document.querySelector('#bet-val-0').value)
//     if (shooterBet == "0" && forOrAgainstChosen == 0) {
//       console.log(round)
//       document.querySelector('#notification').innerHTML =
//       "You need to type in your bet amount.";
//     }
//     else if (bettingTime === 1) {
//       //not displaying roll button here cos we need better to ante up too
//       if (shooterBet <= shooterMoneyCounter && shooterBet > 0 && forOrAgainst == 0) {
//         potValue = Number(potValue) + Number(shooterBet);
//         document.querySelector("#pot").textContent = "£" + potValue
//         document.getElementById('shooterMoneyCounter').textContent = "£" + (shooterMoneyCounter - shooterBet)
//         shooterMoneyCounter = (shooterMoneyCounter - shooterBet)
//         document.querySelector('#notification').innerHTML =
//         "Now the other player needs to match that bet.";
//       }
//       else if (shooterBet > shooterMoneyCounter){
//         document.querySelector('#notification').innerHTML =
//         "You can't bet more money than you have!";
//       }
//       else if (bettingTime == 0) {
//         document.querySelector('#notification').innerHTML =
//         "You can't bet right now.";
//       }
//       else if (shooterBet < 0) {
//         document.querySelector('#notification').innerHTML =
//         "You can't bet negative money.";
//       }
//       else if (bettingTime == 1 && forOrAgainstChosen == 1){
//         potValue = Number(potValue) + Number(shooterBet);
//         document.querySelector("#pot").textContent = "£" + potValue
//         document.getElementById('shooterMoneyCounter').textContent = "£" + (shooterMoneyCounter - shooterBet)
//         shooterMoneyCounter = (shooterMoneyCounter - shooterBet)
//         document.querySelector('#notification').innerHTML =
//         "Player 2 doesn't have to match that bet (P2: just type 0 and hit Submit Bet to skip this round of betting.)";
//         bettingTime = 0
//       }
//       else {
//         bettingTime = 0
//       }
//     }
//   }

// function submitBetterBet() {
//   betterBet = Number(document.querySelector('#bet-val-1').value)
//   if (betterBet == "0" && forOrAgainstChosen == 0) {
//     document.querySelector('#notification').innerHTML =
//     "You need to type in your bet amount.";
//   }
//   else if (bettingTime == 1) {
//     if (betterBet <= betterMoneyCounter && betterBet == shooterBet) {
//       potValue = Number(potValue) + Number(betterBet);
//       document.querySelector("#pot").textContent = "£" + potValue
//       document.getElementById('betterMoneyCounter').textContent = "£" + (betterMoneyCounter - betterBet)
//       betterMoneyCounter = (betterMoneyCounter - betterBet)
//       document.querySelector('.btn-roll').style.display = 'initial';
//       document.querySelector('#notification').innerHTML =
//       "Ok, time to roll the dice!";
//       bettingTime = 0
//     }
//     else if (Number(betterBet) !== Number(shooterBet) && forOrAgainst == 0) {
//       document.querySelector('#notification').innerHTML =
//       "Your bet needs to match Player 1's bet, since you picked For. I'd do it automatically but I"
//       + " don't know any jQuery yet :(";
//     }
//     else if (Number(betterBet) !== Number(shooterBet) && forOrAgainst == 1) {
//       potValue = Number(potValue) + Number(betterBet);
//       document.querySelector("#pot").textContent = "£" + potValue
//       document.getElementById('betterMoneyCounter').textContent = "£" + (betterMoneyCounter - betterBet)
//       betterMoneyCounter = (betterMoneyCounter - betterBet)
//       document.querySelector('.btn-roll').style.display = 'initial';
//       document.querySelector('#notification').innerHTML =
//       "Ok, time to roll again.";
//       bettingTime = 0
//     }
//     else if (betterBet > betterMoneyCounter){
//       document.querySelector('#notification').innerHTML =
//       "You can't bet more money than you have!";
//     }
//     else if (bettingTime == 0) {
//       document.querySelector('#notification').innerHTML =
//       "You can't bet right now.";
//     }
//     else if (betterBet <= 0) {
//       document.querySelector('#notification').innerHTML =
//       "You can't bet negative money.";
//     }
//     else if (bettingTime == 1 && forOrAgainstChosen == 1){
//       potValue = Number(potValue) + Number(shooterBet);
//       document.querySelector("#pot").textContent = "£" + potValue
//       document.getElementById('shooterMoneyCounter').textContent = "£" + (betterMoneyCounter - betterBet)
//       betterMoneyCounter = (betterMoneyCounter - betterBet)
//       document.querySelector('#notification').innerHTML =
//       "Player 1 doesn't have to match that bet if they don't want to.";
//       bettingTime = 0
//     }
//     else {
//       bettingTime = 0
//       document.querySelector('#notification').innerHTML =
//       "Ok, time to roll the dice.";
//       document.querySelector('.btn-roll').style.display = 'initial';
//     }
//   }
// }

function submitShooterBet() {
  shooterBet = Number(document.querySelector('#bet-val-0').value)
    if (shooterBet == "0" && forOrAgainstChosen == 0) {
      console.log(round)
      document.querySelector('#notification').innerHTML =
      "You need to type in your bet amount.";
    }
    else if (bettingTime === 1) {
      //not displaying roll button here cos we need better to ante up too
      if (shooterBet <= shooterMoneyCounter && shooterBet <= betterMoneyCounter && shooterBet > 0 && forOrAgainst == 0) {
        potValue = Number(potValue) + Number(shooterBet);
        document.querySelector("#pot").textContent = "£" + potValue
        document.querySelector('#MoneyCounter-' + activePlayer).textContent = "£" + (shooterMoneyCounter - shooterBet)
        shooterMoneyCounter = (shooterMoneyCounter - shooterBet)
        document.querySelector('#notification').innerHTML =
        "Now the other player needs to match that bet.";
        console.log("if statement believes P2 is betting FOR")
      }
      else if (shooterBet > shooterMoneyCounter){
        document.querySelector('#notification').innerHTML =
        "You can't bet more money than you have!";
      }
      else if (shooterBet <= shooterMoneyCounter && shooterBet > betterMoneyCounter && forOrAgainst == 0){
        document.querySelector('#notification').innerHTML =
        "Since Player 2 bet FOR, they need to be able to match your bet. They don't have enough money!";
      }
      else if (bettingTime == 0) {
        document.querySelector('#notification').innerHTML =
        "You can't bet right now.";
      }
      else if (shooterBet < 0) {
        document.querySelector('#notification').innerHTML =
        "You can't bet negative money.";
      }
      else if (bettingTime == 1 && forOrAgainstChosen == 1 && shooterBet > 0 && shooterBet <= shooterMoneyCounter){
        potValue = Number(potValue) + Number(shooterBet);
        document.querySelector("#pot").textContent = "£" + potValue
        document.getElementById('#MoneyCounter-' + activePlayer).textContent = "£" + (shooterMoneyCounter - shooterBet)
        shooterMoneyCounter = (shooterMoneyCounter - shooterBet)
        document.querySelector('#notification').innerHTML =
        "The better doesn't have to match that bet, as they're betting AGAINST the shooter." +
        "<br>"+ "(P2: just type 0 and hit Submit Bet to skip this round of betting.)";
        // bettingTime = 0
      }
      else {
        bettingTime = 0
      }
    }
  }

function submitBetterBet() {
  shooterBet = Number(document.querySelector('#bet-val-0').value)
  activePlayer === 0 ? passivePlayer = 1 : passivePlayer = 0;
  betterBet = Number(document.querySelector('#bet-val-1').value)
  if (betterBet == "0" && forOrAgainstChosen == 0) {
    document.querySelector('#notification').innerHTML =
    "You need to type in your bet amount.";
  }
  else if (bettingTime == 1) {
          if (betterBet <= betterMoneyCounter && betterBet == shooterBet) {
            potValue = Number(potValue) + Number(betterBet);
            document.querySelector("#pot").textContent = "£" + potValue
            document.querySelector('#MoneyCounter-' + passivePlayer).textContent = "£" + (betterMoneyCounter - betterBet)
            betterMoneyCounter = (betterMoneyCounter - betterBet)
            document.querySelector('.btn-roll').style.display = 'initial';
            document.querySelector('#notification').innerHTML =
            "Ok, time to roll the dice!";
            bettingTime = 0
          }
          else if (Number(betterBet) !== Number(shooterBet) && forOrAgainst == 0) {
            document.querySelector('#notification').innerHTML =
            "Your bet needs to match Player 1's bet, since you picked For. I'd do it automatically but I"
            + " don't know any jQuery yet :(";
          }
          else if (Number(betterBet) !== Number(shooterBet) && forOrAgainst == 1) {
            potValue = Number(potValue) + Number(betterBet);
            document.querySelector("#pot").textContent = "£" + potValue
            document.getElementById('MoneyCounter' + passivePlayer).textContent = "£" + (betterMoneyCounter - betterBet)
            betterMoneyCounter = (betterMoneyCounter - betterBet)
            document.querySelector('.btn-roll').style.display = 'initial';
            document.querySelector('#notification').innerHTML =
            "Ok, time to roll again.";
            bettingTime = 0
          }
          else if (betterBet > betterMoneyCounter){
            document.querySelector('#notification').innerHTML =
            "You can't bet more money than you have!";
          }
          else if (bettingTime == 0) {
            document.querySelector('#notification').innerHTML =
            "You can't bet right now.";
          }
          else if (betterBet <= 0) {
            document.querySelector('#notification').innerHTML =
            "You can't bet negative money.";
          }
          else if (bettingTime == 1 && forOrAgainstChosen == 1) {
            potValue = Number(potValue) + Number(shooterBet);
            document.querySelector("#pot").textContent = "£" + potValue
            document.getElementById('#MoneyCounter-' + activePlayer).textContent = "£" + (betterMoneyCounter - betterBet)
            betterMoneyCounter = (betterMoneyCounter - betterBet)
            document.querySelector('#notification').innerHTML =
            "Player 1 doesn't have to match that bet if they don't want to.";
            //bettingTime = 0
          }
        else {
          bettingTime = 0
          document.querySelector('#notification').innerHTML =
          "Ok, time to roll the dice.";
          document.querySelector('.btn-roll').style.display = 'initial';
        }}
  else if (betterBet == "0" && forOrAgainstChosen == 1 && forOrAgainst == 1) {
    document.querySelector('#notification').innerHTML =
    "The better chose not to bet.";
  }
  else {
    //nothing
  }
}

function btnRoll() {
  // there's a round of betting every other round...
  if (round % 2 == 0 || bettingTime == 1) {
    timeToBet();
  }
  else {
    bettingTime = 0;
  // make sure roll dice button is showing when it's not betting time
    document.querySelector('.btn-roll').style.display = 'initial';
  }
  // make roll dice button show again now betting is potentially done
  // this is redundant really but ensures it'll definitely show
  document.querySelector('.btn-roll').style.display = 'initial';
  bettingTime = 0
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  diceDOM1.src = 'dice-' + dice1 + '.png';
  diceDOM2.src = 'dice-' + dice2 + '.png';
  console.log(dice1 + "   " + dice2)
  if (round == 0) {
    checkGameEndFirstRound();
  }
  else {
    // the first round has special conditions but only 2 win conditions
    // which is shooterWinsWholePot() or betterWinsWholePot()
    // this one has 4 (2 for shooter 2 for better)...
    checkGameEndNextRound();
  }
}

// CHECK FOR WINNER: see if anyone's out of cash yet
function checkForWinner() {
  player1money = document.querySelector("#MoneyCounter-" + activePlayer).textContent.replace("£","")
  player2money = document.querySelector("#MoneyCounter-" + passivePlayer).textContent.replace("£","")
  if (player1money == 0 && gameend == 1) {
    document.querySelector('.btn-continue').style.display = 'none';
    document.querySelector('#notification').innerHTML =
    "Player 1 is out of money!" + "<br>" + "Player 2 wins!" + "<br>" + "Hit New Game if you want to play again.";
  }
  else if (player2money == 0 && gameend == 1) {
    document.querySelector('.btn-continue').style.display = 'none';
    document.querySelector('#notification').innerHTML =
    "Player 2 is out of money!" + "<br>" + "Player 1 wins!" + "<br>" + "Hit New Game if you want to play again.";
  }
  else {
    // do nothing
  }
}

//// POT WIN CONDITIONS BELOW

function shooterWinsWholePot() {
  // - shooter wins on first roll before 2nd round betting (for/against)
  // -better goes against shooter in 2nd round but shooter hits point
  potValue = document.querySelector("#pot").textContent.replace("£","")
  shooterMoneyCounter = Number(potValue) + Number(shooterMoneyCounter)
  document.querySelector("#MoneyCounter-" + activePlayer).textContent = "£" + shooterMoneyCounter
  document.querySelector("#pot").textContent = "£0"
  //make continue button appear
  document.querySelector('.btn-continue').style.display = 'initial';
  gameend = 1
  document.querySelector('.btn-roll').style.display = 'none';
  checkForWinner()
}

function betterWinsWholePot() {
  // - shooter loses on first roll before 2nd round betting (for/against)
  // -better goes against shooter in 2nd round and shooter loses
  potValue = document.querySelector("#pot").textContent.replace("£","")
  betterMoneyCounter = Number(potValue) + Number(betterMoneyCounter)
  document.querySelector("#MoneyCounter-" + passivePlayer).textContent = "£" + betterMoneyCounter
  document.querySelector("#pot").textContent = "£0"
  //make continue button appear
  document.querySelector('.btn-continue').style.display = 'initial';
  gameend = 1
  document.querySelector('.btn-roll').style.display = 'none';
  checkForWinner()
}

function shooterWinsWholePotPlusMore() {
  potValue = document.querySelector("#pot").textContent.replace("£","")
  bonus = potValue / 2
  shooterMoneyCounter = Number(potValue) + Number(shooterMoneyCounter) + Number(bonus)
  betterMoneyCounter = document.querySelector("#MoneyCounter-" + passivePlayer).textContent.replace("£","")
  document.querySelector("#MoneyCounter-" + activePlayer).textContent = "£" + shooterMoneyCounter
  document.querySelector("#MoneyCounter-" + passivePlayer).textContent = "£" + (betterMoneyCounter - bonus)
  document.querySelector("#pot").textContent = "£0"
  //make continue button appear
  document.querySelector('.btn-continue').style.display = 'initial';
  gameend = 1
  document.querySelector('.btn-roll').style.display = 'none';
  checkForWinner()
}

function splitPot() {
  potValue = document.querySelector("#pot").textContent.replace("£","")
  splitPotValue = Number(potValue) / 2
  betterMoneyCounter = Number(splitPotValue) + Number(betterMoneyCounter)
  shooterMoneyCounter = Number(splitPotValue) + Number(shooterMoneyCounter)
  document.querySelector("#MoneyCounter-" + activePlayer).textContent = "£" + shooterMoneyCounter
  document.querySelector("#MoneyCounter-" + passivePlayer).textContent = "£" + betterMoneyCounter
  document.querySelector("#pot").textContent = "£0"
  //make continue button appear
  document.querySelector('.btn-continue').style.display = 'initial';
  gameend = 1
  document.querySelector('.btn-roll').style.display = 'none';
  checkForWinner()
}

function forOrAgainstMethod() {
  forOrAgainstChosen = 1
  document.querySelector('#for-against').style.display = 'initial';
  if (document.querySelector('#bet-for-or-against-for').checked) {
    // for = 0, against = 1 (for reference)
    return forOrAgainst = 0
  }
  else if (document.querySelector('#bet-for-or-against-against').checked) {
    return forOrAgainst = 1
  }
  console.log("for or against: " + forOrAgainst)
}

// CHECK FOR WINNER: see if anyone's out of cash yet
function checkForWinner() {
  player1money = document.querySelector("#MoneyCounter-" + activePlayer).textContent.replace("£","")
  player2money = document.querySelector("#MoneyCounter-" + passivePlayer).textContent.replace("£","")
  if (player1money <= 0 && gameend == 1) {
    document.querySelector('.btn-continue').style.display = 'none';
    document.querySelector('#notification').innerHTML =
    "Player 1 is out of money!" + "<br>" + "Player 2 wins!" + "<br>" + "Hit New Game if you want to play again.";
  }
  else if (player2money <= 0 && gameend == 1) {
    document.querySelector('.btn-continue').style.display = 'none';
    document.querySelector('#notification').innerHTML =
    "Player 2 is out of money!" + "<br>" + "Player 1 wins!" + "<br>" + "Hit New Game if you want to play again.";
  }
  else {
    // do nothing
  }
}

//CONTINUE method:
function continueGame() {
  //Check that gameend = 1
  if (gameend == 1) {
    // swap the money counter values (as player 1/original shooter is now the better but still player 1)
    player1money = document.querySelector("#MoneyCounter-" + activePlayer).textContent
    player2money = document.querySelector("#MoneyCounter-" + passivePlayer).textContent
    document.querySelector("#MoneyCounter-" + passivePlayer).innerHTML = player1money
    document.querySelector("#MoneyCounter-" + activePlayer).innerHTML = player2money
    continues++
    gameend = 0
    round = 0;
    bettingTime = 1;
    potValue = 0;
    shooterBet = 0;
    betterBet = 0;
    forOrAgainst = 0;
    forOrAgainstChosen = 0;
    document.querySelector('.btn-continue').style.display = 'none';
    document.querySelector('#for-against').style.display = 'none';
    document.querySelector('#notification').classList.remove('label')
    switchActivePassivePlayer()
    // this swaps the message that explains who is now shooting.
    if (activePlayer == 1) {
      document.querySelector('#notification').innerHTML =
      "Player 1 is now the Shooter, so your money totals have swapped sides. <br>" +
      "Time to ante up and roll the dice!";
    }
    else if (activePlayer == 0) {
      document.querySelector('#notification').innerHTML =
      "Player 2 is now the Shooter, so your money totals have swapped sides. <br>" +
      "Time to ante up and roll the dice!";
    }
    else {
      //do nothing
    }
  }
  else {
    // do nothing
    console.log("continueGame chose else (gameend is 0)")
  }
}

/// EVENT LISTENERS

document.querySelector('.btn-roll').addEventListener('click', btnRoll)
document.querySelector('.btn-continue').addEventListener('click', continueGame)
document.querySelector('.btn-new').addEventListener('click', init)
document.querySelector('#btn-bet0').addEventListener('click', submitShooterBet)
document.querySelector('#btn-bet1').addEventListener('click', submitBetterBet)

//// WIN CONDITION CHECKERS: first round & subsequent rounds

function checkGameEndFirstRound() {
  firstRoll = dice1 + dice2
  console.log(firstRoll)
  if (firstRoll == 7) {
    gameend = 1
    document.querySelector('#notification').classList.remove('label')
    document.querySelector('#notification').innerHTML = '<b>' + firstRoll + '</b>' +
    '<br>' + "Player 1 wins the pot!" + "<br>" +
    "Hit Continue to SWITCH SIDES and carry on with the game - or New Game to start again.";
    shooterWinsWholePot()
      }
  else if (firstRoll == 11) {
    gameend = 1
      document.querySelector('#notification').classList.remove('label')
      document.querySelector('#notification').innerHTML = '<b>' + firstRoll + '</b>' +
      '<br>' + "Player 1 wins the pot!" + "<br>" +
      "Hit Continue to SWITCH SIDES and carry on with the game - or New Game to start again.";
      shooterWinsWholePot()
    }
  else if (firstRoll == 2) {
    gameend = 1
    document.querySelector('#notification').classList.add('label')
    document.querySelector('#notification').innerHTML = firstRoll +
    '<br>' + "The shooter crapped out! Player 2 wins the pot." + "<br>" +
    "Hit Continue to SWITCH SIDES and carry on with the game - or New Game to start again.";
    betterWinsWholePot()
  }
  else if (firstRoll == 3) {
    gameend = 1
    document.querySelector('#notification').classList.add('label')
    document.querySelector('#notification').innerHTML = firstRoll +
    '<br>' + "The shooter crapped out! Player 2 wins the pot." + "<br>" +
    "Hit Continue to SWITCH SIDES and carry on with the game - or New Game to start again.";
    betterWinsWholePot()
  }
  else if (firstRoll == 12) {
    gameend = 1
    document.querySelector('#notification').classList.add('label')
    document.querySelector('#notification').innerHTML = firstRoll +
    '<br>' + "The shooter crapped out! Player 2 wins the pot." + "<br>" +
    "Hit Continue to SWITCH SIDES and carry on with the game - or New Game to start again.";
    betterWinsWholePot()
  }
  else {
    document.querySelector('#notification').innerHTML = "Point set!";
    point = firstRoll
    document.querySelector('#point').innerHTML = "POINT SET: " + firstRoll;
    round++
    bettingTime = 1
    timeToBet()
    // now the point is set, a second round of betting begins where Better can pick For or Against
    // after that the dice are rolled again, this time calling checkGameEndNextRound()
  }
}


function checkGameEndNextRound() {
  forOrAgainstMethod()
  point = document.querySelector('#point').innerHTML.replace("POINT SET:","")
  nextRoll = dice1 + dice2
  round++
  console.log("roll: " + nextRoll + "forOrAgainst: " + forOrAgainst + "point:" + point)

  if (nextRoll == point && forOrAgainst == 1) {
    gameend = 1
            document.querySelector('#notification').innerHTML = "Point hit. The shooter wins:"
            + "<br>" + "The other player bet AGAINST so shooter takes the whole pot, plus an additional 50% of the pot from the other player's cash!" +
            "Hit Continue to SWITCH SIDES and carry on with the game - or New Game to start again.";
            //shooterWinsWholePot()
            //this is the ONLY case when this win condition will happen.
            shooterWinsWholePotPlusMore()
          }
  else if (nextRoll == point && forOrAgainst == 0) {
            document.querySelector('#notification').innerHTML = "Point hit. The shooter wins:"
            + "<br>" + "Player 2 bet FOR so they split the pot with the shooter!" +
            "Hit Continue to SWITCH SIDES and carry on with the game - or New Game to start again.";
            splitPot()
          }
  else if (nextRoll == 7 && nextRoll !== point && forOrAgainst == 1) {
          gameend = 1
            document.querySelector('#notification').innerHTML = "The shooter loses:"
            + "<br>" + "Player 2 bet AGAINST so they take the whole pot!" +
            "Hit Continue to SWITCH SIDES and carry on with the game - or New Game to start again.";
            betterWinsWholePot()
          }
  else if (nextRoll == 7 && nextRoll !== point && forOrAgainst == 0) {
            document.querySelector('#notification').innerHTML = "The shooter loses:"
            + "<br>" + "Player 2 bet FOR so they split the pot with the shooter!" +
            "Hit Continue to SWITCH SIDES and carry on with the game - or New Game to start again.";
            splitPot()
          }
  else {
    // gameend remains 0
          bettingTime = 1
          document.querySelector('#notification').classList.remove('label')
          document.querySelector('#notification').innerHTML = "Make bets or keep rolling";
  }
}
