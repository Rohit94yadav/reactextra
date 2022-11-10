import { legacy_createStore } from "redux";
import { Reducer } from "./Reducer";
import thunk from "redux-thunk"

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = legacy_createStore(Reducer,
    
    );

export {Store};