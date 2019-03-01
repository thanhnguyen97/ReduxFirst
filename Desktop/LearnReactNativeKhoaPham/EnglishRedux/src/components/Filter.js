import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Text, StyleSheet } from 'react-native';
import connect from 'react-redux'

import { showAll, showMemnorized, showNeedPractice} from '../redux/actionCreators'

class Filter extends Component {

    getTextStyle(statusName) {
        const { myFilterStatus } = this.props;
    }

    render(){
        return(
            <View style = {styles.container}>
                <TouchableOpacity style={styles.buttonText}>SHOW ALL</TouchableOpacity>
                <TouchableOpacity style={styles.buttonText}>MEMORIZED</TouchableOpacity>
                <TouchableOpacity style={styles.buttonText}>NEED PRACTICE</TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { myFilterStatus: state.filterStatus };
}

export default connect(mapStateToProps, { showAll, showMemnorized, showNeedPractice })(Filter);


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#583C3C',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    buttonText: {
        color: 'white'
    }
})