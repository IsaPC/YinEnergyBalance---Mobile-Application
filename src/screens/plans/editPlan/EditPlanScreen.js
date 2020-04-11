import React, { useState } from 'react';
import {StyleSheet, ScrollView, Image, View, Text, TextInput, Button } from 'react-native';
import { useSelector } from 'react-redux';

//redux
import { useDispatch } from 'react-redux';
import * as plansActions from '../../../store/actions/plans-actions';
// navigation guide https://reactnavigation.org/docs/params/

const EditPlanScreen = props => {
    const dispatch = useDispatch(); // used to send data to dispatch


    const { planId, otherParam } = props.route.params; // get the id of the plan

    // select the id from redux from db
    const selectedPlan = useSelector(state =>
        state.plans.plans.find(plan => plan.id === planId.toString())
    );

    // console.log('\n\nwhats in the selected plan:');
    // console.log(selectedPlan.imageUri.toString());

/// --- TITLE ---
// control the title input
    const [titleValue, setTitleValue] = useState(selectedPlan.title);

    // set the title
    const titleChangeHandler = titletext => {
        //could add title validation
        setTitleValue(titletext);
    }
    ///

    /// --- DESC ---
    // control description input
    const [descValue, setValueDesc] = useState(selectedPlan.description);

    const descChangeHandler = desctext => {
        //could add title validation
        setValueDesc(desctext);
    }
    ///

        /// --- IMAGE ---
    //save image url
    const [imageUri, setImageUri] = useState(selectedPlan.imageUri);

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
            console.log("\nUpdating: " + titleValue);
            
            // update items
            dispatch(plansActions.editPlan(selectedPlan.id, titleValue, selectedPlan.imageUri, imageUri, descValue));
            
            props.navigation.goBack();
        }
    }
    ///

    return (
        <ScrollView>
            <View>
                <Image style={styles.image} source={{uri: imageUri}} />
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