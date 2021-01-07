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

  it('should wrap around to the front of the alphabet if the letter is shifted past the end of the alphabet', () => {
    let encode = true;
    const expected = 'Cheud';
    const actual = caesar('Zebra', 3, encode);
    expect(actual).to.equal(expected);
  });

  it('should wrap around to the end of the alphabet if the letter is shifted past the beginning of the alphabet', () => {
    let encode = true;
    const expected = 'Xmmib';
    const actual = caesar('Apple', -3, encode);
    expect(actual).to.equal(expected);
  });

  it('should return a correctly encoded answer when encode === true', () => {
    let encode = true;
    const expected = 'Uijt jt b tusjoh';
    const actual = caesar('This is a string', 1, encode);
    expect(actual).to.equal(expected);
  });

  it('should return a correctly decoded answer when decode === false', () => {
    let encode = false;
    const expected = 'This is a string';
    const actual = caesar('Uijt jt b tusjoh', 1, encode);
    expect(actual).to.equal(expected);
  });

});