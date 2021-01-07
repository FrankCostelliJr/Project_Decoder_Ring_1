'use strict';

function caesar(input, shift, encode = true) {
  if(!shift || !input) return false;
  if(shift === 0 || shift > 25 || shift < -25) return false;
  const inputString = input.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  if (encode) {
    let codeString = '';
    for(let index = 0; index < inputString.length; index++) {
      let currentLetter = inputString[index];
      if(currentLetter === ' ') {
        codeString += currentLetter;
        continue;
      }
      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex + shift;
      if(newIndex > 25) newIndex -= 26;
      if(newIndex < 0) newIndex += 26;
      if(input[index] === input[index].toUpperCase()) {
        codeString += alphabet[newIndex].toUpperCase(); 
      } else {
        codeString += alphabet[newIndex];
      }
    }
    return codeString;
  }

  if (!encode) {
    let decodeString = '';
    for(let index = 0; index < inputString.length; index++) {
      let currentLetter = inputString[index];
      if(currentLetter === ' ') {
        decodeString += currentLetter;
        continue;
      }
      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex - shift;
      if(newIndex > 25) newIndex -= 26;
      if(newIndex < 0) newIndex += 26;
      if(input[index] === input[index].toUpperCase()) {
        decodeString += alphabet[newIndex].toUpperCase(); 
      } else {
        decodeString += alphabet[newIndex];
      }
    }
    return decodeString;
  }
}


module.exports = caesar;
