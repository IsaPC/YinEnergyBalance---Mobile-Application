import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const eventItem = props => {
        return (
        <View styles={styles.eventItem}>
            <TouchableOpacity
                style={styles.viewevent} 
                onPress={props.onSelectPlan}
            >
                <View style={{flexDirection: 'row'}}>
                    <Text>test</Text>
                    <Text style={styles.text}> {props.title} </Text>
                    <Text style={styles.text}> {props.date} </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    eventItem: {
        flexDirection: 'row',
        paddingVertical: 8,
        justifyContent: 'space-between',
    },
    viewevent: {
        flexDirection: 'row', 
        alignItems: 'center',
        //backgroundColor: 'red'
    },
});

export default eventItem;
