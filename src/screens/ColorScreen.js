import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import { Button } from "native-base";
import { useKeepAwake } from "expo-keep-awake";
import ColorBlock from '../components/ColorBlock';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const ColorScreen = () => {
    useKeepAwake();
    const [colors, setColors] = useState([]);

    const addColor=()=>{
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const finalColor = `rgb(${red},${green},${blue})`;
        setColors(prevColors=>[finalColor, ...prevColors]);
    }



    return (
        <View>
            <Button style={styles.button} onPress={addColor}>Add Color</Button>
            <View style={styles.center}>
            <FlatList
            style={{paddingHorizontal: 10}}
            data={colors}
            keyExtractor={(item, index)=>`${item}`}
            renderItem={({item})=><ColorBlock color={item}/>}/>
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ff1b1c",
        borderRadius: 15,
        shadowOffset: { width: 20, height: 10 },
        fontFamily: "Poppins_Regular",
        shadowColor: "black",
        shadowOpacity: 1.0,
        margin: 10
      },
    center: {
        alignItems: "center",
        // width: width,
    }
})

export default ColorScreen;
