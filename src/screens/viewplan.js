import React from 'react'
import { StyleSheet, View, Text,  Image } from 'react-native'

function ViewPlan() {
  return ( // load the JSX
    <View style={styles.container}>
        <View style={styles.containImage}>
            <Image source={require("../../assets/TempImage.jpg")} style={styles.styledImage} />
        </View>
        <View style={styles.containTitle}>
            <Text style={styles.Title}> Title </Text>
        </View>
        <View style={styles.containContent}>
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
        flex: 4,
        backgroundColor: "red", //TODO change colour
        justifyContent: 'center',
        alignItems: 'center',
    },
    styledImage: {
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        overflow: "hidden", 
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
export default ViewPlan;