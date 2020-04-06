
export const ADD_PLAN ='ADD_PLAN';

export const addPlan = (title, image) => {
    console.log("plans-actions: " + image)
    return {type: ADD_PLAN, planData: {title: title, image: image}};
}