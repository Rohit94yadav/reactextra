//create action creator functions here, using the action types from actionTypes.js;

import { EMAIL, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, PASSWORD } from "./actionTypes";

export const Email=(Email)=>{
  return{
type:EMAIL,
payload:Email
  }
}
export const Password=(Password)=>{
  return{
type:PASSWORD,
payload:Password
  }
}
export const Success=(token)=>{
  return{
type:LOGIN_SUCCESS,
payload:token
  }
}

export const req = { type: LOGIN_REQUEST }
export const fail = { type: LOGIN_FAILURE }
