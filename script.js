// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// document.querySelector("#generate"): Code selects an HTML element in the document. It uses the document.querySelector method to find the first element in the document that matches the specified CSS selector. It's looking for an element with an id of "generate." The # symbol is used in CSS selectors to select elements by their id.

//.addEventListener("click", writePassword): Once the "generate" element is selected, code adds an event listener to it. It specifies that when the element is clicked (the "click" event), the writePassword function should be executed.

var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);

// Variable Declaration placed in a global scope. Will be used to collect user imput.
//confirmLength: This variable is initialized to an empty string, indicating that it will store the user's input for the desired password length.
//The rest of the variables are declared but not initialized with a value. Will be used to store the user's preference for including special characters, numeric characters, upper case letters and lower case letters in the generated password. 

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

//This function is designed to obtain user preferences or options for generating a password. 
//Inside the function, it uses the prompt function to display a dialog box to the user and ask for input. The user is asked, "How many characters would you like your password to contain?"
//The user's input is then stored in the confirmLength variable.

function getPasswordOptions() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

//Then enters a while loop to validate the user's input; We use while loop because are best used when you want the loop to break based on a condition other than the number of times it runs.
//If the user's input is less than or equal to 7 or greater than or equal to 129, it displays an alert message saying, "Password length must be between 8-128 characters. Try again."
//It then prompts the user again to enter the password length, and their input is stored in the confirmLength variable again.
//The while loop continues to run until the user enters a valid password length (between 8 and 128 characters, inclusive).
//Once the user enters a valid password length, it exits the while loop, and an alert is displayed, indicating how many characters the user's password will have.

while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters. Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 
      alert('Your password will have ' + confirmLength + ' characters');

//Confirm methode: The code uses the confirm function to display confirmation dialog boxes to the user for each of the following password options:
//Special characters,  Numeric characters, Lowercase characters, Uppercase characters 
//When the code is executed, the browser displays the dialog box with an "OK" button and a "Cancel" button.  
//When the user clicks "OK," the corresponding variable is set to true, and when they click "Cancel," the variable is set to false.
      
//Validation Loop: After collecting the user's preferences, the code enters a while loop. This loop checks if all the variables (confirmSpecialCharacter, confirmNumericCharacter, confirmLowerCase, and confirmUpperCase) are false, indicating that the user did not select any of the password options. If all are false, it displays an alert instructing the user to choose at least one parameter and then re-prompt the user to select their preferences. This process continues until the user chooses at least one option.
//After the user has selected their preferences, the code uses the alert function to display a message to the user. The message informs the user of their selected password options and includes the variable names to make it descriptive.
//this code ensures that the user chooses at least one character type to include in the generated password

 var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
 var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
 var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
 var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
     
while(confirmUpperCase  && confirmLowerCase  && confirmSpecialCharacter  && confirmNumericCharacter) {
      alert("You must choose at least one parameter");
      var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
      var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
      var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
      var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
      } 
      alert('Your password will have Special Character: ' + confirmSpecialCharacter + ', Numeric Character: ' + confirmNumericCharacter + ', Lowercase Character: ' + confirmLowerCase + ', Uppercase Character: ' + confirmUpperCase);     
}
getPasswordOptions();























































// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

