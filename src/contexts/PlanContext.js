import React, {createContext, useState } from 'react';
import uuid from 'uuid/v1';

import { insertPlan, updatePlan } from '../database/db';

export const PlanContext = createContext(); 

const PlanContextProvider = props => {
    //TODO remove test data
    const [ plans, setPlans ] = useState([
    ]);

    const addPlan = (title, imageUri, description) => {
        //TODO insert into database
        setPlans([...plans, {id: uuid() , title, imageUri, description}]);
    };

    const removePlan = (id) => {
        //TODO delete from database
        setPlans(plans.filter(plan => plan.id !== id));
    };

    const editPlan = (id, title, imageUri, description) => {
        //TODO update database
        setPlans(plans.map(item => item.id === id ? {...item, title: title, imageUri: imageUri, description: description} : item ));
    }

    return (
        <PlanContext.Provider value={{plans, addPlan, removePlan, editPlan}}>
            {props.children}
        </PlanContext.Provider>
    );
}

export default PlanContextProvider;