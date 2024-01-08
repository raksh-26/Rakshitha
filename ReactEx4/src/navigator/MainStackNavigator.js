import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ProductScreen from '../screens/ProductScreen'
import CartScreen from '../screens/CartScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import ShoppingCartIcon from '../component/ShoppingCartIcon'
import FavoriteIcon from '../component/FavoriteIcon'
import { View } from 'react-native';


const ProductScreenHeader = () => {
  return (
    <View style={{ flexDirection: 'row', marginRight: 10 }}>
      <FavoriteIcon />
      <ShoppingCartIcon />
    </View>
  );
};

const Stack = createStackNavigator()

const MainStackNavigator=() =>{
  return (
    
      <Stack.Navigator >

      <Stack.Screen
          name='Products'
          component={ProductScreen}
          options={{
            headerRight: () => <ProductScreenHeader />,
          }}
        />
        <Stack.Screen name='Cart' component={CartScreen} />
        <Stack.Screen name='Wishlist' component={FavoriteScreen} />
      
      </Stack.Navigator>
      
  )
}

export default MainStackNavigator