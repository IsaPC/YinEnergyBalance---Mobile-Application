import React from 'react';
import {StyleSheet, ScrollView, Image, View, Text} from 'react-native';

// navigation guide https://reactnavigation.org/docs/params/

const ViewUser = props => {

    // route id here
    const { detailsId, detailsName, age, address, phone, email, notes, } = props.route.params;

    // select the id from redux from db
    // const selectedPlan = useSelector(state =>
    //     state.plans.plans.find(plan => plan.id.toString() === planId.toString())
    //     );


    return (
        <ScrollView>
            <View style={styles.titleContainer}>
                <Text style={styles.titleinput}>{detailsName}</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleinput}>{age}</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleinput}>{address}</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleinput}>{phone}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descInput}>{email}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descInput}>{notes}</Text>
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

export default ViewUser;