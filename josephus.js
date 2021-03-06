// solving Josephus Problem of any crowd size under 1,048,576
// crowd = 2^a + l
// Winner(n) = 2l + 1

// the selected prime is the "2^a" part of "crowd = 2^a + l"
var primeShortlist, selectedPrime
primeShortlist = []

//take crowd size
var crowd = prompt("Please enter a crowd size (integer)")

// finds the biggest prime that's <= to crowd size (finding 2a)
function primeFinder() {
  // generates all primes of 2 up to 2 ^20
  for (i=1; i<20; i++) {
    var prime = Math.pow(2,i)
    // saves primes under crowd size to shortlist
      if (prime <= crowd) {
        primeShortlist.push(Math.pow(2,i))
      }
}
  // takes the last item on the primeShortlist (the biggest number)
  selectedPrime = primeShortlist.slice(-1)[0]
  return selectedPrime
}

// now to find l
function findL() {
  selectedPrime = primeFinder()
  // crowd = 2a + l
  var l = crowd - selectedPrime
  if (crowd <= 1) {
  l = 0
  }
  return l
}

function calculateWinPosition() {
  // do final calculations
  var winningPosition = (2 * findL() + 1);
  console.log("The only safe position in the circle is: " + winningPosition)
}

calculateWinPosition()
