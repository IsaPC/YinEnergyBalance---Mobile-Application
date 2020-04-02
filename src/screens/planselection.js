/**
 * Dev: Isaac Ceff
 * description: give the ability to add plans into a list.
 */
import React, { useState, Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

function PlanMaker() {
    //state //DONE TEMP DATA
    const [plans, setPlans] = useState([
        {title: 'plan 1', id: '1'},
        {title: 'plan 2', id: '2'},
        {title: 'plan 3', id: '3'},
        {title: 'plan 4', id: '4'},
        {title: 'plan 5', id: '5'},
        {title: 'plan 6', id: '6'},
        {title: 'plan 7', id: '7'},
        {title: 'plan 8', id: '8'},
        {title: 'plan 10', id: '9'},
        {title: 'plan 11', id: '10'},
        {title: 'plan 12', id: '11'},
        {title: 'plan 13', id: '12'},
    ])

    {/*functions */}
    addPlan = () => {
        console.log('add button pressed');
    }


    //AJX implamentations
    const AddPlanHandler = () => {
        return (
            <View style={styles.addp_container}>
                {/*green button */}
                <TouchableOpacity onPress={addPlan /*button */}>
                    <View style={styles.addp_background} >
                        <Text style={styles.addp_txt}>+</Text>
                    </View> 
                </TouchableOpacity>
            </View>
        );
    } 

    function Item({ item }) {
        return (
          <View style={styles.iteminlist}>
            <Text>{item.id}: </Text>
            <Text >{item.title} </Text>
          </View>
        );
      }

    //AJX code
    return (
        <View style={styles.container}>
        {/*button to create plan */}
        <AddPlanHandler />


        <View>
        <FlatList
        data={plans}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
		</View>
      </View>
    );
}

{/* Styling */}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    /// Button
    addp_container: {
        alignSelf: "flex-end",
        padding: 10,
    },
    addp_background: {
        backgroundColor: 'green',
        width: 70, height: 70,
        borderRadius: 70 / 2,
    },
    addp_txt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 50,
    },
    /// Lesson Plans
        iteminlist: {
            flexDirection: 'row',
            padding: 10,

            // add a line under each item
            borderBottomColor: 'grey',
            borderBottomWidth: 1,

            marginVertical: 10, /*add spacing between items */            


        }
      
});

export default PlanMaker;