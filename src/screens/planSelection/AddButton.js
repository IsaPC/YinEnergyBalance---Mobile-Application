import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//change the size of the button
var sizes = 80;

const AddButton = (props) => {


    return (
    <TouchableOpacity {...props} style={{ ...styles.button, ...props.style}}>
        <Text style={styles.txt}>+</Text>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        width: sizes, height: sizes,
        borderRadius: sizes / 2,
        justifyContent: 'center'
    },
    txt: {
        textAlign: 'center',
        color: 'white',
        fontSize: (sizes = sizes - sizes/12)
    }
});

export default AddButton;