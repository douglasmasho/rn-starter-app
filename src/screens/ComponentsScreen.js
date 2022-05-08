//imports
import React from 'react';
import {Text, StyleSheet, View } from 'react-native';


//component
const ComponentsScreen = ()=>{
    const name = "DouglasMasho";

    return (
        <View>
          <Text style={styles.headerStyle}>Getting Started with React Native!</Text>
          <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    );
};

//StyleSheet
const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 30,
        color: "black", 
        fontFamily: "Poppins_Regular",
    },
    subHeaderStyle :{
        fontSize: 20,
        color: "red",
        fontFamily: "Poppins_Regular",

    }
})

export default ComponentsScreen;