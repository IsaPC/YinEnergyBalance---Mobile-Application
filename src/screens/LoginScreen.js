import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Button, Image, ScrollView
} from 'react-native';
import NotesScreen from './screen';
class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Sessions',
    };
    render () {
        return (
            <ScrollView> 
            <View style={styles.container}> 
                

                  <Text style={styles.header}> 
        Yin Energy Balance
      </Text>

                <Text style = {styles.title}>
                     YIN YOGA or 
​UNBRIDLED.EMBODIED.LIVING COACHING </Text>


<Image
                  source={require('./image/yin1.png')}
                  
                > 
                </Image>
                
                           
<Text style={styles.text}> Through an ongoing, gentle, physical practice of Yin Yoga begin to create space in both body and mind to explore self.  
          This journey is designed for those wanting to combine gentle (non-cardio) physical exercise with timeout to reconnect to your wholeness. </Text>
        <Text style={styles.text}> This journey is designed for those who are ready to be supported to go deep, knowing that it’s time for real change in their lives, 
          and are willing to invest in their own wellbeing </Text>
                
                <View style={styles.button}>
  
                <Button onPress = { () =>
                this.props.navigation.navigate('HomeScreen')}title="Add Client "/>
                <Button onPress = { () =>
                this.props.navigation.navigate('HomeScreen')}title="Lesson Plans"/>  
                <Button onPress = { () =>
                this.props.navigation.navigate('CoachingScreen')}title="Coaching"/>         
              </View>

              
              

              
            </View>   
            </ScrollView>
        );
       

    }
    
};
const styles= {
    header: {
        color: 'black',
        fontWeight: 'bold', 
        fontSize: 25, 
        backgroundColor: 'lightgreen', 
        textAlign: 'center', 
        justifyContent: 'center'
    },
    title: {
        color: 'black', 
        fontSize: 18, 
        justifyContent: 'center', 
        fontWeight: 'bold'
    },
    button: {
        flexDirection: 'row',
        flex: 1, 
        justifyContent: 'center',
        textAlign: 'bottom'  
    },
    text: {
        fontSize: 18,
    }
          
}

export default LoginScreen;
