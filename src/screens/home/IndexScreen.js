import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const IndexScreen = props => {

    console.log('render home');

    return (
        <View style={styles.screen}>
            <Text>home screen</Text>
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

export default IndexScreen;