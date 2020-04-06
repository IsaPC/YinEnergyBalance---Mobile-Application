import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';

// import item
import PlanItem from './PlanItem';

// react navigation
import { useSelector } from 'react-redux'; // use to get items
import { useNavigation } from '@react-navigation/native';


const LessionPlanItem = props => {
    const navigation = useNavigation();


    const plans = useSelector(state => state.plans.plans);

    console.log('load lesson plan item');
    //console.log("whats in props: " + props.navigation);

    // render JSX
    return <FlatList
                data={plans}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <PlanItem 
                        image={itemData.item.imageUri}
                        title={itemData.item.title} 
                        //TODO image={null} 
                        onSelect={() => {
                                console.log('pressed view')
                                navigation.navigate('ViewPlan', {
                                planTitle: itemData.item.title,
                                planId: itemData.item.id});
     
                        }}
                        onEdit={() => {
                            console.log('pressed edit image')
                        }}
                    />
                )}
            />
};



export default LessionPlanItem;