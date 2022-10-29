import {
  ADD,
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  POST_TODO_FAILURE,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
  REDUCE,
} from "./ActionType";

const handleAddCount = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

const handleReduceCount = (payload) => {
  return {
    type: REDUCE,
    payload,
  };
};

const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

const getTodosSuccess = (payload) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload,
  };
};

const getTodosFailure = () => {
  return {
    type: GET_TODOS_FAILURE,
  };
};

const PostTodoRequset = () => {
  return {
    type: POST_TODO_REQUEST,
  };
};

const PostTodoSuccess = () => {
  return {
    type: POST_TODO_SUCCESS,
  };
};

const PostTodoFailure = () => {
  return {
    type: POST_TODO_FAILURE,
  };
};

export {
  handleAddCount,
  handleReduceCount,
  getTodosRequest,
  getTodosSuccess,
  getTodosFailure,
  PostTodoRequset,
  PostTodoSuccess,
  PostTodoFailure,
};
