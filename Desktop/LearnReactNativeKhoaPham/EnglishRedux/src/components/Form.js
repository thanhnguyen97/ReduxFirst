import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native'

export default class Form extends Component { 
    render() { 
        return(
            <View style ={ styles.container}>
                <TextInput style={styles.textInput}></TextInput>
                <TextInput style={styles.textInput}></TextInput>
                <TouchableOpacity>
                    <Text>ADD</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        backgroundColor: '#E4F6D4',
        margin: 10,
        paddingHorizontal: 10
    }
});