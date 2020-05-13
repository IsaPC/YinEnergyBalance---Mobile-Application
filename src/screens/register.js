import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import { DetailsContext } from '../contexts/DetailsContext';
//import { createStackNavigator } from 'react-navigation-stack';
import { ScrollView } from 'react-native-gesture-handler';

const Register = props => {

    const { addDetails } = useContext(DetailsContext);

    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [addressValue, setAddressValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [noteValue, setNoteValue] = useState('');

    const nameChangeHandler = namePath => {
        //could add title validation
        setNameValue(namePath);
    }

    const ageChangeHandler = ageText => {
        //could add title validation
        setAgeValue(ageText);

    }
    const addressChangeHandler = addressText => {
        //could add title validation
        setAddressValue(addressText);

    }
    const phoneChangeHandler = phoneText => {
        //could add title validation
        setPhoneValue(phoneText);
    }
    const emailChangeHandler = emailText => {
        //could add title validation
        setEmailValue(emailText);
    }
    const noteChangeHandler = noteText => {
        //could add title validation
        setNoteValue(noteText);
    }
    const RegisterUserHandler = () => {
        // check that there is content
        if (nameValue.length === 0 || !nameValue) {
            console.log("\nName has not been inputted\n");
            Alert.alert("Error", "Name is empty!", [
                { text: 'Ok', onPress: () => console.log('alert closed') }
            ]);
        } else if (ageValue.length === 0 || !ageValue) {
            Alert.alert("Error", "Age is empty!", [
                { text: 'Ok', onPress: () => console.log('alert closed') }
            ]);
        }
        else {
            Alert.alert("Congrats", "Your Registration is successful", [
                {text:'Yes', onPress: () =>  addDetails(nameValue, ageValue, addressValue, phoneValue, emailValue, noteValue)},
                {text:'No', onPress: () =>  console.log('alert closed')}
            ]);
            console.log('\n\nclicked on Register');
            console.log('values being saved: ');
            console.log('Name :', nameValue, 'Age:', ageValue, 'Address:', addressValue, 'Phone:', phoneValue, emailValue, noteValue)
            console.log('going to "addUser from context"\n\n');


            // add item to context hook
            //addDetails(nameValue, ageValue, addressValue, phoneValue, emailValue, noteValue);
            setNameValue('');
            setAgeValue('');
            setAddressValue('');
            setPhoneValue('');
            setEmailValue('');
            setNoteValue('');
            props.navigation.navigate('View customers')

        }
    }
    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}> Please Register Here </Text>

                <View style={globalStyles.register}>

                    <TextInput style={globalStyles.textIn} placeholder="Full Name"
                        underlineColorAndroid={'transparent'} onChangeText={nameChangeHandler} value={nameValue} />

                    <TextInput style={globalStyles.textIn} placeholder="Age"
                        underlineColorAndroid={'transparent'} onChangeText={ageChangeHandler} value={ageValue} />

                    <TextInput style={globalStyles.textIn} placeholder="Address"
                        underlineColorAndroid={'transparent'} onChangeText={addressChangeHandler} value={addressValue} />

                    <TextInput style={globalStyles.textIn} placeholder="Phone"
                        underlineColorAndroid={'transparent'} onChangeText={phoneChangeHandler} value={phoneValue} />

                    <TextInput style={globalStyles.textIn} placeholder="Email"
                        underlineColorAndroid={'transparent'} onChangeText={emailChangeHandler} value={emailValue} />

                    <TextInput style={globalStyles.textBux} placeholder="Please specify if you would like me to know"
                        underlineColorAndroid={'transparent'} onChangeText={noteChangeHandler} value={noteValue} />

                    <Button style={globalStyles.Butt} title='Register' onPress={RegisterUserHandler} />
                </View>
            </View>
        </ScrollView>
    );
}
export default Register;