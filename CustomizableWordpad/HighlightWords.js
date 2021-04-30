import Highlighter from 'react-native-highlight-words';

const HighlightWords = (selectedWords, inputText) => <Highlighter
    //pass in selected words that the user selected with their cursor
    //pass in all of the text input by user
  highlightStyle={{backgroundColor: 'yellow'}}
  searchWords={[selectedWords]}
  searchWords={['like']}
  textToHighlight='I like basketball.'
  //textToHighlight=inputText
/>

export default HighlightWords;