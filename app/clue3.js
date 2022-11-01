// We know the getaway car will be used in the heist, it will help track it if we can figure out the plate number of the car. While all plates are a combo of numbers and letters, forgers will change only the numbers to better blend in.

// We know its a fake plate, and without revealing to much the sum of certain numbers in a plate will equal other numbers in the plate.

// Write a function that uses the addition operator to add two numbers together
function add(x, y) {
  // TODO YOUR CODE HERE
  return x + y
}

// Further calculations are identified through cubes
// Write a function that returns the Cubed value of x
function cubed(x) {
  // TODO YOUR CODE HERE
  // return x * x * x
  return Math.pow(x, 3)
}


// Having narrowed down the number of cars, we will now be splitting up the team to hit the streets and check plates, to make sure we handle each days cars evenly we need to divide the number of cars out by the number of team members

// Write a function that will divide two numbers, and will format the returned value
// as a whole number. (No Decimals)
function divideWholey(cars, teamMembers) {
  // TODO YOUR CODE HERE
  let wholeNum = cars / teamMembers
  return Math.trunc(wholeNum)

}

// The sum of all numbers on a plate should be even, if its not the car is suspect

// Write a function that takes in a number and determines if it is even. 
// It should return a boolean value - true if it is even, false if it is odd.
function isEven(num) {
  // TODO YOUR CODE HERE
  if (num % 2 == 0) {
    return true
  } else return false

}

// We have found the pattern used in the forgery, its a series of randomly generated numbers between two values, with this we can take the plates we have and find the one out of place plate

// Given 2 numbers, generate a random number within that range. 
// Make it inclusive so that the starting and ending numbers are part 
// of the range. HINT ** Utilize Javascript's Math Class (To the Google!)
function numberGenerator(min, max) {
  // TODO YOUR CODE HERE
  return Math.ceil(Math.random() * (max - min + 1) + min)
}