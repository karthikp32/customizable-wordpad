import React, {useState} from 'react';
import { StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import DeletePreviousWordButton from '../components/DeletePreviousWordButton';
import { DeletePreviousWord, FindPreviousWordIndices } from '../components/DeletePreviousWord';
import { Text, View } from '../components/Themed';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';

let localIndexOfCursor = { start: 0, end: 0};
const localTextInputByUser = " ";


export default function HomeScreen(props: any) {

  const [indexOfCursor, setIndexOfCursor] = useState(0);
  const [textInputByUser, setTextInputByUser] = useState(" ");

  function findIndexOfCursor(event: any) {
    localIndexOfCursor = event.nativeEvent.selection;
    console.log(localIndexOfCursor);
    setIndexOfCursor(localIndexOfCursor.start);
    let localTextInputByUser = event.nativeEvent.text;
    setTextInputByUser(localTextInputByUser);
    console.log(localTextInputByUser);
  }

  const pressHandler = () => {
    console.log(indexOfCursor);
    console.log(textInputByUser);
    // DeletePreviousWord(props.locationOfCursor, props.textInput, props.setTextInput)
    let previousWordIndices = FindPreviousWordIndices(indexOfCursor, textInputByUser);
    let previousWordSubstring = textInputByUser.substring(previousWordIndices.startIndex, previousWordIndices.endIndex+1);
    setTextInputByUser(textInputByUser.replace(previousWordSubstring, ''));
    // console.log(modifiedSentence);
    console.log(textInputByUser);
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
            onPress={pressHandler}
            title="Delete Previous Word"
            color="#808080"
            accessibilityLabel="Learn more about this blue button"
        />
      </View>
      <Text style={styles.title}>Display</Text>
      <Text
      style={styles.wordpad} >{textInputByUser}</Text>
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
});
