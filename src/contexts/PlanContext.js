import React, {createContext, useState} from 'react';


import * as FileSystem from 'expo-file-system';

import { insertPlan, updatePlan, selectAllPlans, deletePlan } from '../database/db';
import Plan from '../models/plan';

export const PlanContext = createContext(); 

const PlanContextProvider = props => {
    const [ plans, setPlans ] = useState([
    ]);


  

    // a usehook to help only call selectAllPlans once
    const [bool, setBool] = useState(true); 

    /*note: yes I know it's still being called over and over again,
    * but currently it's the lesser evil 
    */
    const loadAllPlans = async () => {
        if (bool) {
            console.log(bool)
            let dbresultSet = await selectAllPlans();
            console.log('\nloading items from sql to state');
            console.log('data being transfered: ')
            //console.log(dbresultSet.rows._array)

            let tempArray = dbresultSet.rows._array.map(pl => new Plan(
                pl.id.toString(),
                pl.title,
                pl.imageUri,
                pl.description,
            ));
            // https://stackoverflow.com/questions/19529403/javascript-loop-through-object-array

            // console.log(tempArray);
            setPlans(tempArray);

            setBool(false);
        }

    }; // END

    const addPlan = async (title, imageUri, description) => {
        try {
            //turn image link frpm temp localtion to local location
            const fileName = imageUri.split('/').pop();
            const newPath = FileSystem.documentDirectory + fileName;

            //store image to local file system
            await FileSystem.moveAsync({
                from: imageUri,
                to: newPath
            });
            //insert data into database
            const dbResult = await insertPlan(title, newPath, description);

            //log database
            console.log('what is in the database:');
            // console.log(dbResult);
            
            // insert data into state
            console.log('\nattempting to add plan in context');
            setPlans([...plans, {id: dbResult.insertId.toString() , title, imageUri, description}]);
        } catch (error) {
            console.log('\nError, failed to load into stateHook, setPlans:')
            console.log(error);
            console.log('\n');
        }
    }; // END

    const removePlan = async (id, imageUri) => {
        try {
            // delete image from file system
            await FileSystem.deleteAsync(imageUri);

            // delete from database
            await deletePlan(id); 

            // remove from state hook
            setPlans(plans.filter(plan => plan.id !== id));
        } catch (error) {
            console.log(error);
        }
    }; // END

    const editPlan = async (id, title, oldImage , imageUri, description) => {

        if (oldImage === imageUri) {
            console.log('\n');
            console.log('they are the same image');
            console.log('\n');

            await updatePlan(id, title, imageUri, description);
            setPlans(plans.map(item => item.id === id ? {...item, title: title, imageUri: newPath, description: description} : item ));
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
            setPlans(plans.map(item => item.id === id ? {...item, title: title, imageUri: newPath, description: description} : item ));
            console.log('completed editing plan in context');
        } // END IF
    } // END



    return (
        <PlanContext.Provider value={{plans, addPlan, removePlan, editPlan, loadAllPlans}}>
            {props.children}
        </PlanContext.Provider>
    );
}

export default PlanContextProvider;