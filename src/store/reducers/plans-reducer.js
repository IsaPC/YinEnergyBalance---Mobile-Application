import { ADD_PLAN } from '../actions/plans-actions';
import Plan from '../../models/plan';

const initialState = {
  plans: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAN:
        const newPlan = new Plan(new Date().toString(),
            action.planData.title,
            action.planData.image);
        return {
            plans: state.plans.concat(newPlan)
        };
    default:
      return state;
  }
};
