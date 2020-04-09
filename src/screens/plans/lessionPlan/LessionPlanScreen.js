import React, { useEffect } from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

//import components
import AddPlanButton from '../lessionPlan/components/AddPlan';
import PlanItem from './components/planItem';

// redux
import { useSelector, useDispatch } from 'react-redux';

//sqlite
import * as plansActions from '../../../store/actions/plans-actions';


const LessionPlanScreen = props => {
    const plans = useSelector(state => state.plans.plans);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(plansActions.loadPlans());
    }, [dispatch]);

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
                    onSelectPlan={() => {
                        console.log('view plan button');
                        props.navigation.navigate('View Plan', {
                            planTitle: itemData.item.title,
                            placeId: itemData.item.id
                        });
                    }}
                    onEditPlan={() => {
                        console.log('edit plan button');
                        props.navigation.navigate('Edit Plan', {
                            planTitle: itemData.item.title,
                            placeId: itemData.item.id                            
                        });
                        }}
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

