import { ADD_PLAN, SET_PLANS, UPDATE_PLAN } from '../actions/plans-actions';
import Plan from '../../models/plan';
import { updatePlan } from '../../helpers/db';

const initialState = {
  plans: []
};

export default (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
    case SET_PLANS:
        console.log("\n\nreducer: SET_PLANS\n\n");
        console.log(state.plans);
        return {
            plans: action.plans.map(pl => new Plan(pl.id, pl.title, pl.imageUri, pl.description))
        };

    case ADD_PLAN:
        console.log("\n\nreducer: ADD_PLAN\n\n");
        const newPlan = new Plan(
            action.planData.id, // do i need string?
            action.planData.title,
            action.planData.image,
            action.planData.description);
        return {
            plans: state.plans.concat(newPlan)
        };
    case UPDATE_PLAN:
        console.log("\n\nreducer: UPDATE_PLAN\n\n");

        const newState = {...state}; // if you can't change the main state, make another 1
        console.log(newState);

        //make new object of updated object.
        const updatedPlans = { ...state.plans[objIndex], 
            id: action.planData.id,
            title: action.planData.title,
            image: action.planData.image,
            description: action.planData.description
        };

        // make final new array of objects by combining updated object.
        // replace old plans with update
        newState = [...state.plans.slice(0, objIndex),updatedPlans, ...state.plans.slice(objIndex+1),];
        console.log("\n\nnewPlan: ");
        console.log(newPlan);
        console.log("\n\n");


        return newState;


        //find the index of object from array that you want to update
        const objIndex = state.plans.findIndex((obj => obj.id == action.planData.id))

        // make new object of updated object.
        // const updatedPlans = { ...state.plans[objIndex], 
        //     id: action.planData.id,
        //     title: action.planData.title,
        //     image: action.planData.image,
        //     description: action.planData.description
        // };

        // // make final new array of objects by combining updated object.
        // // replace old plans with update
        // newPlan = [...state.plans.slice(0, objIndex),updatedPlans, ...state.plans.slice(objIndex+1),];
        // console.log("\n\nnewPlan: ");
        // console.log(newPlan);
        // console.log("\n\n");

        // state.plans = newPlan;
        // return state;

        // state.plans[action.planData.id].title = action.planData.title;
        // state.plans[action.planData.id].image = action.planData.image;
        // state.plans[action.planData.id].description = action.planData.description;

        //attempt 2
        // tutorial 
        // https://daveceddia.com/react-redux-immutability-guide/
        // return {
        //     ...state, // copy state
        //     ...state.plans, // copy plans
        //     plans: { // in plans
        //     [action.planData.id]: { //update one specific plan
        //     ...state.plans[action.planData.id], // copy that specific plan
        //     title: state.plans[action.planData.id].title = action.planData.title, // update title
        //     image: state.plans[action.planData.id].image = action.planData.image, // update image
        //     description: state.plans[action.planData.id].description = action.planData.description, // update description 
        //         }
        //     }
        // }

        // this shit won't work
        // //find the index of object from array that you want to update
        // const objIndex = state.plans.findIndex((obj => obj.id == action.planData.id))

        // // make new object of updated object.
        // const updatedPlans = { ...state.plans[objIndex], 
        //     id: action.planData.id,
        //     title: action.planData.title,
        //     image: action.planData.image,
        //     description: action.planData.description
        // };

        // // make final new array of objects by combining updated object.
        // // replace old plans with update
        // newPlan = [...state.plans.slice(0, objIndex),updatedPlans, ...state.plans.slice(objIndex+1),];
        // console.log("\n\nnewPlan: ");
        // console.log(newPlan);
        // console.log("\n\n");

        // state.plans = newPlan;
        // return state;
        
    default:
      return state;
  }
};
