import React, { useState, useContext } from 'react';
import {StyleSheet, View, TextInput, Button, Alert } from 'react-native';

//import context
import { PlanContext } from '../contexts/PlanContext';

//import components
import ImagePicker from './Components/ImageSelector';

const AddPlanScreen = props => {
    const { addPlan } = useContext(PlanContext) ;
 

    /// --- TITLE ---
    // control the title input
    const [titleValue, setTitleValue] = useState('');

    // set the title
    const titleChangeHandler = titletext => {
        //could add title validation
        setTitleValue(titletext);
    }
    ///

        /// --- DESC ---
    // control description input
    const [descValue, setValueDesc] = useState('');

    const descChangeHandler = desctext => {
        //could add title validation
        setValueDesc(desctext);
    }
    ///

    /// --- IMAGE ---
    //save image url
    const [imageUri, setImageUri] = useState('');

    const imageTakenHandler = imagePath => {
        setImageUri(imagePath);
    }
    ///


    const SavePlanHandler = () => {
        
        // check that thier is content
        if (titleValue.length === 0 || !titleValue) {
            console.log("\nTitle has not been inputted\n");
            Alert.alert("Error", "Title is empty!", [
                {text: 'Ok', onPress: () => console.log('alert closed')}
            ]);
         } else if (imageUri.length === 0 || !imageUri) {
            Alert.alert("Error", "no image taken!", [
                {text: 'Ok', onPress: () => console.log('alert closed')}
            ]);
         }
        else {

            console.log('\n\nclicked on save');
            console.log('values being saved: ');
            console.log(titleValue, imageUri, descValue);
            console.log('going to "addPlan from context"\n\n');

            // add item to context hook
            addPlan(titleValue, imageUri, descValue);
            props.navigation.goBack();
        }
    }
    ///

    return (
        <View style={styles.screen}>
            <ImagePicker onImageTaken={imageTakenHandler} />

            <TextInput
                placeholder='Input title' placeholderTextColor="grey"
                placeholderTextColor='black'
                style={{}}
                onChangeText={titleChangeHandler} 
                value={titleValue}
            />

            <TextInput  
                placeholder='description' placeholderTextColor="grey"
                multiline
                placeholderTextColor='black'
                style={{}}
                onChangeText={descChangeHandler} 
                value={descValue}    
            />

            <Button
                onPress={SavePlanHandler}
                title="Save"
                color="rgb(0, 222, 7)"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignSelf: 'center'
    }
});

export default AddPlanScreen;