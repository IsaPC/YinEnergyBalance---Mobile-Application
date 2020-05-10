
import React, { useState } from 'react';
import moment from 'moment'; // moment allows the formatting of date
import { insertEvent, deleteEvent, selectAllEvents } from '../database/db';

const CalendarContext = React.createContext(); 
import Event from '../models/event';


export const CalendarProvider = props => {
    const [events, setEvents] = useState([]);

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
            setEvents([...events, {id: dbResult.insertId.toString(), title, newDate}]);
            console.log(dbResult);  
        } catch (error) {
            //console.log('\nError, failed to load into stateHook, setEvents:')
            
            console.log(error);
            console.log('\n');
        }
    }; // END

    const removeEvent = async (id) => {
        await deleteEvent(id);
        setEvents(events.filter(item => item.id !== id));
    } // END


    const [bool, setBool] = useState(true);
    const loadAllEvents = async () => {
        if (bool) {
            let dbResult = await selectAllEvents();
            let tempArray = dbResult.rows._array.map(ev => new Event(ev.id.toString(), ev.title, ev.newDate));
            setEvents(tempArray);
            console.log(events);
            setBool(false); // lock
        }
    } // END



    return (
        <CalendarContext.Provider value={{data: events, addEvent, removeEvent, loadAllEvents}}>
            {props.children}
        </CalendarContext.Provider>
    );
}

export default CalendarContext;