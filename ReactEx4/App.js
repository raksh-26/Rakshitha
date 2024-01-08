/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import MainStackNavigator from './src/navigator/MainStackNavigator'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/context/AuthContext'
import AuthStackNavigator from './src/navigator/AuthStackNavigator'
import AppNav from './src/navigator/AppNav'

export default function App() {
  return (
    <Provider store={store}>
    <AuthProvider>
      <AppNav/>
    </AuthProvider>
    </Provider>
  )
} 