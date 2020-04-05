import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet , Button} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImgPicker = props => {

    const takeImageHandler = () => {
        ImagePicker.launchCameraAsync();
    }

    return (
        <View>
            {/* Preview Image */}
            <View style={styles.imageContainer}>
                <Image style={styles.styledimage} source={require("../../../assets/emptyImage.png")} />
                
                {/* TAKE IMAGE */}
                <Button 
                    style={styles.button}
                    title="takeImage"
                    color={'rgb(0,100,255)'}
                    onPress={takeImageHandler} 
                />
            </View>
            

        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        padding: 0,
        margin: 0,
        flexDirection: 'row'
    },
    styledimage: {
        backgroundColor: 'rgb(238, 238, 238)',
        alignSelf: 'center',
        width: 270,
        height: 270,
        borderRadius: 270 / 2
    },
    button: {
        width: 250,
        height: 250
    }
});

export default ImgPicker;