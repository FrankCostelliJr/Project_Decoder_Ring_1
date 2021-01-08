'use strict';

const caesar = require('../src/caesar.js');
const expect = require('chai').expect;

describe('caesar', () => {
  it('should return false if not input is given', () => {
    let encode = true;
    const actual = caesar('', 5, encode);
    expect(actual).to.be.false;
  });

  it('should return false if no shift value is passed in', () => {
    let encode = true;
    const actual = caesar('This is a string', '', encode);
    expect(actual).to.be.false;
  });

  it('should return false if the shift value is 0', () => {
    let encode = true;
    const actual = caesar('This is a string', 0, encode);
    expect(actual).to.be.false;
  });

  it('should return false if the shift value is greater than 25', () => {
    let encode = true;
    const actual = caesar('This is a string', 28, encode);
    expect(actual).to.be.false;
  });

  it('should return false if the shift value is less than -25', () => {
    let encode = true;
    const actual = caesar('This is a string', -28, encode);
    expect(actual).to.be.false;
  });

  it('should maintain spaces throughout when encoding', () => {
    let encode = true;
    const expected = 'qefp fp x pqofkd tfqe pmxzbp';
    const actual = caesar('this is a string with spaces', -3, encode);
    expect(actual).to.equal(expected);
  });

  it('should maintain spaces throughout when decoding', () => {
    let encode = false;
    const expected = 'this is a string with spaces';
    const actual = caesar('qefp fp x pqofkd tfqe pmxzbp', -3, encode);
    expect(actual).to.equal(expected);
  });

  it('should maintain any special characters given when encoding', () => {
    let encode = true;
    const expected = 'qe!p pqo#kd ex$ $mbzfxi ze@oxzqbop';
    const actual = caesar('th!s str#ng ha$ $pecial ch@racters', -3, encode);
    expect(actual).to.equal(expected);
  });

  it('should maintain any special characters given when decoding', () => {
    let encode = false;
    const expected = 'th!s str#ng ha$ $pecial ch@racters';
    const actual = caesar('qe!p pqo#kd ex$ $mbzfxi ze@oxzqbop', -3, encode);
    expect(actual).to.equal(expected);
  });

  it('should wrap around to the front of the alphabet if the letter is shifted past the end of the alphabet', () => {
    let encode = true;
    const expected = 'cheud';
    const actual = caesar('Zebra', 3, encode);
    expect(actual).to.equal(expected);
  });

  it('should wrap around to the end of the alphabet if the letter is shifted past the beginning of the alphabet', () => {
    let encode = true;
    const expected = 'xmmib';
    const actual = caesar('Apple', -3, encode);
    expect(actual).to.equal(expected);
  });

  it('should return a correctly encoded answer when encode === true', () => {
    let encode = true;
    const expected = 'uijt jt b tusjoh';
    const actual = caesar('This is a string', 1, encode);
    expect(actual).to.equal(expected);
  });

  it('should return a correctly decoded answer when decode === false', () => {
    let encode = false;
    const expected = 'this is a string';
    const actual = caesar('uijt jt b tusjoh', 1, encode);
    expect(actual).to.equal(expected);
  });

});