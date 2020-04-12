import React, { useState, useContext } from 'react';
import {StyleSheet, ScrollView, Image, View, Text, TextInput, Button } from 'react-native';

//context
import { PlanContext } from '../contexts/PlanContext';

// navigation guide https://reactnavigation.org/docs/params/

const EditPlanScreen = props => {
    //context
    const {editPlan } = useContext(PlanContext);
    


    const { planId, planTitle, imageUri, description, otherParam } = props.route.params;


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
            console.log(titleValue + '\n' + imageUri + '\n' + descValue);
            console.log('going to "EditPlan from context"\n\n');
            
            editPlan(planId, titleValue, imageValueUri, descValue);
            props.navigation.goBack();
        }
    }
    ///

    return (
        <ScrollView>
            <View>
                <Image style={styles.image} source={{uri: imageValueUri}} />
            </View>

            <TextInput
                style={{}}
                onChangeText={titleChangeHandler} 
                value={titleValue}
            />

            <TextInput  
                multiline
                style={{}}
                onChangeText={descChangeHandler} 
                value={descValue}    
            />

            <Button
                onPress={SavePlanHandler}
                title="Save"
                color="rgb(0, 222, 7)"
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignSelf: 'center'
    },
    image: {
        width: 250, height: 250,
        borderRadius: 250,
        backgroundColor: 'purple'
    }
});

export default EditPlanScreen;