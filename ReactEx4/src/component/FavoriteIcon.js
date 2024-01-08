import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

function FavoriteIcon() {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Wishlist')}
      style={styles.button}>
      <Ionicons name='heart' size={30} color='red' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10
  },
  itemCountContainer: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#FF7D7D',
    right: 22,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default FavoriteIcon