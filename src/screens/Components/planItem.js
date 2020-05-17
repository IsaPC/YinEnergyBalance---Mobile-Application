import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const planItem = props => {
    return (
        <View style={styles.planItem}>
            <TouchableOpacity 
                style={styles.viewplan} 
                onPress={props.onSelectPlan}
            >
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.image} source={{uri: props.image}} />
                    <Text style={styles.title}> {props.title} </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.edit} onPress={props.onEditPlan}>
                <Text style={{color: 'blue', fontSize: 18}}>edit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    planItem: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 8,
        justifyContent: 'space-between',
    },
        viewplan: {
            flexDirection: 'row', 
            alignItems: 'center',
            //backgroundColor: 'red'
        },
        image: {
            width: 50, height: 50,
            borderRadius: 25,
            //backgroundColor: 'purple',
            paddingRight: 3,
        },
        title: {
            alignSelf: 'center',
            //backgroundColor: 'blue',
            padding: 8,
            fontSize: 18,
        },
        edit: {
            justifyContent: 'flex-end',
            alignSelf: 'center',
            //backgroundColor: 'green',
            paddingRight: 8
        }
});

export default planItem;