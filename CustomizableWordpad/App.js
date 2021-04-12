import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Customizable Wordpad' }}
      />
      <Stack.Screen name="Custom Keys" component={CustomKeysScreen} />
      <Stack.Screen name="Delete Previous Word" component={DeletePreviousWordScreen} />
      <Stack.Screen name="Home Screen After Adding Custom Button" component={HomeScreenAfterAddingCustomButton} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.paragraph}>
      <TextInput
        style={{height: 700, width: 2000, fontSize: 36}}
        placeholder="Welcome to the Customizable Wordpad!"
        backgroundColor="white"
        alignItems="center"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Button
      title="Add Custom Keys"
      color="#0040ff"
      onPress={() =>
        navigation.navigate('Custom Keys', {})
      }
      />
    </View>

  );
};

const CustomKeysScreen = ({ navigation, route }) => {
  return (
    <View>
        <Text style={styles.title}>CUSTOM KEYS</Text>
    <Button
    title="Delete Previous Word"
    color="#0040ff"
    onPress={() =>
      navigation.navigate('Delete Previous Word', {})
    }
    />
    </View>
    );
};

const DeletePreviousWordScreen = ({ navigation, route }) => {
  return (
    <View>
        <Text style={styles.title}>SUMMARY OF DELETE PREVIOUS WORD: </Text>
        <Text style={styles.paragraph}>Delete previous word before cursor.</Text>
        <Button
          title="Install"
          color="#008200"
          onPress={() =>
            navigation.navigate('Home Screen After Adding Custom Button', {})
          }
          />
    </View>
    );
}; 

const HomeScreenAfterAddingCustomButton = ({ navigation }) => {
  return (
    <View>
      <TextInput
        style={{height: 700, width: 2000}}
        placeholder="Start Typing!"
        backgroundColor="white"
        fontSize="36"
        // onChangeText={text => setText(text)}
        // defaultValue={text}
      />
      <Button
      title="Delete Previous Word"
      color="#00ff40"
      onPress={() =>
        {}
      }
      />
      <Button
      title="Add Custom Keys"
      color="#0040ff"
      onPress={() =>
        navigation.navigate('Custom Keys', {})
      }
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36,
    fontSize: 36
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4
  },
  status: {
    padding: 10,
    textAlign: "center"
  },
  heading: {
    fontSize: 48
  },
  paragraph: {
    color: "black",
    // textDecorationColor: "black",
    // textShadowColor: "black",
    // textShadowRadius: 1,
    margin: 12,
    fontSize: 48
  },
  platformContainer: {
    marginTop: 8,
    borderTopWidth: 1
  },
  platformContainerTitle: {
    marginTop: 8
  },
  title: {
    fontWeight: "bold",
    marginVertical: 4,
    fontSize: 64,
    alignItems: "center",
    padding: 50,
    leftMargin: 50
  }
});

export default App;
