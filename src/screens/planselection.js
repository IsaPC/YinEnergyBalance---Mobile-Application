import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

function PlanMaker() {
    //state
    const [plans, setPlans] = useState(
        [
                {title: 'plan 1', image: ':)', id: '1'},
                {title: 'plan 2', image: '-_-', id: '2'},
                {title: 'plan 3', image: ':[', id: '3'},
                {title: 'plan 4', image: ':}', id: '4'},
                {title: 'plan 5', image: ':|', id: '5'},
                {title: 'plan 6', image: ';)', id: '6'},
                {title: 'plan 7', image: '*-*', id: '7'}
        ]);
    
    //AJX code
    return (
        <View style={styles.container}>
    
          <FlatList 
            numColumns={1}
            keyExtractor={(item) => item.id} 
            data={plans} 
            renderItem={({ item }) => ( 
              <Text style={styles.item}>{item.title}</Text>
            )}
          />
    
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
      },
      item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 10,
        padding: 30,
        backgroundColor: 'white',
        fontSize: 24,
      },
});

export default PlanMaker;

