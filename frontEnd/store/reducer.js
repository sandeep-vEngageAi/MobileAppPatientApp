
import {
    USER_RESPONSE,BOT_RESPONSE
}
from './actionTypes';

const initialState ={
    messages:[]
}

export default  reducer = (state=initialState,action) =>{
    switch(action.type){
        case USER_RESPONSE:
            return {
                ...state,
                messages:[...state.messages,action.msgData]
            }
        case BOT_RESPONSE:
            return {
                ...state,
                messages:[...state.messages,action.msgData]
            }
        default:
            return state
    }

}