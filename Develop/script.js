var passwordLength;
var passwordString = "";
var passwordCharacters = "";

var random = function (number) {
  return Math.floor(Math.random() * number);
};

function getPassword() {
  var passwordLength = prompt("Choose between 8 and 128 characters");

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("you need to provide a valid answer! Please try again.");
    console.log("No answer was given.");
  } else {
    getLowerCase();
  }
}

function getLowerCase() {
  var answer = prompt("do you want to use lowercase letters?");
  if (answer.toLowerCase() == "yes" || answer.toLowerCase() == "y") {
    passwordCharacters = passwordCharacters + "abcdefghijklmnopqrstuvwxyz";
  }
  getUpperCase();
}

function getUpperCase() {
  var answer = prompt("Do you want to use Uppercase letters?");
  if (answer.toLowerCase() == "yes" || answer.toLowerCase() == "y") {
    passwordCharacters = passwordCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  getNumbers();
}

function getNumbers() {
  var answer = prompt("Do you want to use numbers?");
  if (answer.toLowerCase() == "yes" || answer.toLowerCase() == "y") {
    passwordCharacters = passwordCharacters + "1234567890";
  }
  getSpecial();
}

function getSpecial() {
  var answer = prompt("Do you want to use special characters?");
  if (answer.toLowerCase() == "yes" || answer.toLowerCase() == "y") {
    passwordCharacters =
      passwordCharacters + " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  getPasswordThing()
}

function generatePassword() {
  getPassword();
}

function PasswordThing() {
  if (password.length == 0) {
    getLowerCase();
  } else {
    var passwordArray = passwordCharacters.split("");
    while (passwordString.length < passwordLength) {
      var number = random(passwordArray.length);
      passwordString = passwordString + passwordArray[number];
    }
    console.log(passwordString)
    return passwordString;
  }
}

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
