// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { Keyboard, StyleSheet, Text, View, TextInput } from 'react-native';


// const App = () => {
//   const [text, setText] = useState('');
//   return (
//     <View style={{padding: 10, alignContent: 'center'}}>
//       <TextInput
//         style={{height: 700, width: 700, fontSize: 42, alignContent: 'center'}}
//         placeholder="Start Typing!"
//         onChangeText={text => setText(text)}
//         defaultValue={text}
//       />
//       <Text style={{padding: 10, fontSize: 42}}>
//         {/* {text.split(' ').map((word) => word && '🍕').join(' ')} */}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;

import React, { useState, useEffect } from "react";
import { Keyboard, Text, TextInput, StyleSheet, View } from "react-native";

const Example = () => {
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const _keyboardDidShow = () => setKeyboardStatus("Keyboard Shown");
  const _keyboardDidHide = () => setKeyboardStatus("Keyboard Hidden");

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder='Click here…'
        onSubmitEditing={Keyboard.dismiss}
      />
      <Text style={style.status}>{keyboardStatus}</Text>
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

export default Example;