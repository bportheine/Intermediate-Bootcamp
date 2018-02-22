console.clear();
const hangSteps = [
  `






  `,
  `






  _______`,
  `
     |
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |/
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |/      |
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |/      |
     |      (_)
     |      \\|/
     |       |
     |      / \\
     |
  ___|___`
  ]
const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})
var dict = ["cupid", "hate", "love", "angel", "godly", "devine", "zeus", "cerberus", "cow"]
var q = Math.floor((Math.random()*dict.length))

function wrongGuessCount(word, guesses) {
  return guesses
  .filter(geuss => word.indexOf(geuss) < 0)
  .length;
}

function showGuess(word, guesses) {
  return word.split('').map(letter => {
    if(guesses.indexOf(letter) === -1) {
      return "_"
    }
      return letter
  }).join(" ")
}

function isWinner(word, guesses) {
  if(wrongGuessCount(word, guesses) >=6) return false
  return showGuess(word, guesses).indexOf("_") === -1
}

function showHangman(word, guesses) {
  switch(wrongGuessCount(word, guesses)) {
    case 0:
      console.log(hangSteps[0])
      break;
    case 1:
      console.log(hangSteps[1])
      break;
    case 2:
      console.log(hangSteps[2])
      break;
    case 3:
      console.log(hangSteps[3])
      break;
    case 4:
      console.log(hangSteps[4])
      break;
    case 5:
      console.log(hangSteps[5])
      break;
}


}

function next(word, guesses) {
    // check if lost
    if(wrongGuessCount(word, guesses) >= 6) {
      console.log(hangSteps[6])
      console.log(`Awww,  the word was ${word}.`)
      console.log("...")
      console.log("Better luck next time!\n")
      rl.close()
      return
    }
    // check if won
    if(isWinner(word, guesses)) {
      showHangman(word, guesses)
      console.log(word.split("").join(" "))
      console.log("#1")
      console.log("WINNER WINNER CHICKEN DINNER\n")
      console.log(`Kills: ${word.length - wrongGuessCount(word, guesses)}`)
      console.log(`Deaths: ${wrongGuessCount(word, guesses)}`)
      console.log()
      rl.close()

      return
    }
    // ask for the next letter
    showHangman(word, guesses)
    console.log(showGuess(word, guesses))
    console.log(`wrong guesses: ${wrongGuessCount(word, guesses)}`)
    console.log(guesses.join())
    rl.question('next letter? ', answer => {
        console.log('player wrote:', answer)
        // do something with answer
        if(answer == word) {
          console.clear();
          showHangman(word, guesses)
          console.log("You're")
          console.log("A")
          console.log("Whole Word Hero\n")
          console.log(`Kills: ${word.length - wrongGuessCount(word, guesses)}`)
          console.log(`Deaths: ${wrongGuessCount(word, guesses)}`)
          console.log()
          rl.close()
          return
        }
        console.clear();

        //console.log(showGuess(word, guesses))
        next(word, (answer === " " || answer.length > 1) ? guesses : guesses.concat(answer.toLowerCase()))
    })
}
next(dict[q], [])
