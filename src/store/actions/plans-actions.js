export const ADD_PLAN = 'ADD_PLAN';

export const addPlan = (title, image) => {
    return {type: ADD_PLAN, planData: {title: title, image: image}};
};