let initialState = {
    dialogs: [
        {id: 1, name: 'Evgeniy'},
        {id: 2, name: 'Alexander'},
        {id: 3, name: 'Alena'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Konstantin'},
        {id: 5, name: 'Konstantin'},
        {id: 5, name: 'Konstantin'},
      ],
      
    messages: [
        {id: 1, message: 'Hi',},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Welcome'},
        {id: 3, message: 'Welcome'},
        {id: 3, message: 'Welcome'},
      ],

    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;

        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body},)
            return state;

        default:
            return state;
    }
}

export default dialogsReducer