
import {
    USER_RESPONSE,BOT_RESPONSE,CONV_ID,
    CLOSE_CONNECTION,OPEN_CONNECTION,
    DATA_REFRESHED
}
from './actionTypes';

export const sendMessage =(payload) =>{
    return {
        type:USER_RESPONSE,
        msgData: payload
    }
}
export const receiveMessage =(payload) =>{
    return {
        type:BOT_RESPONSE,
        msgData: payload
    }
}

export const updateConvId = (payload) =>{
    return{
        type:CONV_ID,
        convID:payload
    }
}
export const openSocketConnection = () =>{
    return{
        type:OPEN_CONNECTION,
        connectionState:true
    }
}
export const closeSocketConnection = () =>{
    return{
        type:CLOSE_CONNECTION,
        connectionState:false
    }
}

export const dataRefreshedCompletely =() =>{
    return{
        type:DATA_REFRESHED,
    }
}