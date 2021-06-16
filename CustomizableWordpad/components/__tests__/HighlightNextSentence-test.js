import * as React from 'react';
import renderer from 'react-test-renderer';
import { StyleSheet, Button} from 'react-native';
import { Text, TextProps } from '../Themed';
import { HighlightNextSentence, FindNextSentenceIndices, findEndIndexOfPreviousSentence, FindIndicesOfNextSentence, CheckIfCharacterIsASeparator } from '../HighlightNextSentence';

it(`previous character is a period, HighlightNextSentence()
will highlight current sentence`, () => {
    const indicesOfNextSentence = {startIndex: 24, endIndex: 38};
    const sentence = "Hi, my name is Karthik. I like to read.";
    const actualAnswer = HighlightNextSentence(indicesOfNextSentence, sentence);
    const highlightedNextSentenceSubstring = "I like to read.";
    const expectedAnswer = (<Text style={styles.wordpad}>
        textInputByUser.substring(0, indicesOfNextSentence.startIndex) 
      {highlightText(highlightedNextSentenceSubstring)};
      </Text>);
    // expect(tree).toMatchSnapshot();
    expect(actualAnswer).toBe(expectedAnswer);
});

it(`given previous character is a period, FindIndicesOfNextSentenceOrSeparator()
will find the indices from current index to next period`, () => {
    const currentIndex = 25;
    const sentence = "Hello, my name is Karthik. I like to read.";
    const expectedAnswer = {startIndex: 26, endIndex: 41};
    const actualAnswer = FindIndicesOfNextSentence(currentIndex, sentence);
    expect(actualAnswer).toStrictEqual(expectedAnswer);
});

it(`given previous character is not a period, FindIndicesOfNextSentenceOrSeparator()
will find the indices from current index to next period`, () => {
    const currentIndex = 0;
    const sentence = "Hello, my name is Karthik. I like to read.";
    const expectedAnswer = {startIndex: 0, endIndex: 25};
    const actualAnswer = FindIndicesOfNextSentence(currentIndex, sentence);
    expect(actualAnswer).toStrictEqual(expectedAnswer);
});

it(`given character is a separator, checkIfCharacterIsASeparator() returns true`, () => {
  const inputCharacter = '.';
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

const highlightText = (sentence) =>
sentence.split(' ').map((word, i) => (
  <Text key={i}>
    <Text style={styles.highlightText}>{word} </Text>
  </Text>
))

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