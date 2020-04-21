import React, { useState, useContext } from 'react';
import {StyleSheet, View, Text, TextInput, Button } from 'react-native';


import DateTimePicker from '@react-native-community/datetimepicker';

// moment allows the formatting of date
import moment from 'moment';

const CalendarScreen = props => {

 const [date, setDate] = useState(new Date());
 const [mode, setMode] = useState('date');
 const [show, setShow] = useState(false);
 const [color, setColor] = useState();


 const [display, setDisplay] = useState('default');

 const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setShow(Platform.OS === 'ios');
    setDate(currentDate);
 };


 const showMode = currentMode => {
   setShow(true);
   setMode(currentMode);
 };


 const showDatepicker = () => {
   showMode('date');
   setDisplay('default');
 };


 const showTimepicker = () => {
   showMode('time');
 };

const saveEvent = () => {
    saveSessionEvent(title, date); // TODO create function
};

 return (  
    <View>
        <View style={styles.button}>

        <Button 
            testID="datePickerButton"
            onPress={showDatepicker}
            title="Show date picker default!"
        />
        </View>

        <View style={styles.button}>
            <Button
                testID="timePickerButton"
                onPress={showTimepicker}
                title="Show time picker!"
            />
        </View>

        <View style={styles.containShowDate}>
            <Text style={{paddingHorizontal: 5}}>Date: {moment(date).format('DD/MM/YYYY')}</Text>
            <Text style={{paddingHorizontal: 5}}>Time: {moment(date).format('HH:mm')}</Text>
        </View>

        <View>
            <Button 
                title="Save"
                onPress={saveEvent}
            />
        </View>

        
        {show && (
        <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode={mode}
            is24Hour
            display={display}
            onChange={onChange}
            style={styles.iOsPicker}
            textColor={color || undefined}
        />
        )}
    </View>

 );
};

const styles =StyleSheet.create({
screen: {
    padding: 59,
    alignSelf: 'center',
    flexDirection: "column"
},
containShowDate: {
    flexDirection: 'row'
}
});

export default CalendarScreen;