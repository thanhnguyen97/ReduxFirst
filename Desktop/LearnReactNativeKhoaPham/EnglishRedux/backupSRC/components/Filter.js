import React, { Componet } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class Filter extends Component {
    render() {
        return (
        <View style={styles.container}> 
            <TouchableOpacity>
                <Text style={styles.buttonText}>Show All</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.buttonText} >Memorized</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.buttonText} >Need Practive</Text>
            </TouchableOpacity>
        </View>
        );
    }
}
function mapStateToProps(state) {
    return { myFilterStatus}
}
export default connect()(Filter);

const styles = StyleSheet.create({
    container: { backgroundColor: 'orange', flex: 1, flexDirection: 'row', alignItem: 'center', justifyContent: 'space-around'},
    buttonText: { color: 'white'}
})