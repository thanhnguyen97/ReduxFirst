import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import Header from './Header'
import Filter from './Filter'
import Form from './Form'
import Word from './Word'


export default class Main extends Component {
    render(){
        return(
            <View style= {styles.container}>
                <Header />
                <View>
                    <FlatList>

                    </FlatList>
                </View>
                <Filter />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        flex: 1,
        alignSelf: 'stretch',
        justifyContain: 'center'
    }
});