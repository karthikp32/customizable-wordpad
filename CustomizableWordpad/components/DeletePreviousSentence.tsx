import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { View, Text, TextProps } from './Themed';

const separatorString = ".";

export function DeletePreviousSentence(currentIndex: number, sentence: string, setTextInput: any): string {
  console.log(currentIndex);
  console.log(sentence);
  let previousWordIndices = FindPreviousSentenceIndices(currentIndex, sentence);
  let previousWordSubstring = sentence.substring(previousWordIndices.startIndex, previousWordIndices.endIndex+1);
  sentence = sentence.replace(previousWordSubstring, '');
  setTextInput(sentence);
  console.log(sentence);
  return sentence;
}

export function FindPreviousSentenceIndices(currentIndex: number, sentence: string): any {
  let i = currentIndex;
  let indicesToDeleteWord = {startIndex: 0, endIndex: 0};
  if (!CheckIfCharacterIsASeparator(sentence.charAt(i))) {
    indicesToDeleteWord = FindIndicesOfPreviousSentenceOrSeparator(currentIndex, sentence);
  }
  else { 
    const separatorString = FindIndicesOfPreviousSentenceOrSeparator(currentIndex, sentence);
    let endIndexOfWord = separatorString.startIndex - 1;
    const word = FindIndicesOfPreviousSentenceOrSeparator(endIndexOfWord, sentence);
    indicesToDeleteWord.startIndex = word.startIndex;
    indicesToDeleteWord.endIndex = separatorString.endIndex;
  }
  return indicesToDeleteWord;
}

export function findEndIndexOfPreviousSentence(word: string): number {
  return word.length - 1;
}

export function FindIndicesOfPreviousSentenceOrSeparator(currentIndex: number, sentence: string){
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