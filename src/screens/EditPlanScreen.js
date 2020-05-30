/* Screen created by Isaac */

import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, ScrollView, View, TextInput, Button, Alert, Keyboard } from 'react-native';

import ImgPicker from './Components/editImagePicker';

//context
import { PlanContext } from '../contexts/PlanContext';
import { deletePlan } from '../database/db';

// navigation guide https://reactnavigation.org/docs/params/

const EditPlanScreen = props => {
    //context
    const {editPlan, removePlan } = useContext(PlanContext);
    const { planId, planTitle, imageUri, description, otherParam } = props.route.params;

    //hide imagePicker if keyboard is open
    const [keyBOpen, SetkeyBOpen] = useState(false);

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    
        // cleanup function
        return () => {
          Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
          Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
      }, []);

      const _keyboardDidShow = () => {
        SetkeyBOpen(true);
    };

      const _keyboardDidHide = () => {
        SetkeyBOpen(false);
    };


/// --- TITLE ---
// control the title input
    const [titleValue, setTitleValue] = useState(planTitle);

    // set the title
    const titleChangeHandler = titletext => {
        //could add title validation
        setTitleValue(titletext);
    }
    ///

    /// --- DESC ---
    // control description input
    const [descValue, setValueDesc] = useState(description);

    const descChangeHandler = desctext => {
        //could add title validation
        setValueDesc(desctext);
    }
    ///

        /// --- IMAGE ---
    //save image url
    const [imageValueUri, setImageUri] = useState(imageUri);

    
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
         }
        else {
            // what is going to be saved
            console.log('\n\nclicked on save');
            console.log('values being saved: ');
            console.log(titleValue + '\n' + imageValueUri + '\n' + descValue);
            console.log('going to "EditPlan from context"\n\n');
            
            editPlan(planId, titleValue, imageUri,imageValueUri, descValue);
            props.navigation.goBack();
        }
    }
    ///

    const deletePlanHandler = () => {
        Alert.alert("do you want to delete this?", "", [
            { 
                text:"Yes", 
                onPress: () => {
                    console.log('delete plan: ' + titleValue);
                    console.log(imageValueUri, imageUri);
                    removePlan(planId, imageValueUri);
                    props.navigation.goBack();
                }
            } , {
                text:"No",
                onPress: () => console.log('alert closed')
            }
        ]);
    }

    return (
        <View style={{flex: 1}}>  
            
            {!keyBOpen ? (
                   <ImgPicker onImageTaken={imageTakenHandler} oldImage={imageUri}/>
                ) : (
                   <View />
                )}
            
            
            
            
            <View style={styles.containTitle}>
                <TextInput
                        style={styles.titleinput}
                        onChangeText={titleChangeHandler} 
                        value={titleValue}
                />
            </View>
            
            <View  style={{flex: 1}}>
                <TextInput  
                    multiline
                    style={styles.descriptioninput}
                    onChangeText={descChangeHandler} 
                    value={descValue}    
                />
            </View>
            <View style={{flex: 0.1,justifyContent: 'flex-end'}}>
                <Button
                        onPress={SavePlanHandler}
                        title="Save"
                        color="rgb(0, 222, 7)"
                    />
                    <Button onPress={deletePlanHandler}
                        title="delete"
                        color="rgb(168, 9, 217)"
                    />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignSelf: 'center'
    },
    containTitle: {
        paddingLeft:115
    },
        titleinput: {
            fontSize: 27,
            padding: 5,
        },
    descriptionContainer: {
        padding: 5
    },
        descriptioninput: {
            fontSize: 24,
        }
});

export default EditPlanScreen;