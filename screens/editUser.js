import React, { useState, useContext } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Button } from 'react-native';



//context
import { DetailsContext } from '../contexts/DetailsContext';
import { deleteDetails } from '../database/db';

// navigation guide https://reactnavigation.org/docs/params/

const EditUser = props => {
    //context
    const { editDetails, removeDetails } = useContext(DetailsContext);

    const { detailsId, detailsName, age, address, phone, email, notes, otherParam } = props.route.params;

    const [nameValue, setNameValue] = useState(detailsName);
    const [ageValue, setAgeValue] = useState(age);
    const [addressValue, setAddressValue] = useState(address);
    const [phoneValue, setPhoneValue] = useState(phone);
    const [emailValue, setEmailValue] = useState(email);
    const [noteValue, setNoteValue] = useState(notes);

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
        }
        else {
            console.log('\n\nclicked on Register');
            console.log('values being saved: ');
            console.log('Name :', nameValue, 'Age:', ageValue, 'Address:', addressValue, 'Phone:', phoneValue, 'Email:', emailValue, 'Note:', noteValue);
            console.log('going to "Edit USer from context"\n\n');

            // add item to context hook
            editDetails(detailsId, name, nameValue, ageValue, addressValue, phoneValue, emailValue, noteValue);
            props.navigation.goBack();

        }
    }
    ///

    const deleteDetailHandler = () => {
        console.log('delete detail: ' + nameValue);
        console.log(nameValue, name);
        removeDetails(detailsId, nameValue);
        props.navigation.goBack();
    }

    return (
        <ScrollView>
            <TextInput
                style={{}}
                onChangeText={nameChangeHandler}
                value={nameValue}
            />
            <TextInput
                style={{}}
                onChangeText={ageChangeHandler}
                value={ageValue}
            />
            <TextInput
                style={{}}
                onChangeText={addressChangeHandler}
                value={addressValue}
            />

            <TextInput
                multiline
                style={{}}
                onChangeText={phoneChangeHandler}
                value={phoneValue}
            />
            <TextInput
                multiline
                style={{}}
                onChangeText={emailChangeHandler}
                value={emailValue}
            />
            <TextInput
                multiline
                style={{}}
                onChangeText={noteChangeHandler}
                value={noteValue}
            />

            <Button
                onPress={RegisterUserHandler}
                title="Save"
                color="rgb(0, 222, 7)"
            />

            <Button onPress={deleteDetailHandler}
                title="delete"
                color="rgb(168, 9, 217)"
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignSelf: 'center'
    }
});

export default EditUser;