import React from "react";
import { View, Text } from "react-native";



//deletes previous word from where cursor is located
//if cursor is in front of a space or other separator,
//then cursor moves to end of previous word
//else cursor stays at end of word

//To delete the previous word, the length of the previous word
//must be found by finding the amount of characters that must traveled through
//until the next space or separator is found
//then that characters equaling that amount will be deleted from the string
//that represents the text input by the user

const DeletePreviousWord = () => {

}

export default DeletePreviousWord;