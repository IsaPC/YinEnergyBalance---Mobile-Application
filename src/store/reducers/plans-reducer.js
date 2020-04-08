import { ADD_PLAN } from '../actions/plans-actions';
import Plan from '../../models/plan';

const initialState = {
  plans: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAN:

        console.log("what is in action.planData.id: " + action.planData.id);
        console.log("what is in action.planData.title: " + action.planData.title);
        console.log("what is in action.planData.image: " + action.planData.image);
        
        const newPlan = new Plan(
            action.planData.id.toString(),
            action.planData.title,
            action.planData.image);
        return {
            plans: state.plans.concat(newPlan)
        };
    default:
      return state;
  }
};
