import {GET_CONVERSATION, LOADING, ERROR, GET_CHATLIST, SORT_CHATLIST} from '../types/conversationTypes'

const INITIAL_STATE = {
    OwnerName: '',
	chatList: [],
    conversation:[],
	loading: false,
	error: '',
    //ownerId: ''
};

export default function reducer(state = INITIAL_STATE, action){
	switch (action.type) {
		case GET_CHATLIST:
            //console.log("vamo a ver");
			return {
				...state,
				chatList: action.payload,
				loading: false,
				error: ''
			};

		case GET_CONVERSATION:
			return {
				...state,
                OwnerName: action.OwnerName,
				conversation: action.payload,
				loading: false,
				error: ''
			};

        case   SORT_CHATLIST:
            return {
				...state,
				chatList: action.payload,
				loading: false,
				error: ''
			};


		case LOADING:
			return { ...state, loading: true };

		case ERROR:
			return { ...state, error: action.payload, loading: false };

		default: return state;
	};
};
