//here we define all the aplication level states and define actions to make changes to the state

export const initialState ={
    basket: [],
};

//Selector

export const reducer = (state , action ) => {
    switch(action.type){
        case "ADD_TO_BASKET":
        return {
            ...state,
            basket: [...state.basket, action.item],
        }
        default:
            return state;
    }
}

export default reducer;
