import React, {useContext} from 'react'
import { View, ActivityIndicator } from 'react-native' 
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AuthStackNavigator from './AuthStackNavigator'
import MainStackNavigator from './MainStackNavigator'
import { AuthContext } from '../context/AuthContext'

function AppNav() {
    const {isLoading, userToken} = useContext(AuthContext);

    if(isLoading){
        return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
        </View>
        );
    }

    return (
      <NavigationContainer>
        {userToken !== null ? <MainStackNavigator/> : <AuthStackNavigator/>}
        </NavigationContainer>
    )
  }
  
  export default AppNav;