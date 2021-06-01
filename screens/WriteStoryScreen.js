import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default class Write extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={(styles.displaytext, { fontSize: 24, width: 120, height: 20 })}
          placeholder="story's name"
        />
        <TextInput
          style={
            (styles.displaytext,
            { fontSize: 24, width: 120, height: 20, marginTop: 100 })
          }
          placeholder="author"
        />
        <TextInput
          style={
            (styles.displaytext,
            { fontSize: 18, width: 120, height: 260, marginTop: 100 })
          }
          placeholder="story"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  displaytext: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    fontFamily: "Fira Sans, Menlo",
    fontWeight: "bold",
    outline: "none",
  },
});
