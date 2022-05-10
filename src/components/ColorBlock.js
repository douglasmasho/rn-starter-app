import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const ColorBlock = ({color}) => {
    return (
        <View style={[styles.block, {backgroundColor: color}]}>
            <Text>{color}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        width: .9 * width,
        height: 100,
        borderRadius: 20, 
        marginVertical: 10,
        shadowColor: '#000000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    }
})

export default ColorBlock;
