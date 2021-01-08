'use strict';
const originAlphabet = [
  'a', 'b', 'c', 'd', 'e',
  'f', 'g', 'h', '(i/j)',
  'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y',
  'z', ' '
];

const codeAlphabet = [
  '11', '21', '31', '41', '51',
  '12', '22', '32', '42', '52',
  '13', '23', '33', '43', '53',
  '14', '24', '34', '44', '54',
  '15', '25', '35', '45', '55',
  '16'
];

//* Helper function: check the length of input string and verify it is an even number
function checkLength(input) {
  return (input.replace(/\s/g,'')).length % 2;
}

//* Helper function: replaces spaces in a string with a 2 digit number, splits a string into pairs
function inputModifier(input) {
  return input.replace(/\s/g,16).match(/\d{1,2}/g);
}

function polybius(input, encode = true) {
  if(!input) return false;
  if(encode) {
    let encode = '';
    const stringArray = input.toLowerCase().split('');
    stringArray.forEach(letter => {
      if(letter === 'i' || letter === 'j') return encode += '42'; //handling the '(i/j)' codes
      let foundIndex = originAlphabet.indexOf(letter);
      encode += codeAlphabet[foundIndex];
    });
    return encode.replace(/16/g,' '); //changing '16' back into a space
  }
  if(!encode) {
    if(checkLength(input) === 1) return false;
    let decode = '';
    const stringArray = inputModifier(input);
    stringArray.forEach(code => {
      let foundIndex = codeAlphabet.indexOf(code);
      decode += originAlphabet[foundIndex];
    });
    return decode;
  }
}

module.exports = polybius;
