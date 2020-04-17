import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet , Button, Alert } from 'react-native';

// image picker import
import * as ImagePicker from 'expo-image-picker';

// IOS - permissions import
import * as Permissions from 'expo-permissions';

const EditImgPicker = props => {
    //save image URI
    const [pickedImage, setPickedImage] = useState();
    const [oldImage, setOldImage] = useState(props.oldImage);

    /// IOS only - ask for camera permissions
    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA);

        if (result.status !== 'granted') {
            Alert.alert('insufficient permissions!', 'You need to grant camera permissions to use this feature', 
            [{text: 'Okay'}]
            );
            return false;
        }
        return true;
    }
    
    // CHECK PERMISSIONS AND SAVE IAMGE
    const takeImageHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }
        const image = await ImagePicker.launchCameraAsync({
            //allowsEditing: true, // TODO change from ImageEditor.cropImage() to expo ImageManipulator.
            aspectRatio: [16, 9],
            quality: 0.6,
        });

        setPickedImage(image.uri);
        props.onImageTaken(image.uri);
    }

    return (
        <View>
            {/* Preview Image */}
            <View style={styles.imageContainer}>
                {!pickedImage ? (
                    <Image style={styles.styledimage} source={{uri: oldImage}} />
                ) : (
                    <Image style={styles.styledimage} source={{uri: pickedImage}} />
                )}
                
                {/* TAKE IMAGE */}

                <TouchableOpacity onPress={takeImageHandler} style={styles.galleryContainer}>
                    <Image 
                        source={require("../../../assets/Camera_Icon.png")} 
                        style={styles.addphoto} 
                    />
                </TouchableOpacity>
            </View>
            

        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        alignSelf: 'center',
        justifyContent: "center",
        paddingRight: 50,
        margin: 0,
        flexDirection: 'row'
    },
    // image
    styledimage: {
        backgroundColor: 'rgb(238, 238, 238)',
        width: 270,
        height: 270,
        borderRadius: 270 / 2
    },
    //gallary Container
    galleryContainer: {
        height: 580*0.2,
        width: 497*0.2,
        paddingHorizontal: 10,
        backgroundColor: 'green',
        alignItems: "center",
        justifyContent: "center",
    },

    // gallery Image
    addphoto: {
        alignSelf: 'center',
        width: 60,
        height: 60,
        borderRadius: 60 / 8,
    },
});

export default EditImgPicker;