import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { Reducer as AppReducer } from "./AppReducer/Reducer";
import { Reducer as AuthReducer } from "./AuthReducer/Reducer";


const rootReducer = combineReducers({AppReducer, AuthReducer});

const logger1 = (state)=>(next)=>(action)=>{
    next(action)
}

const logger2 = (state)=>(next)=>(action)=>{
    next(action)
}

const Store = legacy_createStore(rootReducer, applyMiddleware(logger1, logger2));

export {Store};