import React, {useState,createContext } from 'react';
import * as FileSystem from 'expo-file-system';
import { insertDetails, updateDetail, selectAllDetails, deleteDetails } from '../database/db';

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
    } // END

    const addUser = async (name, age, address, phone, email, notes) => {
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
    }

    const editPlan = async (id, title, oldImage, imageUri, description) => {



        if (oldImage === imageUri) {

            console.log('\n');

            console.log('they are the same image');

            console.log('\n');



            await updatePlan(id, title, imageUri, description);

            setPlans(plans.map(item => item.id === id ? { ...item, title: title, imageUri: newPath, description: description } : item));

            console.log('completed editing plan in context');

        } else {

            /**
    
             * delete old image
    
             * save new image
    
             * update database
    
             * update useState array
    
             */

            await FileSystem.deleteAsync(oldImage);



            const fileName = imageUri.split('/').pop();

            const newPath = FileSystem.documentDirectory + fileName;



            // save newImage to local file system

            await FileSystem.moveAsync({

                from: imageUri,

                to: newPath

            });



            // insert into database

            await updatePlan(id, title, newPath, description);

            setPlans(plans.map(item => item.id === id ? { ...item, title: title, imageUri: newPath, description: description } : item));

            console.log('completed editing plan in context');

        } // END IF









    } // END
    return (

        <DetailsContext.Provider value={{details, addUser, editPlan, loadAllDetails }}>
    
            {props.children}
    
        </DetailsContext.Provider>
    
    );
    
    
}


export default DetailsContextProvider;