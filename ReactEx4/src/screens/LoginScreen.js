import React, {useContext, useState} from 'react';
import {SafeAreaView,View,Text,TextInput,TouchableOpacity,Image} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  Ionicons  from 'react-native-vector-icons/Ionicons'

import CustomButton from '../component/CustomButton';
import InputField from '../component/InputField';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useContext(AuthContext);

  const isEmailValid = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };


  const handleLogin = async () => {
    if (!isEmailValid()) {
      alert('Invalid email address');
      return;
    }

    if (!isPasswordValid()) {
      alert('Invalid password. Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit.');
      return;
    }

    const success = await login();

    if (success) {
      alert('Login successful');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
      <Image
        source={ require ('../images/login.jpeg')}
        style={{height:200,width:200,marginBottom:20,marginLeft:70}}
      />
        <Text style={{fontSize: 28,fontWeight: '500',color: '#333',marginBottom: 30}}>
          Login
        </Text>

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons name="alternate-email" size={20} color="#666" style={{marginRight: 5}}/>
          }
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons name="lock-closed-outline" size={20} color="#666" style={{marginRight: 5}}/>
          }
          inputType="password"
          onChangeText={(text) => setPassword(text)}
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Login"} onPress={() => {handleLogin()}} />

        <View
          style={{flexDirection: 'row',justifyContent: 'center',marginBottom: 30}}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

