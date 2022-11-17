const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Evgeniy'},
        {id: 2, name: 'Alexander'},
        {id: 3, name: 'Alena'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Konstantin'},
        {id: 6, name: 'Konstantin'},
        {id: 7, name: 'Konstantin'},
      ],
      
    messages: [
        {id: 1, message: 'Hi',},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Welcome'},
        {id: 4, message: 'Welcome'},
        {id: 5, message: 'Welcome'},
      ],

    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {

    

    

    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.body
            } 
    
        
        case SEND_MESSAGE: 
            let body = state.newMessageBody 
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            } 
        
        default:
            return state;
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE})
export const updateNewMessageBody = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer