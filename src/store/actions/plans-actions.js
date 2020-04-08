import * as FileSystem from 'expo-file-system';

export const ADD_PLAN = 'ADD_PLAN';
import { insertPlan } from '../../helpers/db';

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
            const dbResult = await insertPlan(
                title,
                newPath,
                "test"
                );
            console.log("database result: " + dbResult + "\n");
            // send to the redux store
            dispatch({type: ADD_PLAN, planData: {title: title, image: newPath}});
        } catch (err) {
            console.log(err);
            throw err;
        }

        
    };
};