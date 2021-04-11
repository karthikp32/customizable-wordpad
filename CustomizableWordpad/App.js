import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


const App = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10, alignContent: 'center'}}>
      <TextInput
        style={{height: 700, width: 700, fontSize: 42, alignContent: 'center'}}
        placeholder="Start Typing!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {/* {text.split(' ').map((word) => word && '🍕').join(' ')} */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;