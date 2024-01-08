import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { useProductContext } from './ProductContext';

const ProductList = ({ navigation }) => {
  const { products } = useProductContext();

  const renderItem = ({ item }) => (
    <Card containerStyle={{ margin: 10 }}>
      <Card.Title>{item.name}</Card.Title>
      <Card.Divider />
      <Card.Image source={require ('../image/p0.png')}/>
      <Button
        icon={<Icon name="info" size={20} color="white" />}
        title="View Details"
        onPress={() => navigation.navigate('ProductDetail', { product: item })}
      />
    </Card>
  );

  return (
    <View>
      
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductList;



