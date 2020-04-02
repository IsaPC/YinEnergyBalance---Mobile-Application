import React,{ useState} from 'react';
import { StyleSheet, View, Text, Image,CheckBox} from 'react-native';
import logo from '../assets/yin.png';
export default function Session() {
    return (
        <View style={styles.content}>
            <Text style={styles.uppertext}>
                YIN YOGA OR UNBRIDLED.
                EMBODIMENT.LIVING COACHING
            </Text>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.instructions} >
                Through an ongoing, gentle, physical practice of Yin Yoga begin to create space in both body and mind to explore self.
                This joourney is designed for those wanting to combine gentle (non-cardio) physical excercise with timeout to reconnect to your wholeness.
             </Text>
            <CheckBox style={styles.chkSession} title="Coaching Session"/>
        </View>
    )
}
const styles = StyleSheet.create({
    content: {
        paddingTop: 20,
        backgroundColor: '#fff',
    },
    uppertext: {
        fontWeight: "bold",
        fontSize: 22,
    },
    logo: {
        width: 360,
        height: 200,
        marginTop: 20,
        marginBottom: 10,
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        paddingBottom: 20,
    },
    chkSession: {
        alignSelf: "baseline",
    },
});
