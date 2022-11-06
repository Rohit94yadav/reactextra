import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {
  const{type,payload}=action
  switch(type){
case GET_PRODUCTS_FAILURE:
  return{
    ...state,
    isLoading:false,
    isError:true
  }
  case GET_PRODUCTS_SUCCESS:
  return{
    ...state,
    isLoading:false,
    isError:false,
    
    products:payload
  }
  case GET_PRODUCTS_REQUEST:
  return{
    ...state,
    isLoading:true,
    
  }
  case DELETE_PRODUCT_FAILURE:
    return state;
    case DELETE_PRODUCT_SUCCESS:
    return state;
    case DELETE_PRODUCT_REQUEST:
    return state;
  default:
    return state;
  }
};
