import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { } from 'react-native-gesture-handler';

const PlanItem = props => {
    

    return (
    <View style={styles.itemContainer}>
        <TouchableOpacity onPress={props.onSelect} style={{flexDirection: "row"}}>
                <Image style={styles.image} source={{uri: props.image}}/>
                <Text >{props.title} </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={props.onEdit} style={{}}>
                <Text>edit</Text>
        </TouchableOpacity>
    </View> 
    );
};



const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignContent: "center",
        padding: 10,
        // add a line under each item
        borderBottomColor: 'grey',
        borderBottomWidth: 1,

        marginVertical: 10, /*add spacing between items */            
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 70 /2,
        backgroundColor: 'green'
    }
});

export default PlanItem;