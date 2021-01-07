'use strict';

const polybius = require('../src/polybius.js');
const expect = require('chai').expect;

describe('polybius', () => {
  it('should return false if no message to encode/decode is given', () => {
    let encode = true;
    const actual = polybius('', encode);
    expect(actual).to.be.false;
  });

  it('should return (i/j) for 42 when decoding', () => {
    let encode = false;
    const expected = '(i/j)';
    const actual = polybius('42', encode);
    expect(actual).to.equal(expected);
  });

  it('should retain spaces when encoding', () => {
    let encode = true;
    const expected = '44324234 4234 11 345311315141 344424423322';
    const actual = polybius('This is a spaced string', encode);
    expect(actual).to.equal(expected);
  });

  it('when decoding, if the number of characters in the string excluding spaces should be even', () => {
    let encode = false;
    const actual = polybius('4432423352125413 443', encode);
    expect(actual).to.be.false;
  });

  it('should return a correct decoded answer when encode === false', () => {
    let encode = false;
    const expected = 'hello world';
    const actual = polybius('3251131343 2543241341', encode);
    expect(actual).to.equal(expected);
  });

  it('should return a correct encoded answer when encode === true', () => {
    let encode = true;
    const expected = '3251131343 2543241341';
    const actual = polybius('hello world', encode);
    expect(actual).to.equal(expected);
  });

  it('encoded message should still be a string', () => {
    let encode = true;
    const actual = polybius('hello', encode);
    expect(actual).to.be.a('string');
  });

});