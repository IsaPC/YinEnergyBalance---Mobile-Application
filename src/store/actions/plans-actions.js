import * as FileSystem from 'expo-file-system';

// action identifiers
export const ADD_PLAN = 'ADD_PLAN';
export const SET_PLANS = 'SET_PLANS';

import { insertPlan, selectAllPlans } from '../../helpers/db';

export const addPlan = (title, image) => {
    return async dispatch => {
        //store the image onto the local file system
        const fileName = image.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;

        try {
            await FileSystem.moveAsync({
                from: image,
                to: newPath
            });

            // TODO something is wrong with insert plan
            const dbResult = await insertPlan(
                title,
                newPath,
                "test"
                );
            console.log("\nDatabase result: " + dbResult.id + "\n" + dbResult.title + "\n" );

            // send to the redux store
            dispatch({type: ADD_PLAN, planData: {id : dbResult.id ,title: title, image: newPath}});
        } catch (err) {
            console.log(err);
            throw err;
        }

        
    };
};


export const loadPlans = () => {
    return async dispatch => {
        try {
            const dbResult = await selectAllPlans();
            console.log("\nDatabase result: " + dbResult + "\n");
            dispatch({type: SET_PLANS, plans: [] });
        } catch (err) {
            throw err;
        }
        
    };
};