'use strict';

const normalAlphabet = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];


//* Helper function: check for duplicate letters in the given array.
function findDuplicates(codeString) {
  let codeArray = codeString.split('');
  return codeArray.filter((item, index, self) => self.indexOf(item) !== index);
}

function substitution(input, alphabet, encode = true) {
  if(!input || !alphabet || typeof alphabet !== 'string' || alphabet.length !== 26) return false;
  if(findDuplicates(alphabet).length > 0) return false;
  
  const codeAlphabet = alphabet.toLowerCase().split(''); 
  const inputArray = input.toLowerCase().split(''); 

  if(encode === true) {
    let code = '';
    inputArray.forEach(letter => {
      if (letter === ' ') return code += letter; 
      let foundIndex = normalAlphabet.indexOf(letter);
      code += codeAlphabet[foundIndex];
    });
    return code;
  }

  if(encode === false) {
    let decode = '';
    inputArray.forEach(letter => {
      if (letter === ' ') return decode += letter;
      let foundIndex = codeAlphabet.indexOf(letter);
      decode += normalAlphabet[foundIndex];
    });
    return decode;
  }
}

module.exports = substitution;
