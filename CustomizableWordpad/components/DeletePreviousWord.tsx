import * as React from 'react';

import { Text, TextProps } from './Themed';

const separatorString = "\n\t\r,. "

export function DeletePreviousWord(currentIndex: number, sentence: string): string {
  let previousWordIndices = FindPreviousWordIndices(currentIndex, sentence);
  // return sentence.replace(previousWord, '');
  let previousWordSubstring = sentence.substring(previousWordIndices.startIndex, previousWordIndices.endIndex+1);
  return sentence.replace(previousWordSubstring, '');
}

export function FindPreviousWordIndices(currentIndex: number, sentence: string): any {
  let i = currentIndex;
  let indicesToDeleteWord = {startIndex: 0, endIndex: 0};
  if (!CheckIfCharacterIsASeparator(sentence.charAt(i))) {
    indicesToDeleteWord = FindIndicesOfPreviousWordOrSeparator(currentIndex, sentence);
  }
  else { 
    const separatorString = FindIndicesOfPreviousWordOrSeparator(currentIndex, sentence);
    let endIndexOfWord = separatorString.startIndex - 1;
    const word = FindIndicesOfPreviousWordOrSeparator(endIndexOfWord, sentence);
    indicesToDeleteWord.startIndex = word.startIndex;
    indicesToDeleteWord.endIndex = separatorString.endIndex;
  }
  return indicesToDeleteWord;
}

export function findEndIndexOfPreviousWord(word: string): number {
  return word.length - 1;
}

export function FindIndicesOfPreviousWordOrSeparator(currentIndex: number, sentence: string){
  let i = currentIndex;
  if (!CheckIfCharacterIsASeparator(sentence.charAt(i))) {
    while(i>=0 && !CheckIfCharacterIsASeparator(sentence.charAt(i-1))){
      i--;
    }
  }
  if (CheckIfCharacterIsASeparator(sentence.charAt(i))) {
    while(i>=0 && CheckIfCharacterIsASeparator(sentence.charAt(i-1))){
      i--;
    }
  }
  let indices = {startIndex: i, endIndex: currentIndex};
  return indices;
}

export function CheckIfCharacterIsASeparator(character: string): boolean {
  return separatorString.indexOf(character) > -1;
}