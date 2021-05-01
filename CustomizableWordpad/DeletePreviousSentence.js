import React from "react";
import { View, Text } from "react-native";



//if cursor is right after a period, then the
//index of the start and end of those characters that exist between the previous period
//and the previous previous period will be found
//After the index of the start and end of those characters is found, 
//those characters will be deleted from the input text string

//if cursor is not right after a period, then 
//the location of the previous period will be found, 
//and the index of the start and end of those characters that exist between the previous period
//and the previous previous period will be found
//After the index of the start and end of those characters is found, 
//those characters will be deleted from the input text string

const DeletePreviousSentence = () => {

}

export default DeletePreviousSentence;