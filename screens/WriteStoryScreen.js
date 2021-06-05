import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from "react-native";
import firebase from "firebase";
import db from "../config";

export default class Write extends React.Component {
  constructor() {
    super()
    this.state = {
      author: "",
      storyName: "",
      story: "",
    };
  }

  submitStory = () => {
    db.collection("stories").add({
      storyName: this.state.storyName,
      author: this.state.author,
      story: this.state.story,
      date: firebase.firestore.Timestamp.now().toDate(),
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TextInput
          style={
            (styles.displaytext,
            {
              fontSize: 24,
              width: "100%",
              height: 40,
              marginTop: 50,
              borderWidth: 3,
            })
          }
          value={this.state.storyName}
          onChangeText={(text) => {
            this.setState({
              storyName: text,
            });
          }}
        />
        <TextInput
          style={
            (styles.displaytext,
            {
              fontSize: 24,
              width: "100%",
              height: 40,
              marginTop: 100,
              borderWidth: 3,
            })
          }
          placeholder="author"
          value={this.state.author}
          onChangeText={(text) => {
            this.setState({
              author: text,
            });
          }}
        />
        <TextInput
          style={
            (styles.displaytext,
            {
              fontSize: 18,
              width: "100%",
              height: 260,
              marginTop: 100,
              borderWidth: 3,
            })
          }
          placeholder="story"
          multiline={10}
          value={this.state.story}
          onChangeText={(text) => {
            this.setState({
              story: text,
            });
          }}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            this.submitStory();
            ToastAndroid.show("your story has been submitted!", ToastAndroid.SHORT)
          }}
        >
          submit
        </TouchableOpacity>
      </KeyboardAvoidingView>
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

  button: {
    borderWidth: 3,
    textAlign: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    marginTop: 10,
    fontSize: 24,
    fontFamily: "Fira Sans",
  }
});
