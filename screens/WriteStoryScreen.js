import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default class Write extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={(styles.displaytext, { fontSize: 24, width: "100%", height: 40, marginTop: 50, borderWidth: 3,})}
          placeholder="story's name"
        />
        <TextInput
          style={
            (styles.displaytext,
            { fontSize: 24, width: "100%", height: 40, marginTop: 100, borderWidth: 3 })
          }
          placeholder="author"
        />
        <TextInput
          style={
            (styles.displaytext,
            { fontSize: 18, width: "100%", height: 260, marginTop: 100, borderWidth: 3, })
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
