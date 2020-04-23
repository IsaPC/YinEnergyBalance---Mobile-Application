import React, { createContext, useState } from 'react';

import uuid from 'uuid/v1';

import { insertEvent } from '../database/db'; // TODO

export const CalendarContext = createContext(); 

// moment allows the formatting of date
import moment from 'moment';

const CalendarContextProvider = props => {
    const [events, setEvents] = useState();

    const addEvent = async (title, date) => {
        console.log("adding event: ");
        try {
            // TODO if no title exists, generate an automatic title


            // convert date to string
            let newDate = ("" + moment(date).format('YYYY/MM/DD').toString() +" "+ moment(date).format('HH:mm').toString()).toString();
        
            // add event to database
            const dbResult = await insertEvent(title, date); // TODO add db insert


            // add event to state hook events
            setEvents(...events, {id: dbResult.insertId.toString(), title: title, date: newDate });
            console.log(events);  
        } catch (error) {
            console.log('\nError, failed to load into stateHook, setEvents:')
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