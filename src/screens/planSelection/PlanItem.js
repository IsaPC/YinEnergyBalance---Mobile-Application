import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity  } from 'react-native';
import { } from 'react-native-gesture-handler';

const PlanItem = props => {
    return (
    <View>
        <TouchableOpacity style={styles.itemContainer}>
                <Image style={styles.image} source={{uri: props.image}}/>
                <Text >{props.title} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
                <Text>edit</Text>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        // add a line under each item
        borderBottomColor: 'grey',
        borderBottomWidth: 1,

        marginVertical: 10, /*add spacing between items */            
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100 /2,
        backgroundColor: 'green'
    }
});

export default PlanItem;