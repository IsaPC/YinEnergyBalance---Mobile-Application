import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

//import components
import AddPlanButton from '../lessionPlan/components/AddPlan';
import PlanItem from './components/planItem';

// redux
import { useSelector } from 'react-redux';



const LessionPlanScreen = props => {
    const plans = useSelector(state => state.plans.plans);

    const addScreenHandler = () => {
        console.log('open add-screen button');
        props.navigation.navigate('Add Plan');
    }

    return (
        <View style={styles.screen}>
            <View style={styles.button} >
                <AddPlanButton 
                    onPress={addScreenHandler}   
                />
            </View>

            <FlatList 
                data={plans}
                {...console.log(plans)} // TODO image not being saved
                keyExtractor={item => item.id}
                renderItem={ itemData => (
                    <PlanItem 
                    image={itemData.item.imageUri}
                    title={itemData.item.title}
                    onSeclectPlan={() => {
                        props.navigation.navigate('View Plan', {
                            planTitle: itemData.item.title,
                            placeId: itemData.item.id
                        });
                    }}
                    onEditPlan={() => {console.log('edit plan')}}
                    />
                     )}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        
    },
    button: {
        padding: 10,
        alignSelf: 'flex-end'
    }

});

export default LessionPlanScreen;

