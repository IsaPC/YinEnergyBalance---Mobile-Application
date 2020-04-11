import React from 'react';
import {StyleSheet, ScrollView, Image, View, Text} from 'react-native';
import { useSelector } from 'react-redux';

// navigation guide https://reactnavigation.org/docs/params/

const ViewPlanScreen = props => {

    const { planId, otherParam } = props.route.params; // get the id of the plan

    // select the id from redux from db
    const selectedPlan = useSelector(state =>
        state.plans.plans.find(plan => plan.id === planId.toString())
        );

        console.log('\n\nwhats in the selected plan:');
        console.log(selectedPlan.imageUri.toString());

    return (
        <ScrollView>
            <View>
                <Image style={styles.image} source={{uri: selectedPlan.imageUri}} />
            </View>
            <View>
                <Text>{selectedPlan.title}</Text>
            </View>
            <View>
                <Text>{selectedPlan.description}</Text>
            </View>
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

export default ViewPlanScreen;