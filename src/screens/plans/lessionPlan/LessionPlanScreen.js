import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

//import components
import AddPlanButton from '../lessionPlan/components/AddPlan';




const LessionPlanScreen = props => {

    const addScreenHandler = () => {
        console.log('open add-screen button');
        props.navigation.navigate('Add Plan');
    }

    return (
        <View style={styles.screen}>
            <Text>lession plan screen</Text>
            <AddPlanButton onPress={addScreenHandler}  />
            
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

export default LessionPlanScreen;

