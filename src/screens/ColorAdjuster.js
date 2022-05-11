import React, {useReducer} from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "native-base";
import { useKeepAwake } from "expo-keep-awake";
import Adjustor from "../components/Adjustor";
import ColorBlock from "../components/ColorBlock";

//must always return state
const reducer = (state, action)=>{
  //state === {red:number, green:number, blue: number}
  //action === {type: "red" || "green" || "blue", amount: 15 || -15}
  return {...state, [action.type]: state[action.type] + action.amount}

  // switch(action.type){
  //   case "red":
  //     return {...state, red: state.red + action.amount}
  //   case "green":
  //     return {...state, green: state.green + action.amount}
  //   case "blue":
  //     return {...state, blue: state.blue + action.amount}
  //   default: 
  //   return state
  // }
};

const ColorAdjuster = () => {
  


  //first arg=> reducer argument
  //second arg=> initial state value
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  console.log(state);


  useKeepAwake();
  // const [redAmount, setRedAmount] = useState(0);
  // const [greenAmount, setGreenAmount] = useState(0);
  // const [blueAmount, setBlueAmount] = useState(0);


  const moreRed=()=>{
    if(state.red < 255){
      dispatch({
        type: "red",
        amount: 15
      })
     } 
  }

  const lessRed=()=>{
    if(state.red > 0){
      dispatch({
        type: "red",
        amount: -15
      })
     } 
  }
  const moreGreen=()=>{
    if(state.green < 255){
      dispatch({
        type: "green",
        amount: 15
      })
     } 
  }
  
  const lessGreen=()=>{
    if(state.green > 0){
      dispatch({
        type: "green",
        amount: -15
      })
     } 
  }

  const moreBlue=()=>{
    if(state.blue < 255){
      dispatch({
        type: "blue",
        amount: 15
      })
     } 
  }
  const lessBlue=()=>{
    if(state.blue > 0){
      dispatch({
        type: "blue",
        amount: -15
      })
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
        <ColorBlock color={`rgb(${state.red}, ${state.green}, ${state.blue})`}/>
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
