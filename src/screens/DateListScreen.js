import React, { useContext } from 'react';
import {View, Text, Button, FlatList} from 'react-native';

import EventsContext from '../contexts/CalendarContext';

const DateListScreen = props => {
    const { data } = useContext(EventsContext);

    return (
    <View>
        
        <Button title="add date" />
        <Text>Date List screen</Text>
    <FlatList
        data={data}
        keyExtractor={(event) => event.id}
        renderItem={({item})=> {
        return <Text>{item.title}</Text>
        }}
    />       
    </View>
    );
};

export default DateListScreen;