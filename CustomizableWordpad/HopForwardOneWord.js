import React from "react";
import { View, Text } from "react-native";

//hops back one word from where cursor is located
//if cursor is not in front of a word,
//then cursor moves right before the start of the next word
//else cursor stays at start of word

//To hop forward one word, the index of the start of the next word
//must be found by finding the amount of characters that must be traveled through
//until the end of the next space or separator
//then the cursor will move to that index

const HopBackOneWord = () => {

}

export default HopBackOneWord;