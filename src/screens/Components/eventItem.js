/* Component created by Isaac */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const eventItem = props => {
        return (
        <View styles={styles.eventItem}>
                <View style={styles.item}>
                    <Text style={styles.text}> {props.title} </Text>
                    <Text style={styles.text}> {props.newDate} </Text>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default eventItem;
