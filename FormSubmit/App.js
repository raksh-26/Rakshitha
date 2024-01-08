import React, { useState, useEffect } from 'react';
import { View, Text,Image, TextInput, TouchableOpacity,ActivityIndicator, Alert, StyleSheet } from 'react-native';
import Voice from '@react-native-voice/voice';
//import { AlanView } from '@alan-ai/alan-sdk-react-native';
 
const VoiceForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [voiceResults, setVoiceResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [highlightedField, setHighlightedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
 
  // useEffect(() => {
  //   if (voiceResults.includes('submit')) {
  //     submitForm();
  //   }
  // }, [voiceResults]);
 
  // Voice.onSpeechEnd = (e) => {
  //   setLoading(false)
  //   console.log("stop handler", e)
  // }
 
  // Voice.onSpeechResults = (e) => {
  //   const spokenText = e.value[0];
  //   setVoiceResults([spokenText]);
 
  //   if (spokenText.includes('name')) {
  //     setName(spokenText.replace('name', '').trim());
  //   } else if (spokenText.includes('email')) {
  //     setEmail(spokenText.replace('email', '').trim());
  //   } else if (spokenText.includes('phone') || spokenText.includes('number')) {
  //     setPhoneNumber(spokenText.replace(/phone|number/g, '').trim());
  //   } else if (spokenText.includes('address')) {
  //     setAddress(spokenText.replace('address', '').trim());
  //   }
  // };
 
  useEffect(() => {
    Voice.onSpeechResults = (e) => {
      const spokenText = e.value[0];
      setVoiceResults([spokenText]);
      processVoiceInput(spokenText);
    };
 
    Voice.onSpeechEnd = (e) => {
      setLoading(false);
      stopVoiceRecognition();
      console.log("stop handler", e)
    }
    
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
 
 
  // Voice.onSpeechEnd = (e) => {
  //   setLoading(false);
  //   stopVoiceRecognition();
  //   console.log("stop handler", e)
  // }
 
  const processVoiceInput = (spokenText) => {
    if (spokenText) {
      const lowerCaseText = spokenText.toLowerCase();
 
      if (lowerCaseText.includes('name')) {
        setName(extractValue(lowerCaseText, 'name'));
        setHighlightedField('name');
      } else if (lowerCaseText.includes('email')) {
        setEmail(extractValue(lowerCaseText, 'email').replace(/\s/g,''));
        setHighlightedField('email');
      } else if (lowerCaseText.includes('phone') || lowerCaseText.includes('number')) {
        setPhoneNumber(extractValue(lowerCaseText, 'phone') || extractValue(lowerCaseText, 'number'));
        setHighlightedField('phoneNumber');
      } else if (lowerCaseText.includes('address')) {
        setAddress(extractValue(lowerCaseText, 'address'));
        setHighlightedField('address');
      } else if (lowerCaseText.includes('submit')) {
        submitForm();
        setHighlightedField('submit');
      }
    }
  };
 
  const extractValue = (text, keyword) => {
    const keywordIndex = text.indexOf(keyword);
    if (keywordIndex !== -1) {
      return text.substring(keywordIndex + keyword.length).trim();
    }
    return '';
  };
 
  const startVoiceRecognition = async () => {
    setLoading(true)
    try {
      await Voice.start('en-US');
    } catch (error) {
      console.log("error raised", error)
    }
  };
 
  const stopVoiceRecognition = async () => {
    setLoading(false)
    try {
      await Voice.stop();
    } catch (error) {
      console.log("error raised", error)
    }
  };
 
  const onFocusChange = (field) => {
    setHighlightedField(field);
  };
 
  const onBlurChange = () => {
    setHighlightedField(null);
  };
 
  const submitForm = () => {
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phoneNumber}, Address: ${address}`);
    //setFormSubmitted(true);
    //Alert.alert('Success', 'Form submitted successfully!', [{text:'OK'}]);
    // setTimeout(() => {
    //   setFormSubmitted(false);
    // },2000);
 
    setName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Form Submission</Text>
      <Text style={{ fontWeight: highlightedField === 'name' ? 'semibold' : 'normal',
      fontSize: highlightedField === 'name' ? 18 : 17,
    marginBottom: 4,
    color: highlightedField === 'name' ? 'black' : 'gray' }}>Enter your name:</Text>
      <TextInput
        value={name}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        onFocus={() => onFocusChange('name')}
        onBlur={onBlurChange}
        style={{ height: 40,
          borderWidth: highlightedField === 'name' ? 2 : 1,
          fontSize: 16,
          marginBottom: 12,
          paddingHorizontal: 8,
          borderColor: highlightedField === 'name' ? 'blue' : 'gray'}}
      />
      <Text style={{ fontSize: highlightedField === 'email' ? 18 : 17,
      fontWeight: highlightedField === 'email' ? 'semibold' : 'normal',
    marginBottom: 4,
    fontSize : 16,
    color: highlightedField === 'email' ? 'black' : 'gray' }}>Enter your email:</Text>
      <TextInput
        value={email}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        onFocus={() => onFocusChange('email')}
        onBlur={onBlurChange}
        style={{ height: 40,
          borderWidth: highlightedField === 'email' ? 2 : 1,
          marginBottom: 12,
          fontSize: 14,
          paddingHorizontal: 8,
          borderColor: highlightedField === 'email' ? 'blue' : 'gray'}}
      />
      <Text style={{ fontSize: highlightedField === 'phoneNumber' ? 18 : 17,
      fontWeight: highlightedField === 'phoneNumber' ? 'semibold' : 'normal',
    marginBottom: 4,
    color: highlightedField === 'phoneNumber' ? 'black' : 'gray' }}>Enter your phone number:</Text>
      <TextInput
        value={phoneNumber}
        placeholder="Phone Number"
        onChangeText={(text) => setPhoneNumber(text)}
        onFocus={() => onFocusChange('phoneNumber')}
        onBlur={onBlurChange}
        style={{ height: 40,
          borderWidth: highlightedField === 'phoneNumber' ? 2 : 1,
          marginBottom: 12,
          fontSize: 14,
          paddingHorizontal: 8,
          borderColor: highlightedField === 'phoneNumber' ? 'blue' : 'gray'}}
      />
      <Text style={{ fontSize: highlightedField === 'address' ? 18 : 17,
      fontWeight: highlightedField === 'address' ? 'semibold' : 'normal',
    marginBottom: 4,
    color: highlightedField === 'address' ? 'black' : 'gray' }}>Enter your address:</Text>
      <TextInput
        value={address}
        placeholder="Address"
        onChangeText={(text) => setAddress(text)}
        onFocus={() => onFocusChange('address')}
        onBlur={onBlurChange}
        style={{ height: 40,
          borderWidth: highlightedField === 'address' ? 2 : 1,
          marginBottom: 12,
          fontSize: 14,
          paddingHorizontal: 8,
          borderColor: highlightedField === 'address' ? 'blue' : 'gray'}}
      />
      {isLoading ?
      
      <ActivityIndicator style={styles.buttonStyle} size="large" color="red" />
 
      :
 
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={startVoiceRecognition}
      >
       <Image
                source={require('./src/button.png')}
                style={{ width: 33, height: 33 }}
              />
      </TouchableOpacity>
      }
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={stopVoiceRecognition}
      >
        <Text style={{ color: 'red', fontWeight: 'bold' }}>Stop</Text>
      </TouchableOpacity>
      
      <Text style={styles.voiceInput}>Voice Input: {voiceResults}</Text>
      <TouchableOpacity
        style={{ alignSelf: 'center',
        marginTop: 24,
        padding: 8,
        borderRadius: 4,
        backgroundColor: highlightedField === 'submit' ? 'green' : 'blue' }}
        onPress={submitForm}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headingText: {
    alignSelf: 'center',
    marginVertical: 26,
    fontWeight: 'bold',
    fontSize: 26
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: 24,
    padding: 8,
    borderRadius: 4
  },
  buttonSub: {
    alignSelf: 'center',
    marginTop: 24,
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 4
  },
  voiceInput: {
    marginTop: 12,
    fontSize: 14,
  },
});
 
export default VoiceForm;