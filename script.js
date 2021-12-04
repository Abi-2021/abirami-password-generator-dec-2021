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

// Generate password
function generatePassword() {
    var length = lengthPrompt();
    var characters =includeUpperCase() + includeLowercase() + includeNumberCase() + includeSpecialCharacters();
    return passwordGenerator(length,characters);
}

function lengthPrompt() {
    var length;
    var input = prompt("Length of the password? Min 8 Max 128")
    if (input == null || input === "" || input < 8) {
        length = 8
    } else {
        length = input;
    }
    return length;
}

function passwordGenerator(length, characters) {
    var result = '';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function includeUpperCase() {
    var upperCase = 'ABCDEFGHIJKLMNOPQRESTUVWXYZ';

    if (confirm("Include UpperCase Letters?")) {
        return upperCase;
    }
}

function includeLowercase() {
    var lowerCase ="abcdefghijklmnopqrstuvwxyz";

    if (confirm("Include LowerCase Letters?")) {
        return lowerCase;
    }
}

function includeNumberCase() {
    var number = "0123456789";

    if (confirm("Include Numbers?")) {
        return number;
    }
}

function includeSpecialCharacters() {
    var specialChars = "!\"#$%&\\'()*+,-./:;<=>?@[\\\\]^_`{|}~";

    if (confirm("Include Special Characters?")) {
        return specialChars;
    }
}