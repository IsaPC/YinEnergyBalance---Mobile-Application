import React, { Component } from 'react';
import { View, Text, Image, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Instruction extends Component {
    static navigationOptions = {
        title: 'Intruction',
    };
    render () {
        return (
            <View>
                <ScrollView>
                <Text style={styles.manual}>
                    User Manual
                    </Text>
                <Text style={styles.layout}>
                    Layout and functions
                    </Text>

                <Image
                    source={require('../image/Home.png')}
                    style={{alignSelf: 'center', marginTop: 0, marginBottom: 10,}}
                > 
                    </Image>

                <Text>
                    Slide to the right to get to drawer navigation.
                    </Text>

                <Image
                    source={require('../image/Drawer.png')}
                    style={{alignSelf: 'center', marginTop: 0, marginBottom: 10,}}>
                    </Image>

                    <Text>
                      Tap on "Registration" to go to registration screen. Filling all the information of clients and touch "Register".
                      </Text>  
                      <Image
                    source={require('../image/Register.png')}
                    style={{alignSelf: 'center', marginTop: 0, marginBottom: 10,}}>

                    </Image>

                    <Text>
                        Go to "View Customer" screen to see clients and update details 
                        by tapping on icon next to the bin icon. Tap on the bin icon to delete customer.
                    </Text>
                    <Image
                    source={require('../image/Editregister.png')}
                    style={{alignSelf: 'center', marginTop: 0, marginBottom: 10,}}>

                    </Image>

                <Text>
                    Tap on "Lesson Plans" to create a lesson for clients. 
                    Tap on the green icon on the right to create lesson plans.
                    </Text>

                 <Image
                    source={require('../image/addlesson.png')}
                    style={{alignSelf: 'center', marginTop: 0, marginBottom: 10,}}>
                    </Image>   
                    <Text>
                    After filling the text, tap on "save". 
                    </Text>

                 <Image
                    source={require('../image/Lesson.png')}
                    style={{alignSelf: 'center', marginTop: 0, marginBottom: 10,}}>
                    </Image>   

                <Text>
                    Go to Lesson Plans screen again to see new clients.
                    Tap on "edit" to update lesson details.
                    </Text>

                <Image
                    source={require('../image/Editlesson.png')}
                    style={{alignSelf: 'center', marginTop: 0, marginBottom: 10,}}>

                    </Image>

                 <Text>
                    From drawer navigation, tap on "Calendar" to go to calendar screen. Select
                    date and time which suit client's needs best then tap on "Save".
                     </Text>  
                     <Image
                    source={require('../image/Calendar.png')}
                    style={{alignSelf: 'center', marginTop: 0, marginBottom: 10,}}>

                    </Image>

                    <Text>
                        Session screen shows brief description of some sessions.
                    </Text>
                    <Image
                    source={require('../image/Session.png')}
                    style={{alignSelf: 'center', marginTop: 0, marginBottom: 10,}}>

                    </Image>

                    <Text>
                        Swipe up to go to the bottom of the screen. 
                        In the bottom of session screen there are three buttons.
                        "Add Client" to go to registration screen.
                        "Lesson Plans" to go to Lesson plans screen.
                        "Coaching" to go to coaching screen.
                    </Text>
                    <Image
                    source={require('../image/button.png')}
                    style={{alignSelf: 'center', marginTop: 0, marginBottom: 10,}}>

                    </Image>

                    <Text>
                        Coaching screen shows details of lessons to be coached.
                        Swipe up to go down to bottom. There is a "Go to Notes" button.
                    </Text>
                    <Image
                    source={require('../image/Coaching.png')}
                    style={{alignSelf: 'center', marginTop: 0, marginBottom: 10,}}>

                    </Image>

                    <Text>
                        Tap on "Go to Notes" to go to note screen which records how the 
                        lesson has gone and how to improve it next time!
                        Tap on the box in the bottom and start inserting notes.  
                        Tap on the "x box" to delete the saved note. 
                    </Text>
                    <Image
                    source={require('../image/Note.png')}
                    style={{alignSelf: 'center', marginTop: 0, marginBottom: 10,}}>

                    </Image>






                </ScrollView>
            </View>
        );
    }
} 
const styles = {
    manual: {
        color: 'black',
        fontWeight: 'bold', 
        fontSize: 25, 
        backgroundColor: 'lightgreen', 
        textAlign: 'center', 
        justifyContent: 'center',
    },
    layout: {
        fontSize: 20,
        textAlign: 'center', 
        fontWeight: 'bold', 
    }
}
export default Instruction;