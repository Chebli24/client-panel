import {NOTIFY_USER} from "../actions/types";
import { act } from "react-dom/test-utils";

const initialState = {
    message:null,
    messageType: null
}

export default function(state = initialState, action){
    switch(action.type){
        case NOTIFY_USER:
            return{
                ...state,
                message: action.message,
                messageType: action.messageType
            }
        default:
            return state;
    }
}