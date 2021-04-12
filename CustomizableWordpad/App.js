import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button } from 'react-native';


const App = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10, alignContent: 'center'}}>
      <TextInput
        style={{height: 700, width: 1400, fontSize: 42, alignContent: 'center'}}
        placeholder="Start Typing!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {/* {text.split(' ').map((word) => word && '🍕').join(' ')} */}
      </Text>
      <Button
        title="Add Custom Key"
        color="#0000ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>

  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4
  },
  status: {
    padding: 10,
    textAlign: "center"
  }
});

export default App;
