// At the question marks, fill in on of the options: transform, select, reduce, map, or filter

var route1 = [2.1, 3.5, 0.3, 5.2] // a route of different stretches in kilometers

var distance1 = route1[0]               // ? TRANSFORM
var distance1InMiles = distance1 / 1.6  // ? TRANSFORM

// what does this function do? TRANSFORM
function kilometerToMile(km) {
  return km / 1.6
}

// what does this function do? REDUCE
function total(route) {
  var res = 0
  for (var i = 0; i < route.length; i++) { // iterate
    res += route[i]                      // ? TRANSFORM, ? SELECT
  }
  return res
}

// what does this function do? MAP
function routeInMiles(route) {
  var res = []
  for (var i = 0; i < route.length; i++) { // iterate
    var mile = kilometerToMile(route[i]) // ? TRANSFORM, ? SELECT
    res[i] = mile                        // keep
  }
  return res
}

// what does this function do? FILTER
function longStretches(route) {
  var res = []
  for (var i = 0; i < route.length; i++) { // iterate
    var stretch = route[i]               // ? SELECT
    if (stretch > 2) {                   // check
      res.push(stretch)                // keep
    }
  }
  return res
}

// what kind of function is this? REDUCE
function averageStretch(route) {
  var avg = total(route)/route.length    // ? TRANSFORM, ? SELECT
  return avg
}

console.log('average kilometers per stretch:', averageStretch(route1))
