// Assignment Code
var generateBtn = document.querySelector('#generate');
var length;
var charset = '';
const lower = "abcdefghijklmnopqrstuvwxyz";
const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";
const symbols = "!@#$%^&*?";
var valid = false;
var lowNeeded;
var capNeeded;
var numNeeded;
var symNeeded;
var lowConfirm = false;
var capConfirm = false;
var numConfirm = false;
var symConfirm = false;

function resetCon(){
  capConfirm = false;
  lowConfirm = false;
  numConfirm = false;
  symConfirm = false;
}

 //  Checks that all parts required are in it.
function checkPassword() {
  for (var x = 0; x < password.length; x++){
    for (var a = 0; a < caps.length; a++){
      if(password.charAt(x) == caps.charAt(a)){
        capConfirm = true;
      }
    }
    for (var b = 0; b < length; b++){
      if(password.charAt(x) == nums.charAt(b)){
        numConfirm = true;
      }
    }
    for (var c = 0; c < length; c++){
      if(password.charAt(x) == symbols.charAt(c)){
        symConfirm = true;
      }
    }
    for (var d = 0; d < length; d++){
      if(password.charAt(x) == lower.charAt(d)){
        lowConfirm = true;
      }
    }
  }
}
//  compares the included types of characters to see if it matches what the user input
function validatePassword() {
  if (capNeeded == capConfirm){
    if (numNeeded == numConfirm){
      if (symNeeded == symConfirm){
        if (lowNeeded == lowConfirm){
          valid = true;
        } else {
          resetCon();
          generatePassword();
        }
      } else {
        resetCon();
        generatePassword();
      }
    } else {
      resetCon();
      generatePassword();
    }
  } else {
    resetCon();
    generatePassword();
  }
}

function generatePassword() {
    password = "";
  for (var i = 0, n = charset.length; i < length; i++){
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  console.log(password);
  checkPassword();
  validatePassword();
  if (valid == true) return password;
}

function lengthCheck() {
  if (length < 8) {
   return false;
  } 
  if (length > 128) {
    return false;
  }
  if (true == isNaN(length)) {
    return false;
  }
}

function lengthPrompt() {
  length = prompt("Choose your password size between 8 and 128 characters.");
  if (false == lengthCheck()) {
    alert("Please pick a valid answer");
    lengthPrompt();
  }
}

// Write password to the #password input
function writePassword() {
  lengthPrompt();
    if (confirm("Do you want lowercase letters in your password?") == true)  {
      charset += "abcdefghijklmnopqrstuvwxyz";
      lowNeeded = true;
    } else {
      lowNeeded = false;
    }
    console.log(charset);
    if (confirm("Do you want capital letters in your password?") == true)  {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      capNeeded = true;
    } else {
      capNeeded = false;
    }
    console.log(charset);
    if (confirm("Do you want numbers in your password?") == true)  {
      charset += "0123456789";
      numNeeded = true;
    } else {
      numNeeded = false;
    }
    console.log(charset);
    if (confirm("Do you want symbols in your password?") == true)  {
      charset += "!@#$%^&*?";
      symNeeded = true;
    } else  { 
      symNeeded = false;
    }
    console.log(charset);
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
 charset = "";
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
