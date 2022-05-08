import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input } from "native-base";

const Namescreen = () => {
  const [value, setValue] = useState("");

  const handleChange = (text) => setValue(text);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Name: </Text>
      <View style={styles.input}>
        <Input
          placeholder="Search"
          returnKeyType="search"
          value={value}
          onChangeText={handleChange}
          variant="rounded"
          w="90%"
        />
      </View>
      <Text style={styles.regular}>Your name is: </Text>
      <Text style={styles.text}>{value}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  text: {
    fontSize: 30,
    fontFamily: "Poppins_Bold",
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  regular: {
    fontFamily: "Poppins_Regular",
    fontSize: 20,
    marginLeft: 20,
    marginTop: 30
  },
  input: {
    marginLeft: 10,
  },

});

export default Namescreen;
