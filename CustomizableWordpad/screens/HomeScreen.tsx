import React, {useState} from 'react';
import { StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import DeletePreviousWordButton from '../components/DeletePreviousWordButton';
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
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wordpad</Text>
      <TextInput style={styles.wordpad} multiline={true} 
      onSelectionChange={(event) => {findIndexOfCursor(event)}}></TextInput>
      <DeletePreviousWordButton locationOfCursor={indexOfCursor} textInput={textInputByUser}>
      </DeletePreviousWordButton>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
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
