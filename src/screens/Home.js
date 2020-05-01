/* Screen created by Isaac */

import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Home = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image style={styles.styledimage} source={require("../../assets/home_image.jpg")} />
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.styledtitle}>Yin Energy Balance</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    imageContainer: {
        //backgroundColor: 'red',
        flex: 5,
        paddingTop:20,
        justifyContent: "center",
    },
        styledimage: {
            width: 400,
            height: 400,
            alignSelf: 'center',
            borderRadius: (490*0.9)/2,
        },
    titleContainer:{
        flex:2,
        paddingTop: 20,
        //backgroundColor: "green",
        alignSelf: 'center'
    },
        styledtitle: {
            fontSize: 40,
            //fontWeight: "bold"
        },
});

export default Home;