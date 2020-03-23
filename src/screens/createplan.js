/*
I want to make a "createplan screen"
*/

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'

function CreatePlan() {
  return ( // load the JSX
    <View style={styles.container}>

        {/* the top of the mobile application */}
        <View style={styles.top}>
            <View style={styles.containImage}>
                <Image source={require("../../assets/TempImage.jpg")} style={styles.styledImage} />
            </View>

                {/*TODO add option to add image from Gallary */}
            <View style={styles.containButton}>
                
            </View>
        </View>

        {/* contains the title */}
        <View style={styles.containTitle}>
            {/*TODO change to text input */}
            <Text style={styles.Title}> Title </Text>
        </View>

        {/* contains the contents */}
        <View style={styles.containContent}>
            {/*TODO change to text input */}
            <Text style={styles.description}> 
            in plan you will jump and run on the spot </Text>
        </View>

    </View>
  );
}

// styles for JSX
const styles = StyleSheet.create({
    container: { // TODO use a global setting
        flex: 1,
        backgroundColor: '#ebebeb'
    },

    containImage: {
       
        backgroundColor: "red", //TODO change colour
        justifyContent: 'center',
        alignItems: 'center',
    },
    containButton: {
    
    },

    styledImage: {
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "green" //TODO change colour
        
    },
    containTitle: {
        flex: 1,
        backgroundColor: "green" //TODO change colour
    },
    Title: {
        textAlign: 'center',
        fontSize: 45,
        color: '#2A2A2A'

    },
    containContent: {
        flex: 3,
        
        backgroundColor: "yellow", //TODO change colour
    },
    description: {
        textAlign: 'center',
        fontSize: 20,
        color: '#2A2A2A' //TODO change colour
    }

})

// export function
export default CreatePlan;