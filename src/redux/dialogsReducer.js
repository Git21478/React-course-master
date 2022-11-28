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
      ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
            
        case SEND_MESSAGE: 
            let body = action.newMessageBody 
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            } 
        
        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer