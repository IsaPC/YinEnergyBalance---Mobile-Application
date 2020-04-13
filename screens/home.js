import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { AsyncStorage } from 'react-native';
export default function Home({ navigation }) {
 
  const pressHandler = async () => {
    //navigation.navigate('ReviewDetails');
   navigation.push('Register');
   
  }
  const print = async () => {
    //navigation.navigate('ReviewDetails');
   // navigation.push('Register');
   console.log(await AsyncStorage.getItem('NAME'));
   console.log(await AsyncStorage.getItem('AGE'));
   console.log(await AsyncStorage.getItem('ADDRESS'));
   console.log(await AsyncStorage.getItem('PHONE'));
   
  }


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Hello welcome to Energy Balance. You can get the best 
        yoga service here. Please find the suitable service for you.
        Enjoy.</Text>
      <Button title= 'Register' onPress={pressHandler} />
      
      <Button title= 'Print' onPress={print} />
    </View>

  );
}