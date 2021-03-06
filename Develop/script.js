// ASSIGNMENT CODE STARTS HERE
//Function to get ammount of characters
var getCharacters = function() {
  var characters = window.prompt("How many characters would you like your password to contain?");
  if((characters > 7) && (characters < 129)) {
    return characters;
  }
  //Ensure the user can't input an invalid response
  else {
    window.alert("Please enter a numeric value between 8 and 128");
    getCharacters();
  }
}

//Generate Password Function
var generatePassword = function() {
  passLength = getCharacters();
  //Ask the user which characters they would like in their password
  var confirmLower = window.confirm("Would you like to include lowercase letters in your password?");
  var confirmUpper = window.confirm("Would you like to include Uppercase letters in your password?");
  var confirmNumber = window.confirm("Would you like to include numbers in your password?");
  var confirmSpecial = window.confirm("Would you like to include special characters in your password?");

  //Determine how many types of characters the user chose
  var typeAmmount = (confirmLower + confirmUpper + confirmNumber + confirmSpecial);
  if (typeAmmount === 0){
    window.alert("You need to choose at lease one option");
    return generatePassword();
  }

  //Add character types chosen by user to the array of possible characters
  var charOption = [];
  if (confirmLower) {
    charOption = charOption.concat(asciiLower)
  }
  if (confirmUpper) {
    charOption = charOption.concat(asciiUpper)
  }
  if (confirmNumber) {
    charOption = charOption.concat(asciiNumber)
  }
  if (confirmSpecial) {
    charOption = charOption.concat(asciiSpecial)
  }

  //Set up array to be length of password
  var passwordCharacters = []
  for (let i = 0; i < passLength; i++) {
    //generate a random number and convert it into its ascii character
    var characterCodes = charOption[Math.floor(Math.random() * charOption.length)];
    passwordCharacters.push(String.fromCharCode(characterCodes));
  }
  //turn password array into a string
  return passwordCharacters.join("");
}

//Assign characters to an array of their character type
var charRange = function(low, high) {
var array = [];
for (let i = low; i <=high; i++) {
  array.push(i);
}
return array;
}

//Determine which characters to use based on their Ascii values
var asciiLower = charRange(97, 122)
var asciiUpper = charRange(65, 90)
var asciiNumber = charRange(48, 57)
var asciiSpecial = charRange(33, 47).concat(
  charRange(58, 64)
  ).concat(
  charRange(91,96)
  ).concat (
  charRange(123, 126)
)

//END OF ASSIGNMENT CODE

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
