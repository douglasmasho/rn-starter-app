import React, { useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import { Button } from "native-base";

const HomeScreen = ({ navigation: { navigate } }) => {
  useKeepAwake();

  return (
    <View>
      <Text style={[styles.text, styles.margin]}>Hello Douglas!</Text>
      <View style={styles.margin}>
        <Button style={styles.button} onPress={() => navigate("Components")}>
          Go to Components Demo
        </Button>
      </View>
      <View style={styles.margin}>
        <Button style={styles.button} onPress={() => navigate("List")}>
          Go to List Demo
        </Button>
      </View>
      <View style={styles.margin}>
        <Button style={styles.button} onPress={() => navigate("Images")}>
          Go to Image Screen
        </Button>
      </View>
      
      <Text style={[styles.sectionHeader]}>Let's revise state!</Text>
      <View style={styles.margin}>
        <Button style={styles.button} onPress={() => navigate("Counter")}>
          Go to Counter
        </Button>
      </View>
      <View style={styles.margin}>
        <Button style={styles.button} onPress={() => navigate("Name")}>
          Go to Name Shower!
        </Button>
      </View>
      <View style={styles.margin}>
        <Button style={styles.button} onPress={() => navigate("Colors")}>
          Go to Color Screen!
        </Button>
      </View>
      <View style={styles.margin}>
        <Button style={styles.button} onPress={() => navigate("Adjustor")}>
          Go to Color Adjustor!
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 25,
    fontFamily: "Poppins_Medium",
    color: "black",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 0
  },
  text: {
    fontSize: 30,
    fontFamily: "Poppins_Bold",
  },
  margin: {
    margin: 10,
    color: "black",
  },
  button: {
    backgroundColor: "#3A0CA3",
    borderRadius: 15,
    shadowOffset: { width: 20, height: 10 },
    fontFamily: "Poppins_Regular",
    shadowColor: "black",
    shadowOpacity: 1.0,
  },
  
});

export default HomeScreen;
