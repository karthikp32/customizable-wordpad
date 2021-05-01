import React from "react";
import { View, Text } from "react-native";

//hops back one word from where cursor is located
//if cursor is in front of a space or other separator,
//then cursor moves to end of previous word
//else cursor stays at end of word

//To hop back one word, the index of the start of the previous word
//must be found by finding the amount of characters that must be traveled through
//until the next space or separator is found
//then the cursor will move to that index

const HopBackOneWord = () => {

}

export default HopBackOneWord;