import { USER_LOGIN_FAILURE, USER_LOGIN_REQUSET, USER_LOGIN_SUCCESS } from "./ActionType"


const userLoginRequest = () =>{

    return{
        type: USER_LOGIN_REQUSET
    }

}

const userLoginSuccess = (payload) =>{

    return{
        type: USER_LOGIN_SUCCESS,
        payload,
    }

}

const userLoginFailure = () =>{

    return{
        type: USER_LOGIN_FAILURE
    }

}

export {userLoginRequest, userLoginSuccess, userLoginFailure}