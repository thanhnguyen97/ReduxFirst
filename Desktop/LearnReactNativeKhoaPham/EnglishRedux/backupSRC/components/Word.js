import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class Main extends Component { 
    render(){ 
        const { en, vn, memorized } = this.props.myWord;
        const textDecotationline = memorized ? 'line-through' : 'none';
        return (
            <View style={styles.container}>
                <Text style ={ textDecotationline }>en</Text>
                <Text>vn</Text>
            </View>
        );
    }
}
const styles= StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 10
    }
})
export default connect() (Word);