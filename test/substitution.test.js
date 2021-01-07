'use strict';

const substitution = require('../src/substitution.js');
const expect = require('chai').expect;

const codeAlphabet = 'poiuytrewqasdfghjklzxcvbnm';

describe('substitution', () => {
  it('should return false if the alphabet argument is not a string', () => {
    let encode = true;
    const actual = substitution('Thinkful', 123456, encode);
    expect(actual).to.be.false;
  });

  it('should return false if the input argument is not a string', () => {
    let encode = true;
    const actual = substitution(123456, '123456', encode);
    expect(actual).to.be.false;
  });

  it('should return false if no message to encode/decode is given', () => {
    let encode = true;
    const actual = substitution('', codeAlphabet, encode);
    expect(actual).to.be.false;
  });

  it('should return false if no alphabet is given', () => {
    let encode = true;
    const actual = substitution('Thinkful', encode);
    expect(actual).to.be.false;
  });

  it('should return false if the given alphabet is less than 26 characters long', () => {
    let encode = true;
    const shortAlphabet = 'abc';
    const actual = substitution('Thinkful', shortAlphabet, encode);
    expect(actual).to.be.false;
  });

  it('should return false if the given alphabet is greater than 26 characters long', () => {
    let encode = true;
    const shortAlphabet = 'abcdefghijklmopqrstuvwxyzzzzzzzz';
    const actual = substitution('Thinkful', shortAlphabet, encode);
    expect(actual).to.be.false;
  });

  it('should return false if there are any duplicate characters in the given alphabet', () => {
    const badCodeAlphabet = 'ppooiuytrewqasdfghjklmnbvc';
    let encode = true;
    const actual = substitution('Thinkful', badCodeAlphabet, encode);
    expect(actual).to.be.false;
  });

  it('should maintain all spaces properly when encoding', () => {
    let encode = true;
    const expected = 'w pd p lzkwfr';
    const actual = substitution('I am a string', codeAlphabet, encode);
    expect(actual).to.equal(expected);
  });

  it('should maintain all spaces properly when decoding', () => {
    let encode = false;
    const expected = 'i am a string';
    const actual = substitution('W pd p lzkwfr', codeAlphabet, encode);
    expect(actual).to.equal(expected);
  });

  it('should correctly encode the input phrase when encode === true', () => {
    let encode = true;
    const expected = 'zewfatxs';
    const actual = substitution('Thinkful', codeAlphabet, encode);
    expect(actual).to.equal(expected);
  });

  it('should correctly decode the input phrase when encode === false', () => {
    let encode = false;
    const expected = 'thinkful';
    const actual = substitution('Zewfatxs', codeAlphabet, encode);
    expect(actual).to.equal(expected);
  });

});
