import { GetLocalData, SaveData } from "../../utils/localStorageData";
import {
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./ActionType";

const initialState = {
  count: GetLocalData("reduxCount") || 20,
  todos: [],
  isLoading: false,
  isError: false,
};

const Reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const newCount = oldState.count + action.payload;
      SaveData("reduxCount", newCount);
      return {
        ...oldState,
        count: newCount,
      };
    case "REDUCE":
      const newReduceCount = oldState.count - action.payload;
      SaveData("reduxCount", newReduceCount);
      return {
        ...oldState,
        count: newReduceCount,
      };
    case GET_TODOS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case GET_TODOS_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        todos: action.payload,
      };

    case GET_TODOS_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        todos: [],
        isError: true,
      };

    default:
      return oldState;
  }
};

export { Reducer };
