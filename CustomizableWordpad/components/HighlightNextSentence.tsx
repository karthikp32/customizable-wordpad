import * as React from 'react';
import { StyleSheet, Button} from 'react-native';
import { Text, TextProps } from './Themed';


const separatorString = ".";

export function HighlightNextSentence(indicesOfNextSentence: any, textInputByUser: string): any {
  let highlightedNextSentenceSubstring = "";
  if (indicesOfNextSentence.startIndex === 0) {
    highlightedNextSentenceSubstring = textInputByUser.substring(indicesOfNextSentence.startIndex, indicesOfNextSentence.endIndex + 1);
    console.log(highlightedNextSentenceSubstring);
    return (<Text style={styles.wordpad}>
      {highlightText(highlightedNextSentenceSubstring)} textInputByUser.substring(indicesOfNextSentence.endIndex + 1)
    </Text>);

  }
  else if(indicesOfNextSentence.startIndex > 0 && indicesOfNextSentence.endIndex < textInputByUser.length){
    highlightedNextSentenceSubstring = textInputByUser.substring(indicesOfNextSentence.startIndex, indicesOfNextSentence.endIndex + 1);
    console.log(highlightedNextSentenceSubstring);
    return (<Text style={styles.wordpad}>
      textInputByUser.substring(0, indicesOfNextSentence.startIndex) 
    {highlightText(highlightedNextSentenceSubstring)} textInputByUser.substring(indicesOfNextSentence.endIndex+1, textInputByUser.length);
    </Text>);
  }
  else if(indicesOfNextSentence.startIndex > 0 && indicesOfNextSentence.endIndex === textInputByUser.length){
    highlightedNextSentenceSubstring = textInputByUser.substring(indicesOfNextSentence.startIndex, indicesOfNextSentence.endIndex + 1);
    console.log(highlightedNextSentenceSubstring);
    return (<Text style={styles.wordpad}>
      textInputByUser.substring(0, indicesOfNextSentence.startIndex) 
    {highlightText(highlightedNextSentenceSubstring)};
    </Text>);
  }
}

const highlightText = (sentence: string) =>
sentence.split(' ').map((word, i) => (
  <Text key={i}>
    <Text style={styles.highlightText}>{word} </Text>
  </Text>
))


export function FindIndicesOfNextSentence(currentIndex: number, sentence: string){
  let i = currentIndex;
  let indices = {startIndex: 0, endIndex: 0};
  if (!CheckIfCharacterIsASeparator(sentence.charAt(i))) {
    while(i<sentence.length && !CheckIfCharacterIsASeparator(sentence.charAt(i+1))){
      i++;
    }
    indices = {startIndex: currentIndex,  endIndex: i+1};
  }
  if (CheckIfCharacterIsASeparator(sentence.charAt(i))) {
    i++;
    while(i<sentence.length && !CheckIfCharacterIsASeparator(sentence.charAt(i+1))){
      i++;
    }
    indices = {startIndex: currentIndex+1,  endIndex: i+1};
  }

  return indices;
}

export function CheckIfCharacterIsASeparator(character: string): boolean {
  return separatorString.indexOf(character) > -1;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordpad: {
    width: '80%',
    height: '80%',
    margin: 12,
    borderWidth: 1,
    color: 'black',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  highlightText:{
    backgroundColor: 'yellow',
    fontSize: 26,
    textAlign: 'center'
  }
})