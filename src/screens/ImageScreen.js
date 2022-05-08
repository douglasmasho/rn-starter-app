import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import ImageDetail from "../../src/components/ImageDetail";
import { useKeepAwake } from 'expo-keep-awake';

const Imagescreen = () => {
  useKeepAwake();
  const data = [
      {
          title: "Beach",
          score: 9,
          imageSrc: require("../../assets/images/beach.jpg")
       },
       {
        title: "Forest",
        score: 8,
        imageSrc: require("../../assets/images/forest.jpg")
     },
     {
        title: "Mountain",
        score: 7,
        imageSrc: require("../../assets/images/mountain.jpg")
     },
     {
        title: "Beach1",
        score: 9,
        imageSrc: require("../../assets/images/beach.jpg")
     },
     {
      title: "Forest1",
      score: 8,
      imageSrc: require("../../assets/images/forest.jpg")
   },
   {
      title: "Mountain1",
      score: 7,
      imageSrc: require("../../assets/images/mountain.jpg")
   }
  ]
    return (
        <View style={styles.padding}>
        <FlatList 
        style={styles.height}
        horizontal={true}
        keyExtractor={(item)=>item.title}
        showsHorizontalScrollIndicator={false}
        data={data} 
        renderItem={({item: {score,title,imageSrc}})=> <ImageDetail score={score} title={title} imageSrc={imageSrc}/>}/>
         <FlatList 
        style={styles.height}
        horizontal={true}
        keyExtractor={(item)=>item.title}
        showsHorizontalScrollIndicator={false}
        data={data} 
        renderItem={({item: {score,title,imageSrc}})=> <ImageDetail score={score} title={title} imageSrc={imageSrc}/>}/>
         <FlatList 
        style={[styles.marginTop]}
        keyExtractor={(item)=>item.title}
        showsVerticalScrollIndicator={false}
        data={data} 
        renderItem={({item: {score,title,imageSrc}})=> <ImageDetail score={score} title={title} imageSrc={imageSrc}/>}/>
        </View>

    );
}

const styles = StyleSheet.create({
    height: {
        height: '30%',
    },
    padding: {
        padding: 10
    },
    marginTop: {
        marginTop: 30
    },
})
 
export default Imagescreen;
