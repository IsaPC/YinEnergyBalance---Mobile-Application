import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const planItem = props => {
    return (
        <View style={styles.planItem}>
            <TouchableOpacity onPress={props.onSelectPlan} stlye={{flexDirection: 'row', alignItems: 'center',}}>
                <Image style={styles.image} source={{uri: props.image}} />
                <View style={styles.view}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={props.onEditPlan}>
                <Text style={styles.edit}>edit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    planItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15
    },
    image: {
        width: 50, height: 50,
        borderRadius: 25,
        backgroundColor: 'purple'
    },
    title: {
        backgroundColor: 'blue'
    },
    edit: {
        alignSelf: 'flex-end',
        color: 'blue',
        backgroundColor: 'red'
    }
});

export default planItem;