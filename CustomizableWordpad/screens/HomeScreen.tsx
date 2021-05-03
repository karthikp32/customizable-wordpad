import React, {useState} from 'react';
import { StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import DeletePreviousWordButton from '../components/DeletePreviousWordButton';
import { DeletePreviousWord, FindPreviousWordIndices } from '../components/DeletePreviousWord';
import {DeletePreviousSentence, FindPreviousSentenceIndices} from '../components/DeletePreviousSentence';
import { Text, View } from '../components/Themed';
import {FindIndicesOfNextSentence, HighlightNextSentence} from '../components/HighlightNextSentence';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';

let localIndexOfCursor = { start: 0, end: 0};
const localTextInputByUser = " ";


export default function HomeScreen(props: any) {

  const [indexOfCursor, setIndexOfCursor] = useState(0);
  const [textInputByUser, setTextInputByUser] = useState(" ");
  const [previousWordIndices, setPreviousWordIndices] = useState({
    selection: {
        start: 0,
        end: 0
    }
  });
  let indicesOfNextSentence = {startIndex: 0, endIndex: 0};
  let isHighlightNextSentencePressed = false;
  

  function findIndexOfCursor(event: any) {
    localIndexOfCursor = event.nativeEvent.selection;
    setIndexOfCursor(localIndexOfCursor.start);
    let localTextInputByUser = event.nativeEvent.text;
    setTextInputByUser(localTextInputByUser);
  }

  const deletePreviousWordPressHandler = () => {
    DeletePreviousWord(indexOfCursor, textInputByUser, setTextInputByUser);
    }  

  const deletePreviousSentencePressHandler = () => {
    DeletePreviousSentence(indexOfCursor, textInputByUser, setTextInputByUser);
  }  
  
  const highlightNextSentencePressHandler = () => {
    indicesOfNextSentence = FindIndicesOfNextSentence(indexOfCursor, textInputByUser);
    isHighlightNextSentencePressed = true;
  }
  // const hopBackOneWordPressHandler = () => {
  //   setPreviousWordIndices(FindPreviousWordIndices(indexOfCursor, textInputByUser));
  //   const inputRef = React.createRef();
  //   inputRef.setNativeProps({selection: previousWordIndices.selection});
  //   }  

  
  const displayText = (isHighlightNextSentencePressed: boolean) => {
    if(isHighlightNextSentencePressed) {
      HighlightNextSentence(indicesOfNextSentence, textInputByUser);
      isHighlightNextSentencePressed = false;
    }
    else {
      return (<Text
        style={styles.wordpad}>{textInputByUser}</Text>);
    }
  }


   
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editor</Text>
      {/* <TextInput placeholder="Start typing..."
      style={styles.wordpad} multiline={true} 
      onSelectionChange={(event) => {findIndexOfCursor(event)}} onChangeText={text => setTextInputByUser(text)}></TextInput> */}
      <TextInput placeholder="Start typing..."
      style={styles.wordpad} multiline={true} 
      onSelectionChange={(event) => {findIndexOfCursor(event)}}></TextInput>
      {/* <DeletePreviousWordButton locationOfCursor={indexOfCursor} textInput={textInputByUser} setTextInput={setTextInputByUser}>
      </DeletePreviousWordButton> */}
      <View>  
        <Button
            onPress={deletePreviousWordPressHandler}
            title="Delete Previous Word"
            color="#808080"
            accessibilityLabel="Learn more about thisgray button"
        />
      </View>
      <View>  
        <Button
            onPress={deletePreviousSentencePressHandler}
            title="Delete Previous Sentence"
            color="#808080"
            accessibilityLabel="Learn more about this gray button"
        />
      </View>
      <View>  
        <Button
            onPress={highlightNextSentencePressHandler}
            title="Highlight Next Sentence"
            color="#808080"
            accessibilityLabel="Learn more about this gray button"
        />
      </View>
      <Text style={styles.title}>Display</Text>
      {displayText(isHighlightNextSentencePressed)}
    </View>
    
  );
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
