import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import { DetailsContext } from '../contexts/DetailsContext';
import ViewUser from '../screens/ViewUser';

const Edit = props => {

    const { editDetails, removeDetails } = useContext(DetailsContext);
    const { userid, username, useraddress, userage, userphone, useremail, usernote } = props.route.params; // FIXED ERROR

    const [userId, SetUserId] = useState(userid);
    const [nameValue, setNameValue] = useState(username);
    const [ageValue, setAgeValue] = useState(userage);
    const [addressValue, setAddressValue] = useState(useraddress);
    const [phoneValue, setPhoneValue] = useState(userphone);
    const [emailValue, setEmailValue] = useState(useremail);
    const [noteValue, setNoteValue] = useState(usernote);

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
    const UpdateUserInfoHandler = () => {
        // check that there is content
        if (nameValue.length === 0 || !nameValue) {
            console.log("\nName cannot be blank \n");
            Alert.alert("Error", "Name is empty!", [
                { text: 'Ok', onPress: () => console.log('alert closed') }
            ]);
        } else if (ageValue.length === 0 || !ageValue) {
            Alert.alert("Error", "Age is empty!", [
                { text: 'Ok', onPress: () => console.log('alert closed') }
            ]);
        }
        else {
            Alert.alert("Hey There", "Are you sure to update",[
                {text:'Yes', onPress: () => editDetails(userId,nameValue, ageValue, addressValue, phoneValue, emailValue, noteValue)},
                {text:'No', onPress: () => console.log('alert closed')},

            ])
            console.log('\n\nclicked on Edit User Detail');
            console.log('Name :', nameValue, 'Age:', ageValue, 'Address:', addressValue, 'Phone:', phoneValue, 'Email:', emailValue, 'Note:', noteValue);
            //editDetails(userId,nameValue, ageValue, addressValue, phoneValue, emailValue, noteValue);
            props.navigation.goBack();
        }
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}> Please Register Here </Text>

            <View style={globalStyles.register}>

                <TextInput style={globalStyles.textIn} placeholder="Full Name"
                    underlineColorAndroid={'transparent'} onChangeText={nameChangeHandler} value={nameValue} />

                <TextInput style={globalStyles.textIn} placeholder="Age"
                    underlineColorAndroid={'transparent'} onChangeText={ageChangeHandler}  value={ageValue}/>

                <TextInput style={globalStyles.textIn} placeholder="Address"
                    underlineColorAndroid={'transparent'} onChangeText={addressChangeHandler} value={addressValue} />

                <TextInput style={globalStyles.textIn} placeholder="Phone"
                    underlineColorAndroid={'transparent'} onChangeText={phoneChangeHandler} value={phoneValue} />

                <TextInput style={globalStyles.textIn} placeholder="Email"
                    underlineColorAndroid={'transparent'} onChangeText={emailChangeHandler} value={emailValue} />

                <TextInput style={globalStyles.textBux} placeholder="Please specify your health, physical conditions"
                    underlineColorAndroid={'transparent'} onChangeText={noteChangeHandler} value={noteValue} />

                <Button style={globalStyles.Butt} title='Update User Details' onPress={UpdateUserInfoHandler} />
            </View>
        </View>
    );
}
export default Edit;
