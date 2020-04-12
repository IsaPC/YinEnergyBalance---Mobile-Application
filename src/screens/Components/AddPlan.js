import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const AddPlan = props => {


    return <TouchableOpacity {...props} style={{ ...styles.back, ...props.style}}>
            <Text style={styles.txt}>+</Text>
        </TouchableOpacity>
}

const styles = StyleSheet.create({
    back: {
        backgroundColor: 'green',
        width: 80, height: 80,
        borderRadius: 80 / 2,
        justifyContent: 'center',
        alignItems: "center",
    },
    txt: {
        color: 'white',
        fontSize: 75,
    }
});

export default AddPlan;