// We know that to pull off this caper Carmen will be wearing a disguise, we need to figure out what she will look like in order to nab her for sure this time.

// Carmen likes to cycle her outfits and we know on certain days she wears certain outfits, decrypting the early letter we might have some idea of what day, but it might also be offset depending on the calender she is using.

// Given a string with the value of a day of the week, return the number that that day is in the week. A second argument will be provided to determine if should start week on Monday if true, else Sunday if false. If the string is not a day of the week but is bad input, then return the string 'That's not a day of the week'.
// Example: 
// input: 'Sunday', false
// output: 1
//Example:
// input: 'Sunday', true
// output: 7

function daysPosition(day, offset) {
  // TODO YOUR CODE HERE
  if (offset == false) {
    let output
    switch (day) {
      case 'sunday':
        output = 1
        break;
      case 'monday':
        output = 2
        break;
      case 'tuesday':
        output = 3
        break;
      case 'wednesday':
        output = 4
        break;
      case 'thursday':
        output = 5
        break;
      case 'friday':
        output = 6
        break;
      case 'saturday':
        output = 7
        break;
    }
    return output
  } if (offset == true) {
    let output1
    switch (day) {
      case 'sunday':
        output1 = 7
        break;
      case 'monday':
        output1 = 1
        break;
      case 'tuesday':
        output1 = 2
        break;
      case 'wednesday':
        output1 = 3
        break;
      case 'thursday':
        output1 = 4
        break;
      case 'friday':
        output1 = 5
        break;
      case 'saturday':
        output1 = 6
        break;
    } return output1
  } else {
    return "That's not a day of the week"
  }


  // if (offset == true) {

  //   return output2

  // } if (offset == false) {
  //   return output

  // }
  // else return "That's not a day of the week"

  // if (day != (Monday = 1) || (Tuesday = 2) || (Wednesday = 3) || (Thursday = 4) || (Friday = 5) || (Saturday = 6) || (Sunday = 7)) {
  //   return "That's not a day of the week"
  // }
  // if (Monday = 1 == day) {
  //   return true
  // } else return false
}



// We have found that on the day of the caper is a golf tournament. The prize includes among other things a large coupon to the local costume shop. By keeping track of who is winning we might be able to bribe the winner to get more info for us.


/** 2. Given a both a score and a score for par, return the corresponding term:
 *           difference |   term
 *    -----------------------------------
 *            -3        |   "Ace"
 *            -2        |   "Eagle"
 *            -1        |   "Birdie"
 *             0        |   "Par"
 *            +1        |   "Bogie"
 *            +2        |   "Double Bogie"
 *            >= +3     |   "Ouch"
 */

function golfScore(score, par) {
  // TODO YOUR CODE HERE
}



// We haven't had much success with our previous attempts so we have decided to try to get answers out of her accomplice, they are a notorious gambler so we challenged them to a game of blackjack. The stakes are too high to lose, so we are going to have to cheat.

// In the casino game Blackjack, a player can gain an advantage by keeping track of the relative number of high and low cards remaining in the deck. This is called card counting. 

// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
/**
 *      Value   |   Cards
 *   --------------------------------
 *       +1     |   '2', '3', '4', '5', '6'
 *        0     |	'7', '8', '9' 
 *       -1	    |   '10', 'J', 'Q', 'K','A' 
 */
// Write a card counting function that will receive a card. The function will increment or decrement the global count variable according to the card's value (see table above). The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
// Example:
// output: '-5 Hold'
// Example:
// output: '2 Bet'

let count = 0

function cardCounter(card) {
  // TODO YOUR CODE HERE
}
