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
const PlanSelectionScreen = (props) => {
    const navigation = useNavigation();



    //TODO
    const addScreenHandler = () => {
        console.log('open new screen');
        navigation.navigate('AddPlan');
    }

    const Screen = (props) => {
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
    } 


    //JSX
    return (
        <Screen />
        // <Stack.Navigator initialRouteName="LessionPlan">
        //     <Stack.Screen name="LessionPlan" component={Screen} />
        //     <Stack.Screen name="AddPlan" component={CreatePlan}/>
        // </Stack.Navigator>

    );
}; {/* END */}



//styling
const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
      },
});

export default PlanSelectionScreen;