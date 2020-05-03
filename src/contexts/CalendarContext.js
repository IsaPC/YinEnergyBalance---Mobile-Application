import React, { createContext, useState } from 'react';


import { insertEvent } from '../database/db'; // TODO

export const CalendarContext = createContext(); 

// moment allows the formatting of date
import moment from 'moment';

const CalendarContextProvider = props => {
    const [events, setEvents] = useState([]);

    const addEvent = async (title, date) => {
        
        try {
            // TODO if no title exists, generate an automatic title
            title="temp title";

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
        <CalendarContext.Provider value={{addEvent}}>
            {props.children}
        </CalendarContext.Provider>
    );
}

export default CalendarContextProvider;