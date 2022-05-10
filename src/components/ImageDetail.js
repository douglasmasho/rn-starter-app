import React from 'react';
import {View, StyleSheet, Text, Image, } from 'react-native';


const ImageDetail = ({title,imageSrc, score}) => {
    console.log(title);
    return (   
        <View style={styles.margin}>
            <Image source={imageSrc}/>
            <Text>Show image of {title}</Text>
            <Text>{score}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    margin: {
        margin: 10,
        borderRadius: 20
    },
})

export default ImageDetail;
