import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const userItem = props => {
    return (
        <View style={styles.userItems}>
            <TouchableOpacity style={styles.itemText}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.name}>ID : {props.id} </Text>
                    <Text style={styles.name}>UserName : {props.name} </Text>
                    <Text style={styles.age}>Age: {props.age} </Text>
                    <Text style={styles.address}>Address: {props.address} </Text>
                    <Text style={styles.phone}>Phone: {props.phone} </Text>
                    <Text style={styles.email}>Email: {props.email} </Text>
                    <Text style={styles.note}>Notes: {props.notes} </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.edit} onPress={props.onEditPlan}>
                <FontAwesome5 name='user-edit' size={35} color='#333' style={styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.delete} onPress={props.OnDelete}>
                <MaterialIcons name='delete' size={35} color='#333' style={styles.icons} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    userItems: {
        paddingLeft: 20,
        paddingBottom: 20,
        margin: 5,
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        alignSelf: "flex-start",
    },
    itemText: {
        flex: 1,
        padding:10
    },
    icons: {
        alignSelf: "flex-end",
        padding: 10,
    },
});

export default userItem;
