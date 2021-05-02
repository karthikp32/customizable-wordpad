import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import { DeletePreviousWord } from './DeletePreviousWord';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function DeletePreviousWordButton(props: any){
    
  return (
    <View>  
        <Button
            onPress={() => {
                console.log(props.locationOfCursor);
                console.log(props.textInput);
                DeletePreviousWord(props.locationOfCursor, props.textInput)}}
            title="Delete Previous Word"
            color="#808080"
            accessibilityLabel="Learn more about this blue button"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  button: {
    textAlign: 'center',
    borderWidth: 5,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
  }
});
