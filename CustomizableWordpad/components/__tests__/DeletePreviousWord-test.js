import * as React from 'react';
import renderer from 'react-test-renderer';

import { DeletePreviousWord, CheckIfCharacterIsASeparator, FindIndicesOfPreviousWordOrSeparator, FindPreviousWordIndices } from '../DeletePreviousWord';

it(`given cursor is after a separator, deletePreviousWord() should delete the word 
before the separator`, () => {
    const sentence = 'Hello, my name is ';
    const currentIndex = 9;
    const expectedResult = 'Hello, name is ';
    const actualResult = DeletePreviousWord(currentIndex, sentence);
    expect(actualResult).toBe(expectedResult);
});

it(`given cursor is after a word, deletePreviousWord() should delete the previous
word`, () => {
    const sentence = 'Hello, my name is ';
    const currentIndex = 8;
    const expectedResult = 'Hello,  name is ';
    const actualResult = DeletePreviousWord(currentIndex, sentence);
    expect(actualResult).toBe(expectedResult);
});

it(`given cursor is after a separator, findPreviousWord() should find the indices
of the word and separators`, () => {
    const sentence = 'Hello, my name is ';
    const currentIndex = 9;
    const expectedIndices = {startIndex: 7, endIndex: 9};
    const actualIndices = FindPreviousWordIndices(currentIndex, sentence);
    expect(actualIndices).toStrictEqual(expectedIndices);
});

it(`given cursor is after a word, findPreviousWord() should find the indices
of the word`, () => {
    const sentence = 'Hello, my name is ';
    const currentIndex = 8;
    const expectedIndices = {startIndex: 7, endIndex: 8};
    const actualIndices = FindPreviousWordIndices(currentIndex, sentence);
    expect(actualIndices).toStrictEqual(expectedIndices);
});


it(`given cursor is after a word, deletePreviousWord() should delete the previous
word`, () => {
  const inputString = 'Hello, my name is';
  const expectedString = 'Hello, my name';
  const actualString = 'Hello, my name';
  expect(actualString).toBe(expectedString);
});


it(`given cursor is after a separator, FindIndicesOfPreviousWordOrSeparator() should find the indices of the previous word
or separator`, () => {
  const sentence = 'Hello, my name is ';
  const currentIndex = 6;
  const expectedIndices = {startIndex: 5, endIndex: 6};
  const actualIndices = FindIndicesOfPreviousWordOrSeparator(currentIndex, sentence);
  expect(actualIndices).toStrictEqual(expectedIndices);
});

it(`given cursor is after a word, FindIndicesOfPreviousWordOrSeparator() should find the indices of the previous word
or separator`, () => {
  const sentence = 'Hello, my name is ';
  const currentIndex = 4;
  const expectedIndices = {startIndex: 0, endIndex: 4};
  const actualIndices = FindIndicesOfPreviousWordOrSeparator(currentIndex, sentence);
  expect(actualIndices).toStrictEqual(expectedIndices);
});

it(`given character is a separator, checkIfCharacterIsASeparator() returns true`, () => {
  const inputCharacter = ' ';
  const actualAnswer = CheckIfCharacterIsASeparator(inputCharacter);
  expect(actualAnswer).toBeTruthy();
});

it(`given character is a letter, checkIfCharacterIsASeparator() returns true`, () => {
    const inputCharacter = 'a';
    const actualAnswer = CheckIfCharacterIsASeparator(inputCharacter);
    expect(actualAnswer).toBeFalsy();
});


it(`given character is a number, checkIfCharacterIsASeparator() returns true`, () => {
    const inputCharacter = '2';
    const actualAnswer = CheckIfCharacterIsASeparator(inputCharacter);
    expect(actualAnswer).toBeFalsy();
});  


