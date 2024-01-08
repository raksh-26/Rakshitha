import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useCart } from './CartContext'; 

const Cart = ({ navigation }) => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text>Name: {item.name}</Text>
              <Text>Price: {item.price}</Text>
              <Text>Quantity: {item.quantity}</Text>
              <Button
                title="Remove"
                onPress={() => removeFromCart(item.id)}
                color="#FF5733" 
              />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      <Button
        title="Checkout"
        onPress={() => {
          alert('Checkout functionality not implemented in this example.');
        }}
        style={styles.checkoutButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  emptyCart: {
    fontSize: 16,
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0', 
    paddingVertical: 8,
  },
  checkoutButton: {
    marginTop: 16,
    backgroundColor: '#4CAF50', 
  },
});

export default Cart;
