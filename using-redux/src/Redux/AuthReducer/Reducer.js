import { USER_LOGIN_FAILURE, USER_LOGIN_REQUSET, USER_LOGIN_SUCCESS } from "./ActionType";

 const initialState = {

    isAuth: false,
    token: "",
    isAuthLoading: false,
    isAuthError: false,
}


 const Reducer = (oldState = initialState, action)=>{

const{type,payload}= action;

switch(type){

    case USER_LOGIN_REQUSET :

    return{
        ...oldState,
        isAuthLoading: true,
    }

    case USER_LOGIN_SUCCESS :

        return{
            ...oldState,
            isAuthLoading: false,
            token: payload,
            isAuth : true
        }

        case USER_LOGIN_FAILURE :

            return{
                ...oldState,
                isAuthLoading: false,
                token:"",
                isAuth : false,
                isAuthError: true,
            }

            default:
                return oldState;

}

}

export {Reducer, initialState}