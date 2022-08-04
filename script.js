// Assignment Code
var generateBtn = document.querySelector("#generate");

//Characters Included in password
var numbersChar = "0123456789";
var upperCasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCasechar = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_-=+{}[];:',./<>?|`~";

//variables for questions
var passwordLength;
var upperCase;
var lowerCase;
var numbers;
var special;

//detrmines how long password is
function chooseLength() {
  passwordLength = prompt("Password must be atleast 8 characters long and no more than 128 characters long");
   
  if (passwordLength < 8) {
    alert("Password must be atleast 8 characters long!");
    chooseLength();

  } else if (passwordLength > 128) {
    alert("Password can not contain more than 128 characters!");
    chooseLength();

  } else {
    alert("You now will be prompted to choose what you'd like to include in the password; NOTE: if you select NO for all you will have a passowrd without special characters, numbers, and all lowercase letters");
  }
  return passwordLength;
}

//chooses uppercase letters or not
function chooseUppercase() {
  upperCase = prompt("Do you want to include uppercase in your password? (Y or N)");

  if (upperCase === "y" || upperCase === "Y") {
    upperCase = true;
    return upperCase;
  
  } else if (upperCase == "n" || upperCase === "N") {
    upperCase = false;
    return upperCase;
  
  } else {
    alert("Please enter the letter Y for yes or N for no.")
  }
  return upperCase;
}


//chooses numbers or not
function chooseNumbers() {
  numbers = prompt("Do you want to include numbers in your password? (Y or N)");

  if (numbers === "y" || numbers === "Y") {
    numbers = true;
    return numbers;

  } else if (numbers == "n" || numbers === "N") {
    numbers = false;
    return numbers;

  } else {
    alert("Please enter the letter Y for yes or N for no.")
  }
  return numbers;
}

//chooses special characters or not
function chooseSpecial() {
  special = prompt("Do you want to include special characters in your password? (Y or N)");

  if (special === "y" || special === "Y") {
    special = true;
    return special;

  } else if (special === "n" || special === "N") {
    special = false;
    return special;

  } else {
    alert("Please enter the letter Y for yes or N for no.")
  }
  return special;
}

//calling the functions
function generatePassword(){
  chooseLength();
  console.log(passwordLength);
  chooseUppercase();
  console.log(upperCase);
  chooseNumbers();
  console.log(numbers);
  chooseSpecial();
  console.log(special);
  


var lower = lowerCasechar;
var password = "";

if (numbers && special && upperCase){
    lower += numbersChar + specialChar + upperCasechar;

} else if (special && upperCase) {
    lower += specialChar + upperCasechar;

} else if (numbers && special) {
    lower += numbersChar + specialChar;

} else if (numbers && upperCase) {
    lower += numbersChar + upperCasechar;

} else if (numbers) {
    lower += numbersChar;

} else if (special) {
  lower += specialChar;

} else if (upperCase) {
  lower += upperCase;

} else {
  lower === lowerCasechar
}

  for(var i = 0; i < passwordLength; i++){
  password += lower.charAt(Math.floor(Math.random() * lower.length));
  }
  return password;

}


function writePassword() {
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
