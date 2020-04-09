import * as FileSystem from 'expo-file-system';

// action identifiers
export const ADD_PLAN = 'ADD_PLAN';
export const SET_PLANS = 'SET_PLANS';

import { insertPlan, selectAllPlans } from '../../helpers/db';

//insert into plan
export const addPlan = (title, image, description) => {
    return async dispatch => {
        //store the image onto the local file system
        const fileName = image.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;

        //save to local file system
        try {
            await FileSystem.moveAsync({
                from: image,
                to: newPath
            });

            const dbResult = await insertPlan(
                title,
                newPath,
                description
                );

                console.log("\ninsert plan");
                console.log(dbResult);
                console.log("\n");

            // send to the redux store
            dispatch({type: ADD_PLAN, planData: {id : dbResult.insertId ,title: title, image: newPath, description: description}});
        } catch (err) {
            console.log(err);
            throw err;
        }

        
    };
};

//select all plans
export const loadPlans = () => {
    return async dispatch => {
        try {
            const dbResult = await selectAllPlans();

            console.log("\nselect all plans");
            console.log(dbResult);
            console.log("\n");

            dispatch({type: SET_PLANS, plans: dbResult.rows._array });
        } catch (err) {
            throw err;
        }
        
    };
};