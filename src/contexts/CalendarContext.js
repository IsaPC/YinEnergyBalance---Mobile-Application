
import React, { useState } from 'react';
import moment from 'moment'; // moment allows the formatting of date
import { insertEvent } from '../database/db';

const CalendarContext = React.createContext(); 



export const CalendarProvider = props => {
    const [events, setEvents] = useState([]);
    // const [events, setEvents] = useState([{title: 'test 1'}, {title: 'test 2'}]);
    const addEvent = async (title, date) => {
        try {
            // TODO if no title exists, generate an automatic title
            if (title.length === 0) {
                title=`sessions #${events.length+1}`;
            }
            

            // convert date to string
            let newDate = moment(date).format('YYYY/MM/DD') +" "+ moment(date).format('HH:mm');
            newDate = newDate.toString();


            const dbResult = await insertEvent(title, newDate); // TODO add db insert
            // add event to database

            // add event to state hook events
            setEvents([...events, {id: dbResult.insertId.toString(), title, newDate }]);
            console.log(events);  
        } catch (error) {
            //console.log('\nError, failed to load into stateHook, setEvents:')
            
            console.log(error);
            console.log('\n');
        }
    }; // END


    return (
        <CalendarContext.Provider value={{data: events, addEvent}}>
            {props.children}
        </CalendarContext.Provider>
    );
}

export default CalendarContext;