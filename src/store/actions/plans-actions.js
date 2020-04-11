import * as FileSystem from 'expo-file-system';

// action identifiers
export const ADD_PLAN = 'ADD_PLAN';
export const SET_PLANS = 'SET_PLANS';
export const UPDATE_PLAN = 'UPDATE_PLAN';

import { insertPlan, selectAllPlans, updatePlan } from '../../helpers/db';

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

                // console.log("\ninsert plan");
                // console.log(dbResult);
                // console.log("\n");

            // send to the redux store
            dispatch({type: ADD_PLAN, planData: {id : dbResult.insertId ,title: title, image: newPath, description: description}});
        } catch (err) {
            console.log(err);
            throw err;
        }

        
    };
};

// update the plan on the edit screen
export const editPlan = (id, title, oldImage, newImage, description) => {
    return async dispatch => {
        
        try {
            // if image is the same update database
            // if NOT the same image, delete old image and save new image to file system then update
            if (oldImage === newImage) {
                // dont have to delete image on filesystem
                // do update db
                console.log('attempting to update plan log: ' );
                const dbResult = await updatePlan(
                    id,
                    title,
                    oldImage,
                    description
                );
                 console.log(dbResult);
                 dispatch({type: UPDATE_PLAN, planData: {id : dbResult.insertId ,title: title, image: oldImage, description: description}})
             } else {
                 // delete old image on filesystem
                 await FileSystem.deleteAsync(oldImage);
     
                 // store the new image onto the local file system
                 const fileName = image.split('/').pop();
                 const newPath = FileSystem.documentDirectory + fileName;
     
                 // save newImage to local file system
                 await FileSystem.moveAsync({
                     from: image,
                     to: newPath
                 });
                 // update DB
                 const dbResult = await updatePlan(
                     id,
                     title,
                     newPath,
                 );
                 console.log(dbResult);
                 dispatch({type: UPDATE_PLAN, planData: {id : dbResult.insertId ,title: title, image: newPath, description: description}})
             } // END else  
        } catch (err) {
            throw err;
        }
    };
};


//select all plans
export const loadPlans = () => {
    return async dispatch => {
        try {
            const dbResult = await selectAllPlans();

            // console.log("\nselect all plans");
            // console.log(dbResult);
            // console.log("\n");

            //setting the database to store
            dispatch({type: SET_PLANS, plans: dbResult.rows._array });
        } catch (err) {
            throw err;
        }
        
    };
};