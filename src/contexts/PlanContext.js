import React, {createContext, useState } from 'react';


export const PlanContext = createContext(); 

const PlanContextProvider = props => {
    const [ plans, setPlans ] = useState([{
        id: 1, title: "this is a test",
        image: "yum",
        description: "this is delicous"}
    ]);

    const addPlan = (title, image, description) => {
        //TODO insert into database
        setPLans(...plans, title, image, description);
    };

    const removePlan = (id) => {
        //TODO delete from database
        setPlans(plans.filter(plan => plan.id !== id));
    };

    const editPlan = (id, title, image, description) => 
        //TODO updateDatabase
        state.map((plan, index = id) => {
        if (plan.id === index) {
            setPlans(...plan, {title: title, image: image, description: description });
        }
    });

    return (
        <PlanContext.Provider value={{plans, addPlan, removePlan, editPlan}}>
            {props.children}
        </PlanContext.Provider>
    );
}

export default PlanContextProvider;