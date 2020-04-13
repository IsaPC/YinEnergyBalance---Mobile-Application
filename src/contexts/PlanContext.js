import React, {createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v1';

import { insertPlan, updatePlan, selectAllPlans } from '../database/db';

export const PlanContext = createContext(); 

const PlanContextProvider = props => {
    const [ plans, setPlans ] = useState([
    ]);

    // useEffect( () => {
    //     setPlans(selectAllPlans());
    // }, [plans])

    const loadAllPlans = async () => {
        let dbresultSet = await selectAllPlans();
        console.log('\nloading items from sql to state');
        console.log('data being transfered: ')
        console.log(dbresultSet)
        setPlans(dbresultSet);
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