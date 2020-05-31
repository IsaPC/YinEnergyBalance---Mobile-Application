/* Screen created by Minh */
import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Button, Image, ScrollView
} from 'react-native';

class Sessions extends Component {
    
    render () {
        return (
            <ScrollView> 
            <View style={styles.container}> 
                
                <Image
                  source={require('../image/yin1.png')}
                  style={{alignSelf: 'center', marginTop: 10, marginBottom: 10,}}>
                </Image>
                
                           
<Text style={styles.text}> Through an ongoing, gentle, physical practice of Yin Yoga begin to create space in both body and mind to explore self.  
          This journey is designed for those wanting to combine gentle (non-cardio) physical exercise with timeout to reconnect to your wholeness. </Text>
        <Text style={styles.text}> This journey is designed for those who are ready to be supported to go deep, knowing that it’s time for real change in their lives, 
          and are willing to invest in their own wellbeing </Text>
                
                <View style={styles.button}>
                <Button
            title="Add Client"
            onPress={() => this.props.navigation.navigate('Register', { screen: 'Register' })}/>   
            <Button
            title="Lesson Plans"
            onPress={() => this.props.navigation.navigate('Lession Plans', { screen: 'Lession Plans' })}/>
            <Button
            title="Coaching"
            onPress={() => this.props.navigation.navigate('Coachings', { screen: 'Coachings' })}/>          
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
        fontSize: 16, 
        justifyContent: 'center', 
        fontWeight: 'bold',
        backgroundColor: '#e6ffe6',
        padding: 10
    },
    button: {
        flexDirection: 'row',
        flex: 1, 
        justifyContent: 'center',
        textAlign: 'bottom'  
    },
    text: {
        fontSize: 16,
    }
          
}

export default Sessions;
