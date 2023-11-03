

var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = 'abcdefghijklmnopqrstuvwxyz';
var upperCasedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getPasswordOptions() {
  var confirmLength = parseInt(prompt("How many characters would you like your password to contain?"));

  while (confirmLength <= 7 || confirmLength >= 129 || isNaN(confirmLength)) {
    alert("Password length must be between 8-128 characters and contain numeric values. Try again.");
    confirmLength = parseInt(prompt("How many characters would you like your password to contain?"));
  }
  alert('Your password will have ' + confirmLength + ' characters');

  var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

  while (!confirmSpecialCharacter && !confirmNumericCharacter && !confirmLowerCase && !confirmUpperCase) {
    alert("You must choose at least one parameter");
    confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
    confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  }
  alert('Your password will have Special Character: ' + confirmSpecialCharacter + ', Numeric Character: ' + confirmNumericCharacter + ', Lowercase Character: ' + confirmLowerCase + ', Uppercase Character: ' + confirmUpperCase);

  var newArr = [];

  if (confirmSpecialCharacter) {
    newArr.push(...specialCharacters);
  }
  if (confirmNumericCharacter) {
    newArr.push(...numericCharacters);
  }
  if (confirmLowerCase) {
    newArr.push(...lowerCasedCharacters);
  }
  if (confirmUpperCase) {
    newArr.push(...upperCasedCharacters);
  }

  return { confirmLength, newArr };
}

function generatePassword(options) {
  let password = '';

  for (let i = 0; i < options.confirmLength; i++) {
    var randomIndex = Math.floor(Math.random() * options.newArr.length);
    password += options.newArr[randomIndex];
  }

  return password;
}

function writePassword() {
  var options = getPasswordOptions();
  if (options) {
    var password = generatePassword(options);
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  }
}

var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);
