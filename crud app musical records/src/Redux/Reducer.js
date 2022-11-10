import { GET_MUSIC_RECORD_REQUEST } from "./ActionType";


const initialState =  {
    musicRecord : [],
    isLoading : false,
    isError: false, 
}

const Reducer = (oldState = initialState, action) =>{
    const {type,payload} = action;
switch(type){
    case GET_MUSIC_RECORD_REQUEST:
        
    };
    case "REDUCE" : return {
        ...oldState,
        count : oldState.count - 1,
    };
    default: return oldState;
    
}

}

export {Reducer};