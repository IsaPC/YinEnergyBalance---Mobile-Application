import React, { useState, Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

function PlanMaker() {
    //state //DONE TEMP DATA
    state = { plans:[
        {title: 'plan 1', imageurl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', id: '1'},
        {title: 'plan 2', imageurl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', id: '2'},
        {title: 'plan 3', imageurl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', id: '3'},
        {title: 'plan 4', imageurl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', id: '4'},
        {title: 'plan 5', imageurl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', id: '5'},
        {title: 'plan 6', imageurl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', id: '6'},
        {title: 'plan 7', imageurl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', id: '7'}  
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
    function ViewPlan () {
        return (
            <View style={{
                flexDirection: 'row',
                paddingRight: 10,
                paddingTop: 10
            }}>
                {/*Empty space */}
                <View style={{
                    flex: 1
                }}>
                </View>

                {/*green button */}
                <TouchableOpacity onPress={addPlan /*button */}>
                <View style={{
                    backgroundColor: 'green',
                    width: 70,
                    height: 70,
                    borderRadius: 70 / 2,
                }}
                >
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 50,
                    }}
                    >
                    +</Text>
                </View> 
                </TouchableOpacity>

            </View>

        );
    }


    //a function to contain AJX for the list of plans
    function LessonPlan ({ item }) {
        return (
            <View style={styles.containplan}>
            {/*TODO add source */}
            
            {/*View Plan */}
            <TouchableOpacity onPress={viewPlan /*button */} style={{flex: 2, flexDirection: 'row'}}>
                <Image source={{uri:item.imageurl}} style={{width:60, height:60,borderRadius:30}} />
                <View style={{alignItems:"center",flex:1}}>
                <Text style={{fontWeight:"bold", fontSize: 16}}>{item.title}</Text>
                </View>
            </TouchableOpacity>

            {/*edit Plan */}
            <TouchableOpacity onPress={editPlan /*button */} 
                style={{height:50,width:50, justifyContent:"center",alignItems:"center"
                }}>
                

              <Text style={{color:"blue"}}>Edit</Text>
            </TouchableOpacity>
          </View>
        );
    }
      

    //AJX code
    return (
        <View style={styles.container}>
        {/*button to create plan */}
        <ViewPlan />

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
      containplan: {
        margin:10,
        padding:10,
        backgroundColor:"#FFF",
        width:"80%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
      }
      
});

export default PlanMaker;