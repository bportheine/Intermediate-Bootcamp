function toAmericanGrade(grade) {
  if (grade >=9) {return 'A';}
  else if (grade >=8) {return 'B';}
  else if (grade >=7) {return 'C';}
  else if (grade >=6) {return 'D';}
  else if (grade >=0) {return 'F';}
}

function toAmericanGrades(array) {
  let newArray = array.map(toAmericanGrade);
  return newArray;
}

function averageAmericanGrade(array) {
  let total = array.reduce(function(x,y){
    x=x+y
    return x})
  let avg = total/array.length
  return toAmericanGrade(avg)
}

// test
var grades1 = [9, 5.5, 6, 7.3]
console.log(`average: -> ${'D' == averageAmericanGrade(grades1)}`)

// test
console.log(`last is C -> ${'C' == toAmericanGrades(grades1)[3]}`)

console.log(toAmericanGrades(grades1))
// tests
console.log(`9 = A -> ${'A' == toAmericanGrade(9)}`)
console.log(`10 = A -> ${'A' == toAmericanGrade(10)}`)
console.log(`1 = F -> ${'F' == toAmericanGrade(1)}`)
console.log(`5.9 = F -> ${'F' == toAmericanGrade(5.9)}`)
console.log(`6 = D -> ${'D' == toAmericanGrade(6)}`)
console.log(`6.9 = D -> ${'D' == toAmericanGrade(6.9)}`)
