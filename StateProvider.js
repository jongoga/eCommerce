
import React, {createContext, useContext, useReducer} from "react";

//prepare the data layer
export const StateContext= createContext();

//wrap our app and provide the data layer
/*
export const StateProvider= ({  reducer , initialState , children}) => {
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
        </StateContext.Provider>
};
*/
export const StateProvider = ({children}) =>{

    const state = useReducer(reducer, initialState);
    return (
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    );}

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);


/*const initialState = {
    loading: true,
    navbarOpen: false,
    pages: [],
    album: []
};

const reducer = (state, action) => {
    switch (action.type) {
      case 'toggleNavbar':
        return {
          ...state,
          navbarOpen: action.toggle
        };
      case 'updatePagesAndAlbums': {
         ...state,
         ...actions.updatedState
      }
      default:
        return state;
    }
};



export const StateProvider = ({children}) =>{

    const state = useReducer(reducer, initialState);
    return (
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    );

}
export const useStateValue = () => useContext(StateContext);*/