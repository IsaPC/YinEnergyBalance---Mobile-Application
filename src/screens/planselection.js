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
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            data={plans} 
            renderItem={({ item }) => ( 
                <View style={styles.plan}>
                    <Text style={styles.font}>{item.image}</Text>
                    <Text style={styles.font}>{item.title}</Text>
                </View>
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
      plan: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 10,
        padding: 30,
        backgroundColor: 'grey',
      },
      font: {
        fontSize: 24,
      }
});

export default PlanMaker;

