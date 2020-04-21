import React, {createContext, useState} from 'react';

import { addCalEvent } from '../database/db'; // TODO

export const CalendarContext = createContext(); 

// moment allows the formatting of date
import moment from 'moment';

const CalendarContextProvider = props => {
    const [events, setEvents] = useState();

    const addEvent = async (title, date) => {

        let newDate = (moment(date).format('YYYY/MM/DD').toString() +" "+ moment(date).format('HH:mm').toString()).toString();
        const dbResult = await addCalEvent(title, newDate);

        console.log('what is in the database:');
        console.log(dbResult);
        

        console.log('\nattempting to add event in context');
        try {
            setsetEvents([...plans, {id: dbResult.insertId.toString(), title, newDate}]);
        } catch (error) {
            console.log('\nError, failed to load into stateHook, setPlans:')
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