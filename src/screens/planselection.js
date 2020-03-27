import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

function PlanMaker() {
    //state // TEMP DATA
    const [plans, setPlans] = useState(
        [
                {title: 'plan 1', imageurl: '../', id: '1'},
                {title: 'plan 2', imageurl: '-_-', id: '2'},
                {title: 'plan 3', imageurl: ':[', id: '3'},
                {title: 'plan 4', imageurl: ':}', id: '4'},
                {title: 'plan 5', imageurl: ':|', id: '5'},
                {title: 'plan 6', imageurl: ';)', id: '6'},
                {title: 'plan 7', imageurl: '*-*', id: '7'}
        ]);
    
    {/*functions */}
    addPlan = () => {
        console.log('add button pressed');
    }



    //AJX code
    return (
        <View style={styles.container}>
    
        {/* add a plan */}
        <View style={styles.containaddplan}>
        <TouchableOpacity onPress={addPlan}>
            <View style = {styles.button}>
            </View>
        </TouchableOpacity>
        </View>

            {/* show the list of plans */}
            <FlatList 
                numColumns={1}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                data={plans} 
                renderItem={({ item }) => ( 
                    <View style={styles.containplan}>
                        <Image source={require("../../assets/TempImage.jpg")} style={styles.image}></Image>
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
      },
      button: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        justifyContent: 'flex-end'
      },
      containplan: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 30,
        backgroundColor: 'grey'
      },

      font: {
        padding: 20,
        fontSize: 24,
        flex: 1,
        backgroundColor: 'blue'
      },
      image: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        backgroundColor: 'yellow'
      }
});

export default PlanMaker;

