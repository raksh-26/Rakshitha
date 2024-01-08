import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import { increment, decrement } from './redux/countAction';
import { useSelector, useDispatch } from 'react-redux';

const Counter=() =>{

    const dispatch = useDispatch();

    const count = useSelector((state) => state.count);

    const handleIncrement = () => {
      console.log("hello");
      dispatch(increment());
  };

    const handleDecrement = () => {
      console.log("hi");
        dispatch(decrement());
    };

    return(
        <View style={styles.container}>
        <Text style={styles.counterText}>Counter</Text>
        <Text style={styles.counterText}>{count}</Text>
        <TouchableOpacity onPress={handleIncrement} style={styles.buttonSpacing}>
            <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDecrement} style={styles.buttonSpacing}>
            <Text>Decrement</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={()=>console.log("ghhy")}>
          <Text>RIght</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 40,
    marginBottom: 20,
  },
  buttonSpacing: {
    backgroundColor: "orange",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  }
});

 export default Counter;