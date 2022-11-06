//Write the action creator functions here

import axios from "axios"
import {EDIT_PRODUCT_FAILURE,EDIT_PRODUCT_REQUEST,EDIT_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes"

export const getproducts=(params)=>(dispatch)=>{
  dispatch({type:GET_PRODUCTS_REQUEST})
  return axios(`http://localhost:8080/products`,params)
  .then((r)=>dispatch({type:GET_PRODUCTS_SUCCESS,payload:r.data }))
  .catch((e)=>dispatch({type:GET_PRODUCTS_FAILURE,payload:e}))
}

export const delproducts=(params)=>(dispatch)=>{
  dispatch({type:DELETE_PRODUCT_REQUEST})
  return axios.delete(`http://localhost:8080/products/${params.id}`)
  .then((r)=>dispatch({type:DELETE_PRODUCT_SUCCESS}))
  .catch((e)=>dispatch({type:DELETE_PRODUCT_FAILURE}))
}
export const addproducts=(params)=>(dispatch)=>{
  dispatch({type:ADD_PRODUCT_REQUEST})
  return axios.post(`http://localhost:8080/products`,params)
  .then((r)=>dispatch({type:ADD_PRODUCT_SUCCESS}))
  .catch((e)=>dispatch({type:ADD_PRODUCT_FAILURE}))
}
export const updatedata = (params) => (dispatch) => {
  dispatch({ type:EDIT_PRODUCT_REQUEST });
  return axios.patch(`http://localhost:8080/products`,params).then((res) => {
      dispatch({ type:EDIT_PRODUCT_SUCCESS });
  })
  .catch((err) => {
      dispatch({ type:EDIT_PRODUCT_FAILURE })
  })
}
