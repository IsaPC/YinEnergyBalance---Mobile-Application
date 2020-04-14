import React, {createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v1';

import { insertPlan, updatePlan, selectAllPlans } from '../database/db';
import Plan from '../models/plan';

export const PlanContext = createContext(); 

const PlanContextProvider = props => {
    const [ plans, setPlans ] = useState([
    ]);

    // useEffect( () => {
    //     setPlans(selectAllPlans());
    // }, [plans])
  

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
            //TODO loop array and set plans

            let tempArray = dbresultSet.rows._array.map(pl => new Plan(
                pl.id.toString(),
                pl.title,
                pl.imageUri,
                pl.description,
            ));
            // https://stackoverflow.com/questions/19529403/javascript-loop-through-object-array

            console.log(tempArray);
            setPlans(tempArray);

            setBool(false);
        }

    }

    const addPlan = async (title, imageUri, description) => {
        //TODO insert into database

        const dbResult = await insertPlan(title, imageUri, description);

        console.log('what is in the database:');
        console.log(dbResult);
        

        console.log('\nattempting to add plan in context');
        try {
            setPlans([...plans, {id: dbResult.insertId.toString() , title, imageUri, description}]);
        } catch (error) {
            console.log('\nError, failed to load into stateHook, setPlans:')
            console.log(error);
            console.log('\n');
        }
        
    };

    //TODO
    const removePlan = (id) => {
        //TODO delete from database
        setPlans(plans.filter(plan => plan.id !== id));
    };

    const editPlan = async (id, title, imageUri, description) => {
        await updatePlan(id, title, imageUri, description);

        console.log('setting plans in context');
        setPlans(plans.map(item => item.id === id ? {...item, title: title, imageUri: imageUri, description: description} : item ));
    }



    return (
        <PlanContext.Provider value={{plans, addPlan, removePlan, editPlan, loadAllPlans}}>
            {props.children}
        </PlanContext.Provider>
    );
}

export default PlanContextProvider;