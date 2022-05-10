import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Button } from "native-base";

const Adjustor = ({text, callback, color}) => {
    return (
        <Button style={[styles.button, {backgroundColor: color}]} onPress={callback}>{text}</Button>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#3A0CA3",
        borderRadius: 15,
        shadowOffset: { width: 20, height: 10 },
        fontFamily: "Poppins_Regular",
        shadowColor: "black",
        shadowOpacity: 1.0,
        marginHorizontal: 10,
        marginVertical: 5
      },
})

export default Adjustor;
