import React, { useState } from "react";
import { Window, App, StyleSheet, TouchableOpacity, Text } from "proton-native"; // import the proton-native components

const $ = {
  buttonColor: "rgba(0, 155, 0, 1)",
  color: "rgba(255, 155, 0, 1)",
}

const mixins = StyleSheet.create({})

const styles = StyleSheet.create({
  button: {
    backgroundColor: $.buttonColor,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 30,
  },
  text: {
    color: $.color,
  },
})


export default function Example() {
  const [val, setVal] = useState(0)
  return (
    <App>
      <Window style={{ width: 300, height: 300, backgroundColor: "#fff" }}>
        <Text style={styles.text}>{val}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setVal(1)
          }}
        >
          <Text style={styles.text}>Save</Text>
        </TouchableOpacity>
      </Window>
    </App>
  );
}

