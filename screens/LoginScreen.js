import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Button, Image, ScrollView
} from 'react-native';
class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Sessions',
    };
    render () {
        return (
            <View> 
                

                  <Text style={styles.header}> 
        Yin Energy Balance
      </Text>

                <Text style = {styles.title}>
                     YIN YOGA or 
​UNBRIDLED.EMBODIED.LIVING COACHING </Text>


<Image
                  source={require('./image/yin1.png')}
                  style={{width: undefined, height: '70%',justifyContent: 'center',top: 0 ,
                  left: 0, bottom: 0, position: 'relative', aspectRatio: 0.70, alignSelf: 'center',
                  bottom:0,}} // new addition
                > 
                </Image>
                
                <ScrollView pagingEnabled={true} onScroll={this.handleScroll} scrollEventThrottle={16} >             
<Text> Through an ongoing, gentle, physical practice of Yin Yoga begin to create space in both body and mind to explore self.  
          This journey is designed for those wanting to combine gentle (non-cardio) physical exercise with timeout to reconnect to your wholeness. </Text>
        <Text> This journey is designed for those who are ready to be supported to go deep, knowing that it’s time for real change in their lives, 
          and are willing to invest in their own wellbeing </Text>
                
                <View style={styles.button}>
  
                <Button onPress = { () =>
                this.props.navigation.navigate('HomeScreen')}title="Add Client "/>
                <Button onPress = { () =>
                this.props.navigation.navigate('CoachingScreen')}title="Lesson Plans"/>  
                <Button onPress = { () =>
                this.props.navigation.navigate('CoachingScreen')}title="Coaching Notes"/>         
              </View>

              
              </ScrollView>

              
            </View>   
            
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
        fontWeight: 'bold'
    },
    button: {
        flexDirection: 'row',
        flex: 1, 
        justifyContent: 'center'  
    }
          
}

export default LoginScreen;
