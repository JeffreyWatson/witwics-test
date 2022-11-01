// We have intercepted a letter sent to one of her accomplices 

// A message sent to her associate requires we decode it using a letter within a certain position of a string. 
// Ex: ('Cryptology', 3) should return 'p'
function letterAtPosition(str, position) {
  // TODO YOUR CODE HERE
  console.log('string', str);
  console.log('position in string', position);
  return str[position]
}


// It has also been discovered some of the words have been seperated and need to be joined back together, sometimes with an extra seperator, if one is not provided assume that it will be an empty space

// Write a function that will join two strings with an optional seperating character 
function concat(str1, str2, seperator = " ") {
  // TODO YOUR CODE HERE
  // let concat = str1 + seperator + str2
  // return concat
  // NOTE OR
  return str1 + seperator + str2
}

// Our cryptologists have discovered that some of the letters that were seperated out should also be capitalized.

// Write a function that will capitalize the letter at a given position and return it
function capitalizer(str, position) {
  // TODO YOUR CODE HERE
  let capitalize = str[position]
  return capitalize.toUpperCase()
}


// There are a few key words we need to look for to find if they are in the message
// write a function that will take in two strings and identify if the first string 'includes' the second
function messageContainsPhrase(message, phrase) {
  // TODO YOUR CODE HERE
  return message.includes(phrase)
}