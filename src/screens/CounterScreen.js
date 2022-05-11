import React, {useState, useReducer} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Button } from "native-base";
import { useKeepAwake } from "expo-keep-awake";


const reducer = (state, action)=>{
  switch(action.type){
    case "INCREASE": 
      return {count: state.count + 1};
    case "DECREASE":
      return {count: state.count - 1};
      default: 
      return state;
  }
}

const Counterscreen = () => {
    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, {count: 0});
  useKeepAwake();

  const increment = ()=>{
    console.log(state);
      dispatch({
        type: "INCREASE",
        amount: 1
      })
  }
  const decrement = ()=>{
    dispatch({
      type: "DECREASE",
      amount: 1
    })
}
    return (
        <View >
            <Button style={styles.button} onPress={increment}>Increment</Button>
            <Button style={styles.button} onPress={decrement}>Decrement</Button>
            <View style={styles.container}>
              <Text style={styles.text}>Current Count:</Text>
              <Text style={styles.bold}>{state.count}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       alignItems: 'center',
        width: "100%",
        marginTop: 20
    },
    button: {
        backgroundColor: "#3A0CA3",
        borderRadius: 15,
        shadowOffset: { width: 20, height: 10 },
        fontFamily: "Poppins_Regular",
        shadowColor: "black",
        shadowOpacity: 1.0,
        margin: 10
      },
      text: {
        fontSize: 30,
        fontFamily: "Poppins_Regular",
      },
      bold: {
        fontSize: 40,
          fontFamily: "Poppins_Bold"
      }
})

export default Counterscreen;
