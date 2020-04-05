import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';

// import item
import PlanItem from './PlanItem';

// react navigation
import { useSelector } from 'react-redux'; // use to get items



const LessionPlanItem = props => {
    const plans = useSelector(state => state.plans.plans);

    // render JSX
    return <FlatList
                data={plans}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <PlanItem 
                        title={itemData.item.title} 
                        image={null} 
                        onSelect={() => {
                            props.navigation.navigate() // SHIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIITTTtt
                    }} />
                )}
                
            />
};



export default LessionPlanItem;