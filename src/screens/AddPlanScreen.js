/* Screen created by Isaac */

import React, { useState, useContext, useEffect } from 'react';
import {StyleSheet, View, TextInput, Button, Alert, ScrollView, Keyboard  } from 'react-native';

//import context
import { PlanContext } from '../contexts/PlanContext';

//import components
import ImagePicker from './Components/ImageSelector';

const AddPlanScreen = props => {
    const { addPlan } = useContext(PlanContext) ;
 
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
        <View  style={{flex: 1, backgroundColor: 'white'}}>

                {!keyBOpen ? (
                   <ImagePicker onImageTaken={imageTakenHandler} />
                ) : (
                   <View />
                )}
                
            <View style={styles.descriptionContainer}>
                <TextInput
                    placeholder='Input Title:'
                    placeholderTextColor="grey"
                    style={styles.titleinput}
                    onChangeText={titleChangeHandler} 
                    value={titleValue}
                />
            </View>
            <View  style={{flex: 1}}>
                
                
                <ScrollView>
                    <View style={styles.titleContainer}>
                        <TextInput  
                            placeholder='description:' 
                            placeholderTextColor="grey"
                            multiline
                            style={styles.descInput}
                            onChangeText={descChangeHandler} 
                            value={descValue}    
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={{flex: 0.1,justifyContent: 'flex-end'}}>
                <Button
                    onPress={SavePlanHandler}
                    title="Save"
                    color="rgb(0, 222, 7)"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    
});

export default AddPlanScreen;