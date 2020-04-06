import { ADD_PLAN } from './plans-actions';
import Plan from '../models/plans';

const initialState = {
  plans: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAN:
      const newPlan = new Plan(
            new Date().toString(),
            action.planData.title,
            action.planData.image);
      return {
        plans: state.plans.concat("what is in newPlan: " + newPlan)
      };
    default:
      return state;
  }
};

