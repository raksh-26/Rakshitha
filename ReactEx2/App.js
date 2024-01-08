/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, FlatList } from 'react-native';

const TextInputEx = () => {

  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState([]);
  
  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleSubmit = () => {
    if (text.trim() !== '') {
      setSubmittedText([...submittedText, text]);
      setText(''); 
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter Text:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange}
        value={text}
        placeholder="Type here..."
      />
      <Button title="Submit" onPress={handleSubmit} />
      <FlatList
        data={submittedText}
        renderItem={({ item }) => (
          <Text>{item}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    marginBottom: 10,    
  },
});

export default TextInputEx;
