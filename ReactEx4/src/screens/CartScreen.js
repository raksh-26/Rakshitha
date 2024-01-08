import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
  StyleSheet
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import {addItemToCart, removeItemFromCart, incrItem, decrItem} from '../redux/favorite/action';
import ProductCount from '../component/ProductCount';

function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}

const CartScreen=()=> {

  const {cart} = useSelector((state) => state.favItemsReducer)
  console.log(cart)
  const dispatch = useDispatch()
  const removeFromCart = item => dispatch(removeItemFromCart(item));
  const addToCart = item => dispatch(addItemToCart(item));

  const cartTotal = cart.map(item => {
    return item.price * item.quantity;
    }).reduce((preVal, curVal) => {
    return preVal + curVal;
    }, 0);
  

   /**const cartTotal = cart
      .map(item => item.price * item.quantity) 
      .reduce((preVal, curVal) => preVal + curVal, 0);
    */

  return (
    
    <View
      style={{
        flex: 1
      }}>
    
      {cart.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartMessage}>Your cart is empty :'(</Text>
        </View>
      ):
      (
        <FlatList
          data={cart}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => Separator()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={ item.imgUrl } style={styles.thumbnail} />
              <View style={styles.productItemMetaContainer}>
              <Text style={styles.textTitle} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.textPrice}>₹{item.price}</Text>
              <ProductCount
        initialCount={1}
        onAdd={() => dispatch(incrItem(item))}
        onRemove={() => dispatch(decrItem(item))}
      />
                  <TouchableOpacity
                    onPress={() => removeFromCart(item)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Remove</Text>
                  </TouchableOpacity>
              </View>
              </View>
          )} 
        />
      )}
      {cart.length !== 0 ? (
        <View>
      <Text style={styles.checkoutButtonText}>Total: ₹ {(cartTotal)}</Text>
      <Button
        title="Checkout"
        onPress={() => {
          alert('Checkout functionality not implemented in this example.');
        }}
        style={styles.checkoutButton}
      />
      </View>
      ):('')}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartMessage: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
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
  textPrice: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#FF5733',
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
  checkoutButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 10,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default CartScreen