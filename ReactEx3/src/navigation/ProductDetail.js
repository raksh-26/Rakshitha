import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'; 
import { useCart } from './CartContext';

const ProductDetail = ({ route, navigation }) => {
  const { product } = route.params;
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      <Image
        source={ require ('../image/p1.png')}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>Price: {product.price}</Text>
      
      <TouchableOpacity
        style={[styles.button, styles.addToCartButton]}
        onPress={() => {
          addToCart(product);
          alert('Added to Cart');
        }}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={() => navigation.navigate('Cart')} 
      >
        <Text style={styles.buttonText}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: 'blue',
  },
  backButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
}); 

export default ProductDetail;



