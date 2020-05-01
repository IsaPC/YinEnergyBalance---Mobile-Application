/* Screen created by Isaac */
import React from 'react';
import {StyleSheet, ScrollView, Image, View, Text} from 'react-native';

// navigation guide https://reactnavigation.org/docs/params/

const ViewPlanScreen = props => {

    // route id here
    const { planId, planTitle, imageUri, description, otherParam } = props.route.params; // get the id of the plan

    // select the id from redux from db
    // const selectedPlan = useSelector(state =>
    //     state.plans.plans.find(plan => plan.id.toString() === planId.toString())
    //     );


    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: imageUri}} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleinput}>{planTitle}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descInput}>{description}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    imageContainer: {
        alignSelf: 'center',
        paddingTop: 5
    },
    image: {
        width: 350, height: 350,
        borderRadius: 350,
        backgroundColor: 'purple',
    },
    titleContainer: {
        padding: 5,
        margin: 5,
        alignSelf: 'center'
    },
        titleinput: {
            fontSize: 27,
            padding: 5,
        },
    descriptionContainer: {
        padding: 5,
        margin: 5,
        borderRadius: 6,
    },
    descInput: {
        fontSize: 24,
        padding: 10
    },
});

export default ViewPlanScreen;