import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { DetailsContext } from '../contexts/DetailsContext';

export default function Register({ navigation }) {

  const { addPlan } = useContext(DetailsContext);

  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [Address, setAddress] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Note, setNote] = useState('');

  const NameChangeHandler = txtName => {
    //could add title validation
    setName(txtName);
  }

  const AgeChangeHandler = txtAge => {
    //could add title validation
    setAge(txtAge);

  }
  const AddressChangeHandler = txtAddress => {
    //could add title validation
    setAddress(txtAddress);

  }
  const PhoneChangeHandler = txtPhone => {
    //could add title validation
    setPhone(txtPhone);
  }
  const EmailChangeHandler = txtEmail => {
    //could add title validation
    setEmail(txtEmail);

  }
  const NoteChangeHandler = txtNote => {
    //could add title validation
    setNote(txtNote);
  }
  const RegisterUserHandler = () => {
    // check that thier is content
    if (Name.length === 0 || !Name) {
      console.log("\nTitle has not been inputted\n");
      Alert.alert("Error", "Title is empty!", [
        { text: 'Ok', onPress: () => console.log('alert closed') }
      ]);
    }
    else {

      console.log('\n\nclicked on save');
      console.log('values being saved: ');
      console.log(titleValue);
      console.log('going to "addPlan from context"\n\n');

      // add item to context hook
      //addPlan(Name, Age, Address, Phone, Email, Note);
    }
  }
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}> Please Register Here </Text>

      <View style={globalStyles.register}>

        <TextInput style={globalStyles.textIn} placeholder="Full Name"
          underlineColorAndroid={'transparent'} onChangeText={NameChangeHandler} />

        <TextInput style={globalStyles.textIn} placeholder="Age"
          underlineColorAndroid={'transparent'} onChangeText={AgeChangeHandler} />

        <TextInput style={globalStyles.textIn} placeholder="Address"
          underlineColorAndroid={'transparent'} onChangeText={AddressChangeHandler} />

        <TextInput style={globalStyles.textIn} placeholder="Phone"
          underlineColorAndroid={'transparent'} onChangeText={PhoneChangeHandler} />

        <TextInput style={globalStyles.textIn} placeholder="Email"
          underlineColorAndroid={'transparent'} onChangeText={EmailChangeHandler} />

        <TextInput style={globalStyles.textBux} placeholder="Please specify if you would like me to know"
          underlineColorAndroid={'transparent'} onChangeText={NoteChangeHandler} />

        <Button style={globalStyles.Butt} title='Register' onPress={RegisterUserHandler} />
      </View>
    </View>
  );
}
