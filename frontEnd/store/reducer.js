
import {
    USER_RESPONSE,BOT_RESPONSE,CONV_ID, CLOSE_CONNECTION, OPEN_CONNECTION, DATA_REFRESHED
}
from './actionTypes';

const initialState ={
    messages:[],
    convID:"",
    connectionStatus:false,

}

export default  reducer = (state=initialState,action) =>{
    switch(action.type){
        case USER_RESPONSE:
            return {
                ...state,
                messages:[...state.messages,action.msgData],
            }
        case BOT_RESPONSE:
            return {
                ...state,
                messages:[...state.messages,action.msgData]
            }
        case CONV_ID:
            return {
                ...state,
                convID:action.convID
            }
        case CLOSE_CONNECTION:
            return{
                ...state,
                connectionStatus:false

            }
        case OPEN_CONNECTION:
            return{
                ...state,
                connectionStatus:true
            }
        case DATA_REFRESHED:
            return{
                ...state,
                messages:[],
                convID:"",
                connectionStatus:false,
                
            }
        default:
            return state
    }

}