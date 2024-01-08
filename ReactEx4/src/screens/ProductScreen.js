import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import { useSelector, useDispatch } from 'react-redux'
import {addItemToCart, removeItemFromCart, addItemToFav, removeItemFromFav} from '../redux/favorite/action';
import { REMOVE_FAVORITE_ITEM, ADD_FAVORITE_ITEM } from '../redux/favorite/action';
import { products } from '../utils/Data'
import ProductCount from '../component/ProductCount';

function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}

function ProductScreen() {

  const {favorites} = useSelector((state) => state.favItemsReducer)
  const {cart} = useSelector((state) => state.favItemsReducer);
  const dispatch = useDispatch()
  const removeFromCart = item => dispatch(removeItemFromCart(item));
  const addToCart = item => dispatch(addItemToCart(item));
  
  const toggleFavorite = (itemId) => {
    dispatch({ type: ADD_FAVORITE_ITEM, payload: itemId });
  };

  return (
    <View style={styles.container}>
      
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => Separator()}
        renderItem={({ item }) => (
        
          <View style={styles.productItemContainer}>
            <Image source={ item.imgUrl } style={styles.thumbnail} />
            <View style={styles.productItemMetaContainer}>
            <View style={styles.productHeader}>
              <Text style={styles.textTitle} numberOfLines={1}>
                {item.name}
              </Text>
              <TouchableWithoutFeedback onPress={() => toggleFavorite(item)}>
                  <View style={styles.icon}>
                  <Ionicons
                      name={favorites.includes(item) ? 'heart' : 'heart-outline'}
                      size={30}
                      color={favorites.includes(item) ? 'red' : 'black'}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <Text style={styles.textPrice}>₹{item.price}</Text>
              <Text style={styles.textRate}>{item.rating}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => addToCart(item)}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  productItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 12,
    borderRadius: 8,
  },
  productItemMetaContainer: {
    flex: 1,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    padding: 8,
  },
  textPrice: {
    fontSize: 18,
  },
  textRate: {
    fontSize: 16,
    color: 'sandybrown',
  },
  buttonContainer: {
    marginTop: 8,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default ProductScreen