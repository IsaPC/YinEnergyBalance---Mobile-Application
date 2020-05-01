/* Screen created by Aashish */

import React, { useState, useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { DetailsContext } from '../contexts/DetailsContext';
import User from './Components/users';
import { ScrollView } from 'react-native-gesture-handler';
// navigation guide https://reactnavigation.org/docs/params/

const ViewUser = props => {
   const {details,loadAllDetails,removeUsers} = useContext(DetailsContext);
   loadAllDetails();    
    const addUserHandler = () => {
        console.log('add-user button clicked');
        //props.navigation.navigate();
    }
    return (
    <ScrollView>
        <View>
            <View style={styles.buttnPos}>
            </View>
            <FlatList
                data={details}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <User
                        name={itemData.item.name}
                        age={itemData.item.age}
                        address={itemData.item.address}
                        onEditPlan={() => {
                            console.log('edit user button');
                            props.navigation.navigate('EditUser', {
                                userid: itemData.item.id,
                                username: itemData.item.name,
                                useraddress: itemData.item.address,
                                userage: itemData.item.age,
                            });
                        }}
                        OnDelete={() => {
                            removeUsers(itemData.item.id);
                        }}
                    />
                )} />
            <View style={styles.end}></View>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    end: {
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    buttnPos: {
        paddingRight: 3,
        paddingTop: 3
    },
    addplanbutton: {
        alignSelf: 'flex-end',
    }
});

export default ViewUser;