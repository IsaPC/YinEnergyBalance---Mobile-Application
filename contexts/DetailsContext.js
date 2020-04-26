import React, { useState, createContext } from 'react';
import * as FileSystem from 'expo-file-system';
import { insertDetails, updateDetail, selectAllDetails, deleteDetails } from '../database/db';

import Details from '../models/details';
export const DetailsContext = createContext();

const DetailsContextProvider = (props) => {
    const [bool, setBool] = useState(true);
    const [details, setDetails] = useState();

    const loadAllDetails = async () => {
        if (bool) {
            let dbresultSet = await selectAllDetails();
            console.log('\nloading items from sql to state');
            console.log('data being transfered: ')
            let tempArray = dbresultSet.rows._array.map(pl => new Details(pl.id.toString(), pl.name, pl.age, pl.address, pl.phone, pl.email, pl.notes));
            setDetails(tempArray);
            setBool(false);
        }
    }; // END

    const addDetails = async (name, age, address, phone, email, notes) => {
        const dbResult = await insertDetails(name, age, address, phone, email, notes);
        console.log('what is in the database:');
        console.log(dbResult);
        console.log('\nattempting to add details in context');

        try {
            setDetails([...details, { id: dbResult.insertId.toString(), name, age, address, phone, email, notes }]);

        } catch (error) {
            console.log('\nError, failed to load into stateHook, setDetails:')

            console.log(error);

            console.log('\n');
        }
    };

    const removeUsers = async (id) => {
        await deleteDetails(id);
        setDetails(details.filter(detail => detail.id !== id));
    };

    const editDetails = async (id, name, age, address, phone, email, notes) => {
            await updateDetail(id, name, age, address, phone, email, notes);
            setDetails(details.map(item => item.id === id ? { ...item, name: name, age: age, address: address, phone: phone, email: email, notes: notes } : item));
            console.log('completed editing users details in context');
    } // END

    return (
        <DetailsContext.Provider value={{ details, addDetails, removeUsers, editDetails, loadAllDetails }}>
            {props.children}
        </DetailsContext.Provider>
    );
}


export default DetailsContextProvider;