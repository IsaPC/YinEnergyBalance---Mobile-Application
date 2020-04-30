import React, { Component } from 'react';
import {
    View, Text, TextInput, ImageBackground, Image, KeyboardAvoidingView, Button, SafeAreaView,
    
} from 'react-native';
import StyleSheet from './styles/styles';
import TouchableOpacity from './styles/touch';
import { ScrollView } from 'react-native-gesture-handler';

class CoachingScreen extends Component {
    static navigationOptions = {
        title: 'Coaching',
    };
    
    render () {
        return (
        
            <View>
                
                  <Text style= {styles.textStyle}> 
        Yin Energy Balance
      </Text>
      <Image
                  source={require('./image/yin2.jpg')}
                  style={{alignSelf: 'center', width: 410, marginTop: 10}}
                > 
                </Image>

                


                <Text style={styles.titleStyle}>
                Yin Yoga
                </Text>
                <Text style={styles.noteStyle}> Private, weekly, face-to-face in Dandenong or your venue, 75 minute sessions
A combination of physical body stretches with relaxation/meditation/contemplation.</Text>


    <Text style={styles.titleStyle}>
    UNBRIDLED.EMBODIED.LIVING COACHING
    </Text>
    <Text style={styles.noteStyle}>A unique, one-on-one coaching journey over three months.  Face-to-face in Dandenong or online anywhere in the world. </Text>

    <View>
  
  <Button
  onPress = { () =>
  this.props.navigation.navigate('Notes')}title="Add Notes "/>        
          
             
             
             
      
        
        
          
            
      </View>
        
            </View>   
            
            
        );
        

    }
}
const styles = {
    textStyle: {
        color: 'black',
        fontWeight: 'bold', 
        fontSize: 25, 
        backgroundColor: 'lightgreen', 
        textAlign: 'center', 
        justifyContent: 'center',
        
    },
    titleStyle: {
        color: 'black',
        fontWeight: 'bold', 
        fontSize: 20,
    },
    noteStyle: {
        color: 'black',
        fontWeight: '', 
        fontSize: 18, 
    
    },
    inputStyle: {
        color: 'black',
        fontWeight: 'bold', 
        fontSize: 15, 
        borderWidth: 1, 
        padding:20, 
        margin: 1, 
        
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 0,
    },
    button: {
      paddingBottom: 2,
      justifyContent: 'flex-end',
      position: 'absolute',
      bottom:0,
      marginBottom: 20
  },
  
    


}



export default CoachingScreen;