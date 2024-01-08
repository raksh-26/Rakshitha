import React from 'react';
import {SafeAreaView,View,Text,TextInput,TouchableOpacity,Image} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  Ionicons  from 'react-native-vector-icons/Ionicons'

import CustomButton from '../component/CustomButton';
import InputField from '../component/InputField';

const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
      <Image
        source={ require ('../images/register.png')}
        style={{height:200,width:200,marginBottom:10,marginLeft:70}}
      />
        <Text style={{fontSize: 28,fontWeight: '500',color: '#333',marginBottom: 30}}>
          Register
        </Text>

        <InputField
          label={'Full Name'}
          icon={
            <Ionicons name="person-outline" size={20} color="#666" style={{marginRight: 5}}/>
          }
        />

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons name="alternate-email" size={20} color="#666" style={{marginRight: 5}}/>
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons name="lock-closed-outline" size={20} color="#666" style={{marginRight: 5}}/>
          }
          inputType="password"
        />

        <InputField
          label={'Confirm Password'}
          icon={
            <Ionicons name="lock-closed-outline" size={20} color="#666" style={{marginRight: 5}}/>
          }
          inputType="password"
        />
        
        <CustomButton label={"Register"} onPress={() => {}} />

        <View
          style={{flexDirection: 'row',justifyContent: 'center',marginBottom: 30}}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

