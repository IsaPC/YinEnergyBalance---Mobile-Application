import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ViewPlanScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>view screen</Text>
        </View>
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