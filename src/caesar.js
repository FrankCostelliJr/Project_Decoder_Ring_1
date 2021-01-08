'use strict';
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function caesar(input, shift, encode = true) {
  if(!shift || !input || shift === 0 || shift > 25 || shift < -25) return false;
  const inputString = input.toLowerCase();
    
  if (encode) {
    let codeString = '';
    for(let index = 0; index < inputString.length; index++) {
      let currentLetter = inputString[index];
      if(currentLetter === ' ' || !alphabet.includes(currentLetter)) {
        codeString += currentLetter;
        continue;
      }
      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex + shift;
      if(newIndex > 25) newIndex -= 26;
      if(newIndex < 0) newIndex += 26;
      codeString += alphabet[newIndex];
    }
    return codeString;
  }

  if (!encode) {
    let decodeString = '';
    for(let index = 0; index < inputString.length; index++) {
      let currentLetter = inputString[index];
      if(currentLetter === ' ' || !alphabet.includes(currentLetter)) {
        decodeString += currentLetter;
        continue;
      }
      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex - shift;
      if(newIndex > 25) newIndex -= 26;
      if(newIndex < 0) newIndex += 26;
      decodeString += alphabet[newIndex];
    }
    return decodeString;
  }
}


module.exports = caesar;
