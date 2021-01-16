
import {
    USER_RESPONSE,BOT_RESPONSE
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