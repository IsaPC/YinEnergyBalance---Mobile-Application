/*
I want to make a "createplan screen"
*/

import React from 'react'
import { StyleSheet, View, Text, StatusBar ,  Image, TouchableWithoutFeedback } from 'react-native'

function CreatePlan() {
  return ( // load the JSX
    <View style={styles.container}>
        <View style={styles.containimage}>
            <View style={styles.box1}>
                <Text>box1</Text>
            </View>
            <View style={styles.box2}>
                <Text>box2</Text>
            </View>
        </View>

        <View style={styles.containtitle}></View>
        <View style={styles.containdesc}></View>

    </View>
  );
}

// styles for JSX
const styles = StyleSheet.create({
    container: { // TODO use a global setting
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',

    },
    containimage: {
        backgroundColor: 'green',
        padding: 10,
        flex: 1.5,
        flexDirection: 'row',
    },
    box1: {
        backgroundColor: 'brown',
        padding: 10,
        flex: 2,
    },
    box2: {
        backgroundColor: 'gray',
        padding: 10,
        flex: 1,
    },
    containtitle: {
        backgroundColor: 'red',
        padding: 10,
        flex: 0.5,
    },
    containdesc: {
        backgroundColor: 'blue',
        padding: 10, 
        flex: 1,
    }
})

// export function
export default CreatePlan;