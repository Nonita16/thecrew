import Instance from '../service';
import {GET_CONVERSATION, LOADING, ERROR, GET_CHATLIST, SORT_CHATLIST} from '../types/conversationTypes';

export const getChatList = () => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        const response = await Instance.get('/conversationMetadata?&_limit=20');
        dispatch({
            type: GET_CHATLIST,
            payload: response.data
        })
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: "Something went wrong, try later"
        })
    }
}

export const getConversation = (ownerId, OwnerName) => async (dispatch) => {
    
    dispatch({
        type: LOADING
    });
    try {
        const response = await Instance.get(`/messages?ownerId=${ownerId}&_sort=messageDateTime&_order=asc&_limit=10`);
        dispatch({
            type: GET_CONVERSATION,
            payload: response.data,
            OwnerName: OwnerName
        })
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: "Something went wrong, try later"
        })
    }
}

export const sortChatList = (flagOrder) => async (dispatch) => {
    
    let order = flagOrder ? 'asc' : 'desc';
    
    dispatch({
        type: LOADING
    });
    try {
        const response = await Instance.get(`/conversationMetadata?_sort=ownerId&_order=${order}`);
        console.log(response.data)
        dispatch({
            type: SORT_CHATLIST,
            payload: response.data,
        })
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: "Something went wrong, try later"
        })
    }
}
