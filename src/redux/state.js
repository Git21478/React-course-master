let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hi', likes: 12},
                {message: 'How are you', likes: 15},
              ],
    
            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {
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
              ]
    },  
},

getState() {
    return this._state
},

subscribe(observer) {
    this._callSubscriber = observer
},

_callSubscriber() {
    console.log('State was changed')
},



dispatch(action) {
    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state) 
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state)
    }
}

}







export default store;