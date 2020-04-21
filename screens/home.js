import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { AsyncStorage } from 'react-native';

export default function Home({ navigation }) {
 
  const pressHandler = async () => {
    //navigation.navigate('ReviewDetails');
   navigation.push('Register');
   
  }
  const ViewUsers = async () => {
    //navigation.navigate('ReviewDetails');
   // navigation.push('Register');
   console.log(await A
    
    );
   console.log(await AsyncStorage.getItem('Age'));
   console.log(await AsyncStorage.getItem('Address'));
   console.log(await AsyncStorage.getItem('Phone'));
   console.log(await AsyncStorage.getItem('Email'));
   console.log(await AsyncStorage.getItem('Note'));
   
  }


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Hello welcome to Energy Balance. You can get the best 
        yoga service here. Please find the suitable service for you.
        Enjoy.</Text>
      <Button title= 'Register' onPress={pressHandler} />
      
      <Button style={globalStyles.but2} title= 'Show Users' onPress={ViewUsers} />
    </View>

  );
}