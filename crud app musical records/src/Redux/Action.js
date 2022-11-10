import axios from "axios";
import { ADD, GET_MUSIC_RECORD_FAILURE, GET_MUSIC_RECORD_REQUEST, GET_MUSIC_RECORD_SUCCESS, REDUCE } from "./ActionType"



const getMusicRecordRequest = ()=>{
    return {
        type: GET_MUSIC_RECORD_REQUEST,
        
    }
}

const getMusicRecord = ()=>{
    dispatch(getMusicRecordRequest());

    return axios.get("http//localhost:8080/albums").then(res=>{
        type: GET_MUSIC_RECORD_SUCCESS,
        payload: res.data
    })
    .catch((err)=>{
        dispatch ({type: GET_MUSIC_RECORD_FAILURE})
    })
}

export {}