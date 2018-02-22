function palindrome(word) {
  if (word.length <= 1){ return true}
  if (word.charAt(0) !== word.charAt(word.length - 1)) {
    return false}
    else {
    palindrome(word.slice(1, -1));
    return true
  }
}

// test
console.log(`test palindrome 1: -> ${palindrome('noon')}`)
console.log(`test palindrome 2: -> ${palindrome('civic')}`)
console.log(`test palindrome 3: -> ${!palindrome('test')}`)
