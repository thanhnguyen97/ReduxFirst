import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Word extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={{}}></Text>
                <Text></Text>
                <View style={styles.controller}>
                    <TouchableOpacity style={styles.button}></TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text>show</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2DEF6',
        padding: 10,
        margin: 10
    },
    controller: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        margin: 10
    }
})