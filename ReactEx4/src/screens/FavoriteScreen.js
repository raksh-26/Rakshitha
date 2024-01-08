import React from 'react'
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
import {removeItemFromFav} from '../redux/favorite/action';

function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}

const FavoriteScreen=()=> {
  const {favorites} = useSelector((state) => state.favItemsReducer)
  const dispatch = useDispatch()
  const removeFromFav = item => dispatch(removeItemFromFav(item));

  return (
    <View
      style={{
        flex: 1
      }}>
      {favorites.length === 0 ? (
        <View style={styles.emptyFavContainer}>
          <Text style={styles.emptyFavMessage}>Your Wishlist is empty :'(</Text>
        </View>
      ):
      (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => Separator()}
            renderItem={({item})=>{
              console.log(item)
                      return (
            <View style={styles.favItem}>
              <Image source={ item.imgUrl } style={styles.thumbnail} />
              <View style={styles.productItemMetaContainer}>
              <Text style={styles.textTitle} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.textPrice}>₹{item.price}</Text>
                  <TouchableOpacity
                    onPress={() => removeFromFav(item)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Remove</Text>
                  </TouchableOpacity>
                
              </View>
            </View>
            );
            }}
        />
        
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyFavContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textPrice: {
    fontSize: 18,
  },
  emptyFavMessage: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  favItem: {
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
  button: {
    backgroundColor: 'red',
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

export default FavoriteScreen

