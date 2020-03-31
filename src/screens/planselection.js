/**
 * Dev: Isaac Ceff
 * description: give the ability to add plans into a list.
 */
import React, { useState, Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

function PlanMaker() {
    //state //DONE TEMP DATA
    state = { plans:[
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
    ]
}

    {/*functions */}
    addPlan = () => {
        console.log('add button pressed');
    }

    viewPlan = () => {
        console.log('view plan');
    }

    editPlan = () => {
        console.log('open up plan X');
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


    //a function to contain AJX for the list of plans
    function LessonPlan ({ item }) {
        return (
            <View style={styles.iteminlist}>
                {/*View Plan */}
                <TouchableOpacity onPress={viewPlan /*button */}>
                    {/* TODO Image */}
                    <View>
                        <Text >{item.title}</Text>
                    </View>
                </TouchableOpacity>

                {/*edit Plan */}
                <TouchableOpacity onPress={editPlan /*button */}>
                <Text style={{color:"blue"}}>Edit</Text>
                </TouchableOpacity>
          </View>
        );
    }
      

    //AJX code
    return (
        <View style={styles.container}>
        {/*button to create plan */}
        <AddPlanHandler />

        {/*List of plans */}
        <FlatList
          style={{flex:1}}
          data={this.state.plans}
          renderItem={({ item }) => <LessonPlan item={item}/>}
          keyExtractor={item => item.id}
        />
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
            padding: 10,
            marginVertical: 10, /*add spacing between items */
            borderBottomColor: 'black',
            borderBottomWidth: 1,
        }
      
});

export default PlanMaker;