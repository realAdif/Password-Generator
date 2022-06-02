// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var resultEl = document.querySelector('#password');

var passwordLengthEl = document.querySelector("#length");
var upperCaseCheckBoxEl = document.querySelector("#uppercase");
var lowerCheckBoxEl = document.querySelector("#lowercase");
var numberCheckBoxEl = document.querySelector("#number");
var symbolCheckBoxEl = document.querySelector("#symbol");

//  array of special Characters
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
// Array of number characters 
var number = ['0','1','2','3','4','5','6','7','8','9'];
// Array of uppercase characters 
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// Array of lowercase characters
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Array of upcase and lowerscase
var UpcaseLowercase = uppercase.concat(lowercase);
// Array of numbers and special characters
var numberSpecialCharacters = number.concat(specialCharacters);
// arrays of upcase lowercase number and special characters
var uppercaseLowerCaseNumerSpecialCharacters = uppercase.concat(lowercase,number,specialCharacters);
// arrays of upcase lowercase number and special characters
var uppercaseLowerCaseNumer = uppercase.concat(lowercase,number);
//arrays of upcase and number
var uppercaseNumber = uppercase.concat(number);

var lowercaseNumber = lowercase.concat(number);

var uppercaselowercaseNumber = uppercase.concat(lowercase,number);

var upercaseSpecialCharacters = uppercase.concat(specialCharacters);
var lowercaseSpecialChracters = lowercase.concat(specialCharacters);
var uppercaseLowerCaseSpecialCharacters = uppercase.concat(lowercase,specialCharacters);

var uppercaseNumberSpecialCharacters = uppercase.concat(number,specialCharacters);
var lowercaseNumberSpecialcharacters = lowercase.concat(number,specialCharacters);


const length = passwordLengthEl.value;
const uppercaseTrue = upperCaseCheckBoxEl.checked;
const lowercaseTrue = lowerCheckBoxEl.checked;
const numberTrue = numberCheckBoxEl.checked;
const symbolTrue = symbolCheckBoxEl.checked;

// Write password to the #password input
function onClick() {
	const length = passwordLengthEl.value;
	const uppercaseTrue = upperCaseCheckBoxEl.checked;
	const lowercaseTrue = lowerCheckBoxEl.checked;
	const numberTrue = numberCheckBoxEl.checked;
	const symbolTrue = symbolCheckBoxEl.checked;
	
	console.log(" Length: ", length);
  	console.log(" uppercase: ",uppercaseTrue);
  	console.log(" lowercase: ",lowercaseTrue);
  	console.log(" number: ",numberTrue);
  	console.log(" symbol: ",symbolTrue);

	  if(length > 128){
		resultEl.innerHTML = 'resultEl.innerHTML'
	  }

	resultEl.innerHTML = randomGenerator();

	  function randomGenerator(){	
		result = ' ';
		
		if (length > 128){
			return result = " you can not have more then 128 length";
		}
		// if the Uppercase is true
		if(uppercaseTrue === true && lowercaseTrue === false && numberTrue === false && symbolTrue === false ){
			
			for(var i =0; i< length; i++){
				result += uppercase[Math.floor(Math.random() * 26)]
			}
			return result;
		// if the lowercase is true		
		}else if (uppercaseTrue === false && lowercaseTrue === true && numberTrue === false && symbolTrue === false ){

			for(var i = 0; i< length; i++){
				result += lowercase[Math.floor(Math.random() * 26)]				
			}
			return result;
		// if the number is true
		}else if (uppercaseTrue === false && lowercaseTrue === false && numberTrue === true && symbolTrue === false ){
			for(var i = 0; i< length; i++){
				result += number[Math.floor(Math.random() * 10)]
			}
			return result;
		// if the symbol is true
		}else if (uppercaseTrue === false && lowercaseTrue === false && numberTrue === false && symbolTrue === true ){
			for(var i = 0; i< length; i++){
				result += specialCharacters[Math.floor(Math.random() * 23)]
			}
			return result;
		}else if (uppercaseTrue === true && lowercaseTrue === true && numberTrue === false && symbolTrue === false){
			for(var i = 0; i< length; i++){
				result += UpcaseLowercase[Math.floor(Math.random() * 52)]; 		
			}		
			return result;
		}else if (uppercaseTrue === false && lowercaseTrue === false && numberTrue === true && symbolTrue === true){
			for(var i = 0; i< length; i++){
				result += numberSpecialCharacters[Math.floor(Math.random() * 33)]
			}
			return result;
		}else if(uppercaseTrue === true && lowercaseTrue === true && numberTrue === true && symbolTrue === true){
			for(var i = 0; i< length; i++){
				result += uppercaseLowerCaseNumerSpecialCharacters[Math.floor(Math.random()* 85)]
			}
			return result;
		}else if(uppercaseTrue === true && lowercaseTrue === false && numberTrue === true && symbolTrue === false){
			for(var i = 0; i< length; i++){
				result += uppercaseNumber[Math.floor(Math.random()* 36)]
			}
			return result;

		}else if(uppercaseTrue === false && lowercaseTrue === true && numberTrue === true && symbolTrue === false){
			for(var i = 0; i< length; i++){
				result += lowercaseNumber[Math.floor(Math.random()* 36)]
				
			}
			return result;
		}
		else if(uppercaseTrue === true && lowercaseTrue === true && numberTrue === true && symbolTrue === false){
			for(var i = 0; i< length; i++){
				result += uppercaseLowerCaseNumer[Math.floor(Math.random()* 62)]
				
			}
			return result;
		}else if(uppercaseTrue === true && lowercaseTrue === false && numberTrue === false && symbolTrue === true){
			for(var i = 0; i< length; i++){
				result += upercaseSpecialCharacters[Math.floor(Math.random()* 48 )]
				
			}
			return result;
		}else if(uppercaseTrue === false && lowercaseTrue === true && numberTrue === false && symbolTrue === true){
			for(var i = 0; i< length; i++){
				result += lowercaseSpecialChracters[Math.floor(Math.random()* 48 )]
				
			}
			return result;
		}else if(uppercaseTrue === true && lowercaseTrue === true && numberTrue === false && symbolTrue === true){
			for(var i = 0; i< length; i++){
				result += uppercaseLowerCaseNumerSpecialCharacters[Math.floor(Math.random()* 75 )]
				
			}
			return result;
		}
		else if(uppercaseTrue === true && lowercaseTrue === false && numberTrue === true && symbolTrue === true){
			for(var i = 1; i< length; i++){
				result += uppercaseNumberSpecialCharacters[Math.floor(Math.random()* 59 )]
				
			}
			return result;
		}
		else if(uppercaseTrue === false && lowercaseTrue === true && numberTrue === true && symbolTrue === true){
			for(var i = 1; i< length; i++){
				result += lowercaseNumberSpecialcharacters[Math.floor(Math.random()* 59 )]
			}
				
			return result;

		}
		else{
			return  result =  "Select atleast 1 option";
		}

		
	}

	
	
	
}


// Add event listener to generate button
generateBtn.addEventListener("click", onClick);
