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
            <View>
                <Image style={styles.image} source={{uri: imageUri}} />
            </View>
            <View>
                <Text>{planTitle}</Text>
            </View>
            <View>
                <Text>{description}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    image: {
        width: 250, height: 250,
        borderRadius: 250,
        backgroundColor: 'purple'
    }
});

export default ViewPlanScreen;