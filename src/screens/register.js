import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import { DetailsContext } from '../contexts/DetailsContext';
//import { createStackNavigator } from 'react-navigation-stack';

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
    }
    else {

      console.log('\n\nclicked on Register');
      console.log('values being saved: ');
      console.log('Name :',nameValue,'Age:', ageValue, 'Address:',addressValue, 'Phone:', phoneValue, emailValue, noteValue );
      console.log('going to "addUser from context"\n\n');

      // add item to context hook
      addDetails(nameValue, ageValue, addressValue, phoneValue, emailValue, noteValue);
      props.navigation.goBack();
      
    }
  }
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}> Please Register Here </Text>

      <View style={globalStyles.register}>

        <TextInput style={globalStyles.textIn} placeholder="Full Name" placeholderTextColor={'grey'}
          underlineColorAndroid={'transparent'} onChangeText={nameChangeHandler} />

        <TextInput style={globalStyles.textIn} placeholder="Age" placeholderTextColor={'grey'}
          underlineColorAndroid={'transparent'} onChangeText={ageChangeHandler} />

        <TextInput style={globalStyles.textIn} placeholder="Address" placeholderTextColor={'grey'}
          underlineColorAndroid={'transparent'} onChangeText={addressChangeHandler} />

        <TextInput style={globalStyles.textIn} placeholder="Phone" placeholderTextColor={'grey'}
          underlineColorAndroid={'transparent'} onChangeText={phoneChangeHandler} />

        <TextInput style={globalStyles.textIn} placeholder="Email" placeholderTextColor={'grey'}
          underlineColorAndroid={'transparent'} onChangeText={emailChangeHandler} />

        <TextInput style={globalStyles.textBux} placeholder="Please specify if you would like me to know" placeholderTextColor={'grey'}
          underlineColorAndroid={'transparent'} onChangeText={noteChangeHandler} />

        <Button style={globalStyles.Butt} title='Register' onPress={RegisterUserHandler} />
      </View>
    </View>
  );
}
export default Register;