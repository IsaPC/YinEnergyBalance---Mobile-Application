import React, { useState, useContext } from 'react';
import {StyleSheet, ScrollView, Image, View, Text, TextInput, Button } from 'react-native';


import DateTimePicker from '@react-native-community/datetimepicker';

// moment allows the formatting of date
import moment from 'moment';

const CalendarScreen = props => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    // save calender date and time
    //let time = null;
    const [time, setTimeDate] = useState(); 
    //let calDate = null;
    const [calDate, setCalDate] = useState();
  
    /* when the mode for date or time is picked this function is activated */
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
    //   console.log(selectedDate);
    //   console.log(currentDate);
        
        setDate(currentDate);

        if (mode === 'time') {
        let temp = moment.utc(date).format('HH:mm:ss');
        setTimeDate(temp);

        } else { // mode === date
        setCalDate(moment.utc(date).format('YYYY/MM/DD').toString());
        console.log("calDate: ",calDate);
        }
        var today = new Date();
        var dateRightNow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        console.log("date right now: ",dateRightNow);
      
    };
  
    /* if date setmode saves to mode */
    const showMode = currentMode => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    const saveSession = () => {
        savePlan(title, date);
    }
  
    return (
      <View style={styles.screen}>
        <View>
            <Button onPress={showDatepicker} title="Select Date" />
        </View>
        <View>
            <Button onPress={showTimepicker} title="Select Time" />
        </View>
        {show && (
            <DateTimePicker
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={mode}
                is24Hour={false}
                display="default"
                onChange={onChange}
            />
        )}

        <Text>{time}</Text>
        <Text>{calDate}</Text>
    </View>
    );
};

const styles =StyleSheet.create({
screen: {
    padding: 59,
    alignSelf: 'center',
    flexDirection: "column"
}
});

export default CalendarScreen;