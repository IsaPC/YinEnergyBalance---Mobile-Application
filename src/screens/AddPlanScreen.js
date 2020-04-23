import React, { useState, useContext } from 'react';
import {StyleSheet, View, TextInput, Button, Alert, ScrollView } from 'react-native';

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
        <ScrollView>
            <View style={styles.screen}>
                <ImagePicker onImageTaken={imageTakenHandler} />

                <View style={styles.titleContainer}>
                    <TextInput
                        placeholder='Input Title:'
                        placeholderTextColor="grey"
                        style={styles.titleinput}
                        onChangeText={titleChangeHandler} 
                        value={titleValue}
                    />
                </View>

                <View style={styles.descriptionContainer}>
                    <TextInput  
                        placeholder='description:' 
                        placeholderTextColor="grey"
                        multiline
                        style={styles.descInput}
                        onChangeText={descChangeHandler} 
                        value={descValue}    
                    />
                </View>

                <View style={styles.saveButton}>
                    <Button
                        onPress={SavePlanHandler}
                        title="Save"
                        color="rgb(0, 222, 7)"
                    />
                </View>
            </View>

        </ScrollView>  
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection:  'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: "100%",
        height: "100%"
    },
    titleContainer: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#EEEEEE',
        padding: 5,
        margin: 5,
        borderRadius: 6,
    },
        titleinput: {
            fontSize: 27,
            padding: 5,
        },
    descriptionContainer: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#EEEEEE',
        padding: 5,
        margin: 5,
        borderRadius: 6,
        
    },
        descInput: {
            fontSize: 24,
            padding: 10
        },
    saveButton: {

        alignSelf: 'flex-end',
        padding: 10,
        position: 'relative',
        bottom: 0,
        alignSelf: "center"
    }
});

export default AddPlanScreen;