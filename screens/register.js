import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Register({ navigation }) {
    const pressHandler = () => {
        
        //navigation.push('Home');
      }
    return(
        <View style={globalStyles.container}> 
            <Text style={globalStyles.titleText}> Please Register Here </Text>
                
                <View style={globalStyles.register}>
                   
                    <TextInput style={globalStyles.textIn} placeholder = "Full Name"
                    underlineColorAndroid={'transparent'} />

                    <TextInput style={globalStyles.textIn} placeholder = "Age"
                    underlineColorAndroid={'transparent'} />

                    <TextInput style={globalStyles.textIn} placeholder = "Address"
                    underlineColorAndroid={'transparent'} />
                    
                    <TextInput style={globalStyles.textIn} placeholder = "Phone"
                    underlineColorAndroid={'transparent'} />
                    
                    <TextInput style={globalStyles.textIn} placeholder = "Email"
                    underlineColorAndroid={'transparent'} />

                    <TextInput style={globalStyles.textBux} placeholder = "Please specify if you would like me to know"
                    underlineColorAndroid={'transparent'} />

                    <Button style={globalStyles.Butt} title= 'Register' onPress={pressHandler} />
               
                </View>
        
        
        </View>
    );
}
