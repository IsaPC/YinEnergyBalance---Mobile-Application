import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { AsyncStorage } from 'react-native';
export default function Register({ navigation }) {

  
  const pressHandler = async () => {

      try { 
        
        await AsyncStorage.setItem('NAME', 'Aashish');
        await AsyncStorage.setItem('AGE', '23');
        await AsyncStorage.setItem('ADDRESS', 'I like to save it.');
        await AsyncStorage.setItem('PHONE', '4444');
        await AsyncStorage.setItem('EMAIL', 'I like to save it.');
        await AsyncStorage.setItem('NOTE', 'I like to save it.');
      
      
      } 
      catch (error) {     // Error saving data   } }
      }
      console.log(await AsyncStorage.getItem('TASKS'));
    }
        return (
        <View style={globalStyles.container}>
          <Text style={globalStyles.titleText}> Please Register Here </Text>

          <View style={globalStyles.register}>

            <TextInput  style={globalStyles.textIn} placeholder="Full Name"
              underlineColorAndroid={'transparent'} />

            <TextInput style={globalStyles.textIn} placeholder="Age"
              underlineColorAndroid={'transparent'} />

            <TextInput style={globalStyles.textIn} placeholder="Address"
              underlineColorAndroid={'transparent'} />

            <TextInput style={globalStyles.textIn} placeholder="Phone"
              underlineColorAndroid={'transparent'} />

            <TextInput style={globalStyles.textIn} placeholder="Email"
              underlineColorAndroid={'transparent'} />

            <TextInput style={globalStyles.textBux} placeholder="Please specify if you would like me to know"
              underlineColorAndroid={'transparent'} />

            <Button style={globalStyles.Butt} title='Register' onPress={pressHandler} />

          </View>


        </View>
      );
    }
  