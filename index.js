const displayPassword = document.getElementById("displayPassword");
const generateBtn = document.getElementById("generateBtn");

const upperCaseCheckBox = document.getElementById("upperCaseCheckBox");
const lowerCaseCheckBox = document.getElementById("lowerCaseCheckBox");
const numbersCheckBox = document.getElementById("numbersCheckBox");
const symbolsCheckBox = document.getElementById("symbolsCheckBox");

const passwordRangeInput = document.getElementById("passwordRangeInput");
const myPasswordLength = document.getElementById("passwordLength");

const passwordRangeValue = document.getElementById("passwordRangeValue");
const copyBtn = document.getElementById("copyBtn");

const copyTextIndicator = document.getElementById("copyTextIndicator");


passwordRangeInput.addEventListener("input", function(){
     passwordRangeValue.textContent = `Password Length: ${passwordRangeInput.value}`;
})

generateBtn.addEventListener("click", function(){

     let passwordLength = passwordRangeInput.value;
     passwordLength = Number(passwordLength);

     passwordGenerator(passwordLength);

})

function passwordGenerator(passLength){

     let includeUpperCase = false;
     let includeLowerCase = false;
     let includeNumberCase = false;
     let includeSymbolCase = false;

     upperCaseCheckBox.checked ? includeUpperCase = true : false;
     lowerCaseCheckBox.checked ? includeLowerCase = true : false;
     numbersCheckBox.checked ? includeNumberCase = true : false;
     symbolsCheckBox.checked ? includeSymbolCase = true : false;

     lowercaseChar = "qwertyuiopasdfghjklzxcvbnm";
     uppercaseChar = "QWERTYUIOPASDFGHJKLZXCVBNM";
     numberChar = "0123456789";
     symbolChar = "~!@#$%^&*()";

     let allowedChar = "";
     let password = "";

     allowedChar += includeLowerCase ? lowercaseChar : "";
     allowedChar += includeUpperCase ? uppercaseChar : "";
     allowedChar += includeNumberCase ? numberChar : "";
     allowedChar += includeSymbolCase ? symbolChar : "";

     if(allowedChar.length === 0){
          displayPassword.textContent = "(atleast choose 1 set of character)";
     }
     else{
               
          for(let i = 0; i < passLength; i++){
     
               let randomIndex = Math.floor(Math.random() * allowedChar.length);
     
               password += allowedChar[randomIndex];
     
               displayPassword.textContent = password;
          }


          copyBtn.addEventListener("click", function(){

               

               navigator.clipboard.writeText(displayPassword.textContent).then(function() {
                    copyTextIndicator.classList.toggle('active');
                    copyTextIndicator.textContent = "Text Copied!";
          
                }).catch(function(error) {

                    copyTextIndicator.textContent = "Failed to copy text.";
          
                });
          
          })
     }
}
