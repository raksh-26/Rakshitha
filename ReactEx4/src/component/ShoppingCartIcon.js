import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

function ShoppingCartIcon() {
  const navigation = useNavigation()
  const {cart} = useSelector((state) => state.favItemsReducer)
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={styles.button}>
       
       {cart.length!==0 ? (
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cart.length}</Text>
      </View>
       ):("")
      }
      <Ionicons name='cart' size={32} color='red' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10
  },
  itemCountContainer: {
    position: 'absolute',
    height: 17,
    width: 17,
    borderRadius: 15,
    backgroundColor: '#FF7D7D',
    right: 22,
    bottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default ShoppingCartIcon;