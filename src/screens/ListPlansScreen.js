import React, { useContext } from 'react';
import { PlanContext } from '../contexts/PlanContext';

import {View, FlatList, StyleSheet} from 'react-native';

//import components
import AddPlan from "./Components/AddPlan";
import PlanItem from './Components/planItem';

const ListPlanScreen = props => {

    //TODO
    // useEffect(() => {
    //     dispatch(placesActions.loadPlaces());
    //   }, [dispatch]);


    const { plans } = useContext(PlanContext);

    // console.log("\n\nabout to display data to flatlist")
    // console.log(plans);
    // console.log("end\n\n");
    
    const addScreenHandler = () => {
        console.log('open add-screen button');
        props.navigation.navigate('Add Plan');
    }

    return (
        <View>
            <View style={styles.buttnPos}>
                <AddPlan onPress={addScreenHandler}  style={styles.addplanbutton}/>
            </View>
            
                {/* amount of lession plans<Text>{ plans.length }</Text> */}
                <FlatList 
                    data={plans}
                    // {...console.log(plans)} // TODO image not being saved
                    keyExtractor={item => item.id}
                    renderItem={ itemData => (
                        <PlanItem 
                        image={itemData.item.imageUri}
                        title={itemData.item.title}
                        onSelectPlan={() => {
                            console.log('view plan button');
                            props.navigation.navigate('View Plan', {
                                planId: itemData.item.id,
                                planTitle: itemData.item.title,
                                imageUri: itemData.item.imageUri, 
                                description: itemData.item.description   
                            });
                        }}
                        onEditPlan={() => {
                            console.log('edit plan button');
                            props.navigation.navigate('Edit Plan', {
                                planId: itemData.item.id,
                                planTitle: itemData.item.title,
                                imageUri: itemData.item.imageUri, 
                                description: itemData.item.description                
                            });
                            }}
                        />
                        )}
                />
            <View style={styles.end}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    end: {
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    buttnPos: {
        paddingRight: 3,
        paddingTop: 3
    },
    addplanbutton: {
        alignSelf: 'flex-end',
    }
});

export default ListPlanScreen;