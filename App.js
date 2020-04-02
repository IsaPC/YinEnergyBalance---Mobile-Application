import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import Header from './components/header';
export default function App() {
  return (
    <View style={styles.container}>
      <Header
      />
      
      <View style={styles.header}>
        <Text style={styles.boldText}> YIN YOGA or 
​UNBRIDLED.EMBODIED.LIVING COACHING </Text>
        </View>
        <Image 
        style={{width:415, flex: 0.89}}
        source={require ('./assets/yin1.png')}
      />
        <View style={styles.body}>
        <Text> Through an ongoing, gentle, physical practice of Yin Yoga begin to create space in both body and mind to explore self.  
          This journey is designed for those wanting to combine gentle (non-cardio) physical exercise with timeout to reconnect to your wholeness. </Text>
        <Text> This journey is designed for those who are ready to be supported to go deep, knowing that it’s time for real change in their lives, 
          and are willing to invest in their own wellbeing </Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'white',
    padding: 10,
    fontSize: 30,

  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
  

  },
  
  
});
