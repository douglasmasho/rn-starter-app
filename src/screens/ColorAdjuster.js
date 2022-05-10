import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "native-base";
import { useKeepAwake } from "expo-keep-awake";
import Adjustor from "../components/Adjustor";
import ColorBlock from "../components/ColorBlock";
const ColorAdjuster = () => {
  useKeepAwake();
  const [redAmount, setRedAmount] = useState(0);
  const [greenAmount, setGreenAmount] = useState(0);
  const [blueAmount, setBlueAmount] = useState(0);

  const adjustColor = (color, operation)=>{
      switch(color){
          case "red": 
             switch(operation){
               case "more": 
               
               break;
               case "less": 
              
             }
          break;
          case "green": 
             switch(operation){
               case "more": 
              
               break;
               case "less": 
              
             }
          break;
          case "blue": 
          switch(operation){
            case "more": 
            
            break;
            case "less": 
            
          }
       break;    
      }
  }

  const moreRed=()=>{
    if(redAmount < 255){
      setRedAmount(prevAmount=>prevAmount+4);
     } 
  }

  const lessRed=()=>{
    if(redAmount > 0){
      setRedAmount(prevAmount=>prevAmount-4);
     } 
  }
  const moreGreen=()=>{
    if(greenAmount < 255){
      setGreenAmount(prevAmount=>prevAmount+4);
     } 
  }
  
  const lessGreen=()=>{
    if(greenAmount > 0){
      setGreenAmount(prevAmount=>prevAmount-4);
     } 
  }

  const moreBlue=()=>{
    if(blueAmount < 255){
      setBlueAmount(prevAmount=>prevAmount+4);
     } 
  }
  const lessBlue=()=>{
    if(blueAmount > 0){
      setBlueAmount(prevAmount=>prevAmount-4);
     } 
  }


  return (
    <View>
   
      <View style={styles.section}>
        <Text style={[styles.text, styles.margin]}>Red</Text>
        <Adjustor text="More Red!" color="red" callback={moreRed} />
        <Adjustor text="Less Red!" color="red" callback={lessRed} />
      </View>
      <View style={styles.section}>
        <Text style={[styles.text, styles.margin]}>Green</Text>
        <Adjustor text="More Green!" color="green" callback={moreGreen} />
        <Adjustor text="Less Green!" color="green" callback={lessGreen} />
      </View>
      <View style={styles.section}>
        <Text style={[styles.text, styles.margin]}>Blue</Text>
        <Adjustor text="More Blue!" color="blue" callback={moreBlue} />
        <Adjustor text="Less Blue!" color="blue" callback={lessBlue} />
      </View>
      <View style={styles.center}>
        <ColorBlock color={`rgb(${redAmount}, ${greenAmount}, ${blueAmount})`}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 10,
  },
  sectionHeader: {
    fontSize: 25,
    fontFamily: "Poppins_Medium",
    color: "black",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 0,
  },
  text: {
    fontSize: 30,
    fontFamily: "Poppins_Bold",
  },
  margin: {
    marginLeft: 10,
    color: "black",
  },
  center: {
    alignItems: "center"
  }
});

export default ColorAdjuster;
