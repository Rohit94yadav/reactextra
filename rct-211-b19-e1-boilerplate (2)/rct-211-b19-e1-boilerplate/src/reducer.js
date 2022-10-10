//import the action types here from the actionTypes.js to be used in the reducer function
import {PASSWORD,LOGIN_REQUEST,LOGIN_SUCCESS ,EMAIL,LOGIN_FAILURE } from "./actionTypes"
//Complete the reducer function here
const reducer = (reducerState,action) => {
  switch(action.type){
    case LOGIN_SUCCESS:
      return{
        ...reducerState, isAuth: true, token: action.payload, isLoading: false 
        }
      case LOGIN_FAILURE:
      return{
        ...reducerState, isAuth: false, isError: true, isLoading: false 
        }
      case LOGIN_REQUEST:
        return{
          ...reducerState,
          isLoading:true,
        }
        case EMAIL:
          return { ...reducerState, email: action.payload }
      case PASSWORD:
          return { ...reducerState, password: action.payload }
        default:
          return reducerState;
  }
};

export { reducer };
