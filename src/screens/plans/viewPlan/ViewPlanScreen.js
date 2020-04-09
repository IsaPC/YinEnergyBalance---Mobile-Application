import React from 'react';
import {StyleSheet, ScrollView, Image, View, Text} from 'react-native';

// navigation guide https://reactnavigation.org/docs/params/

const ViewPlanScreen = props => {
    console.log("\nwhats in props.route: ");
    console.log(props);
    //const  itemId = props.route.params; // add array to 
    const { planId, imageUri, description, otherParam } = props.route.params;

    console.log('\n\n\n');
    console.log(planId);

    return (
        <ScrollView>
            <Image />

            <View>
                <Text>itemId: {JSON.stringify(planId)}</Text>
                <Text>imageUri: {JSON.stringify(imageUri)}</Text>
                <Image style={styles.image} source={{uri: props.image}} />
                <Text>description: {JSON.stringify(description)}</Text>
            </View>
            <View>
                <Text></Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignSelf: 'center'
    }
});

export default ViewPlanScreen;