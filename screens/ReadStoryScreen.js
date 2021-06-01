import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default class Read extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.displayText}>
                    Read story
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    displayText: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontFamily: "Fira Sans, Menlo",
        fontWeight: 'bold'
    }
})