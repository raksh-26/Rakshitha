/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  ProductList  from './src/navigation/PrductList'
import  ProductDetail  from './src/navigation/ProductDetail';
import { ProductProvider } from './src/navigation/ProductContext';
import Cart from './src/navigation/Cart';
import { CartProvider } from './src/navigation/CartContext';


const Stack = createStackNavigator();

const App = () => {
  return (
    <CartProvider>
    <ProductProvider>
    <NavigationContainer>

    <View>
    <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'left', marginLeft: 6, color: 'green' }}>
        E-Commerce App 
      </Text>
    </View>
    
      <Stack.Navigator>
      <Stack.Screen
          name='ProductList'
          component={ProductList}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
            />

        <Stack.Screen
          name="Cart"
          component={Cart} 
            />
      </Stack.Navigator>
    </NavigationContainer>
    </ProductProvider>
    </CartProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;






