import { ADD_PLAN, SET_PLANS } from '../actions/plans-actions';
import Plan from '../../models/plan';

const initialState = {
  plans: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANS:
        return {
            plans: action.plans.map(pl => new Plan(pl.id.toString(), pl.title, pl.imageUri, pl.description))
        };

    case ADD_PLAN:
        const newPlan = new Plan(
            action.planData.id.toString(), // do i need string?
            action.planData.title,
            action.planData.image,
            action.planData.description);
        return {
            plans: state.plans.concat(newPlan)
        };
    default:
      return state;
  }
};
