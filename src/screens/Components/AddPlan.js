import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const AddPlan = props => {


    return <TouchableOpacity {...props} style={{ ...styles.back, ...props.style}}>
            <Image style={styles.image} source={require("../../../assets/button.png")}/>
        </TouchableOpacity>
}

const styles = StyleSheet.create({
    back: {
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: "center",
    },
    image: {
        width: 80, height: 80,
    },

    txt: {
        color: 'white',
        fontSize: 75,
    }
});

export default AddPlan;