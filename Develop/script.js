
var generateBtn = document.querySelector("#generate");

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword (){
  var passwordLength = prompt("Please enter the length of your password (8-28 characters)")
  if (passwordLength <8 || passwordLength >128) { 
    alert("Error - password must be between 8 and 128 characters")
    return null;
  }

  var hasLower = confirm ("Would you like lower-case characters?")
  var hasUpper = confirm ("Would you like upper-case characters?")
  var hasNumbers = confirm ("Would you like numerical characters?")
  var hasSpecialCharacters = confirm ("Would you like special characters?")
  if (hasLower===false && hasUpper===false && hasNumbers===false && hasSpecialCharacters===false ) {
    alert ("Error - please choose at least one category")
    return null;
  }

  var charTypes = {
    lowerCase:"abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789", 
    special:"!@#$%^&*()_+|<>?"  
  }

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
  }

  var retVal = "";
  for (var i = 0; i < parseInt(passwordLength); i++) {
    retVal += charSet[Math.floor(Math.random()*charSet.length)];
    console.log(retVal);
  }
  
  return retVal;
}
  

