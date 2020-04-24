import React, {useState,createContext} from 'react';
import * as FileSystem from 'expo-file-system';
import { insertDetails, updateDetail, selectAllDetails, deleteDetail } from '../database/db';

import Details from '../models/details';
export const DetailsContext = createContext();

const DetailsContextProvider = (props) => {

    const [details, setDetails] = useState([
      ]);
    const [bool, setBool] = useState(true);

    const loadAllDetails = async () => {
        if (bool) {

            console.log(bool);

            let dbresultSet = await selectAllDetails();

            console.log('\nloading items from sql to state');

            console.log('data being transfered: ')

            let tempArray = dbresultSet.rows._array.map(pl => new Details(

                pl.id.toString(),

                pl.name,

                pl.age,

                pl.address,

                pl.phone,

                pl.email,

                pl.notes,

            ));
            console.log(tempArray);
            setDetails(tempArray);
            setBool(false);
        }
    }; // END

    const addDetails = async (name, age, address, phone, email, notes) => {

        //turn name from temp location to local location
        const fileName = name.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;
        //store name to local file system
        await FileSystem.moveAsync({
            from: name,
            to: newPath
        });

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

    const removeDetails = async (id, name) => {
        await FileSystem.deleteAsync(name);
        await deleteDetail(id);
        setDetails(details.filter(detail => detail.id !== id));
    };

    const editDetails = async (id, name, age, address, phone, email, notes) => {



        if (oldName === name) {

            console.log('\n');

            console.log('they are the same name');

            console.log('\n');



            await updateDetail(id, name, age, address, phone, email, notes);

            setDetails(plans.map(item => item.id === id ? { ...item, name: newPath, age: age, address: address, phone: phone, email: email, notes: notes } : item));

            console.log('completed editing details in context');

        } else {

            /**
    
             * delete old image
    
             * save new image
    
             * update database
    
             * update useState array
    
             */

            await FileSystem.deleteAsync(oldName);



            const fileName = name.split('/').pop();

            const newPath = FileSystem.documentDirectory + fileName;



            // save newImage to local file system

            await FileSystem.moveAsync({

                from: name,

                to: newPath

            });



            // insert into database

            await updateDetail(id, name, age, address, phone, email, notes);

            setDetails(details.map(item => item.id === id ? { ...item, name: newPath, age: age, address: address, phone: phone, email: email, notes: notes } : item));

            console.log('completed editing details in context');

        } // END IF









    } // END
    return (

        <DetailsContext.Provider value={{details, addDetails, removeDetails, editDetails, loadAllDetails }}>
    
            {props.children}
    
        </DetailsContext.Provider>
    
    );
    
    
}


export default DetailsContextProvider;