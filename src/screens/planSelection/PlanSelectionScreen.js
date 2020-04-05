import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

// components
import AddButton from './AddButton';
import LessionPlanItem from './LessionPlanItem';

const Stack = createStackNavigator();

// navigation
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// screens to navigate
import CreatePlan from '../createPlan/CreatePlanScreen';


const PlanSelectionScreen = props => {
// log props
    console.log(props);

    const navigation = useNavigation();



    //TODO
    const addScreenHandler = () => {
        console.log('open new screen');
        navigation.navigate('AddPlan');
    }




    //JSX
    return (
        //remove keyboard if user touches empty space
        <TouchableWithoutFeedback
        onPress={() => {
            Keyboard.dismiss();
        }}
        >
            <View>
                {/* ADD Button */}
                <AddButton onPress ={addScreenHandler} style={styles.button}/>

                
                    {/* divider */}
                    <View style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        padding: 2,
                    }}>
                    </View>

                {/* list of plans */}
                    <LessionPlanItem />
            </View>
        </TouchableWithoutFeedback>
    );
}; {/* END */}



//styling
const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
      },
});

export default PlanSelectionScreen;