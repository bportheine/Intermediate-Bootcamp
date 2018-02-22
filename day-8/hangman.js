function wrongGuessCount(word, guesses) {
  return guesses
  .filter(guess => word.indexOf(guess) < 0)
  .length
}

//console.log('test wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']) === 2)
//console.log(wrongGuessCount('hello', ['e', 'd', 'x', 'o']))

function showGuess(word, guesses) {
  let intoArray = word.split('')
  return intoArray.map(function(letter){
    if(guesses.indexOf(letter) !== -1){
      return letter
    }
    else {        //Dont' need to use else because there is a return in the if
      return '_'  //but still need to return the blank spot outside the if
    }
  }).join(' ')
}

//console.log('test wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']) === 2)
//console.log(wrongGuessCount('hello', ['e', 'd', 'x', 'o']))

function isWinner(word, guesses) {
  if (showGuess(word, guesses).includes('_')){
  return false
  }
  else {
    return true
  }
}

// to read from the console
const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})

function next(word, guesses) {
    // check if lost
    // check if won
    // ask for the next letter
    rl.question('next letter? ', answer => {
        console.log('player wrote:', answer)
        // do something with answer
    })
}

console.log('test winner 1:', !isWinner('hello', ['e', 'x']))
console.log('test winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']))

//console.log(showGuess('hello', ['l', 'a', 'e']))
//console.log('test show guess 1:', showGuess('hello', ['l']) === '_ _ l l _')
//console.log('test show guess 2:', showGuess('hello', ['l', 'a', 'e']) === '_ e l l _')
