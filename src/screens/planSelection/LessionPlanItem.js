import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';

const LessionPlanItem = props => {
    //Test Data
    const [plans, setPlans] = useState([
        {title: 'plan 1', id: '1'},
        {title: 'plan 2', id: '2'},
        {title: 'plan 3', id: '3'},
        {title: 'plan 4', id: '4'},
        {title: 'plan 5', id: '5'},
        {title: 'plan 6', id: '6'},
        {title: 'plan 7', id: '7'},
        {title: 'plan 8', id: '8'},
        {title: 'plan 10', id: '9'},
        {title: 'plan 11', id: '10'},
        {title: 'plan 12', id: '11'},
        {title: 'plan 13', id: '12'},
    ]);

    // customise an item for list
    const Item = (item) => {
        return (
        <View style={styles.itemContainer}>
            <Text>{item.id}: </Text>
            <Text >{item.title} </Text>
        </View>
        );
    };

    // render JSX
    return <FlatList
                data={plans}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
            />
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        // add a line under each item
        borderBottomColor: 'grey',
        borderBottomWidth: 1,

        marginVertical: 10, /*add spacing between items */            
    }
});

export default LessionPlanItem;