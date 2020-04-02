import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}> YIN ENERGY BALANCE </Text>
        </View>
        
      
  )
}

const styles = StyleSheet.create({
    header: {
      height: 80,
      backgroundColor: 'lightgreen',
      flex: 0.11, //for android = 0.14
      
    },
    title: {
        textAlign: 'center',
        color: 'black',
        fontSize: 34,
        fontWeight: 'bold',
        padding: 30,
    
        
    },
});
