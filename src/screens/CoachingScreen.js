/* Screen created by Minh */

import React, { Component } from 'react';
import { View, Text, Image, Button} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';


class CoachingScreen extends Component {
    render () {
        return (
        <ScrollView>
            <View> 
                <Text style = {styles.title}>
                     YIN YOGA or 
​           UNBRIDLED.EMBODIED.LIVING COACHING </Text>
                <Image
                    source={require('../image/yin2.jpg')}
                    style={{alignSelf: 'center', marginTop: 0, marginBottom: 10,}}
                > 
                </Image>

                <Text style={styles.titleStyle}>Yin Yoga</Text>
                <Text style={styles.noteStyle}> Private, weekly, face-to-face in Dandenong or your venue, 75 minute sessions
                    A combination of physical body stretches with relaxation/meditation/contemplation.
                </Text>

                <Text style={styles.titleStyle}>
                    UNBRIDLED.EMBODIED.LIVING COACHING
                </Text>
                <Text style={styles.noteStyle}>A unique, one-on-one coaching journey over three months.  Face-to-face in Dandenong or online anywhere in the world. </Text>

                <View>
                    <Button
                        title="Go to Notes"
                        onPress={() => this.props.navigation.navigate('Notes', { screen: 'Add Notes' })}
                    />       
                </View>
            </View>   
        </ScrollView>
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
        fontSize: 16, 
    
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
  title: {
    color: 'black', 
    fontSize: 16, 
    justifyContent: 'center', 
    fontWeight: 'bold',
    backgroundColor: '#e6ffe6',
    padding: 10
},
  
}


export default CoachingScreen;


      