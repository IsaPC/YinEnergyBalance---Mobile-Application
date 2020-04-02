import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
 
  const pressHandler = () => {
    //navigation.navigate('ReviewDetails');
    navigation.push('Register');
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Hello welcome to Energy Balance. You can get the best 
        yoga service here. Please find the suitable service for you.
        Enjoy.</Text>
      <Button title= 'Register' onPress={pressHandler} />
      
    </View>

  );
}