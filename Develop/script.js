// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword (){
  var passwordLength = prompt("Please enter the length of your password (8-28 characters)")
  if (passwordLength <8 || passwordLength >128) { 
    alert("Error - password must be between 8 and 128 characters")
    return null;
  }

  var hasLower = confirm ("Do you want lower-case characters?")
  var hasUpper = confirm ("Do you want upper-case characters?")
  var hasNumbers = confirm ("Do you want numerical characters?")
  var hasSpecialCharacters = confirm ("Do you want special characters?")
  if (hasLower===false && hasUpper===false && hasNumbers===false && hasSpecialCharacters===false ) {
    alert ("Error - choose at least one category")
    return null;
  }

  //object created 
  var charTypes = {
    lowerCase:"abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789", 
    special:"!@#$%^&*()_+|<>?"  
  };

  var charSet = "";
  if (hasLower===true) {
    charSet = charSet + charTypes.lowerCase;
  }
  if (hasUpper===true) {
    charSet = charSet + charTypes.upperCase;
  }
  if (hasNumbers===true) {
    charSet = charSet + charTypes.numeric;
  }
  if (hasSpecialCharacters===true) {
    charSet = charSet + charTypes.special;
  };
//creating random number
  var retVal = "";
  for (var i = 0; i < parseInt(passwordLength); i++) {
    retVal += charSet[Math.floor(Math.random()*charSet.length)];
    console.log(retVal);
    return retVal;
  }
  
}
  



// 





// generateBtn.addEventListener("click", writePassword);

  // var chars =  "0123456789abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ !@#$%^&*()_+|<>?
  // var length 
  // passwordText.value = password;


  // for (i=0, i<length; i++) {
  //   password += chars
  // }


// Add event listener to generate button





//user selects password length (between 8-128 characters)
// ("Select your password length")
// //computer confirms with alert - you have chosen length of ____
// // if password is too short - your password is too short.
// //if password is too long - your password is too long
// ("Do you want to include uppercase characters?") 
// Prompt - User answers yes or no
// ("Do you want to inculde Lowercase characters?") 
// prompt User answers yes or no
// ("Do you want to include numeric characters?")  
// promp User answers yes or no
// ("Do you want to include special characters?") 
// prompt User answers yes or no
// // confirmation
// ("You have chosen ")

// arrays of different characters....?

